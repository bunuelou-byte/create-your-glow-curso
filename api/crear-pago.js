export default async function handler(req, res) {
  // Configurar cabeceras CORS de manera estricta para cualquier origen
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Manejar solicitud preflight de CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Solo permitir solicitudes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const body = req.body || {};
    const curso = body.curso;
    const usuario = body.usuario;
    const accessToken = process.env.PASARELA_TOKEN;

    if (!accessToken) {
      return res.status(500).json({ error: 'Falta configurar PASARELA_TOKEN en las variables de entorno de Vercel' });
    }

    if (!curso || !usuario) {
      return res.status(400).json({ error: 'Faltan datos del curso o del usuario en la petición' });
    }

    const referenciaExterna = `${usuario.uid || 'anon'}_${curso.id || 'curso'}`;

    // Base URL de GitHub Pages
   const baseUrl = "https://bunuelou-byte.github.io/create-your-glow-curso";
    const urlExito = `${baseUrl}/pago-exitoso.html?ref=${referenciaExterna}`;
    const urlPendiente = `${baseUrl}/pago-pendiente.html?ref=${referenciaExterna}`;
    const urlRechazado = `${baseUrl}/pago-rechazado.html?ref=${referenciaExterna}`;

    const preferenciaPayload = {
      items: [
        {
          id: String(curso.id || '1'),
          title: String(curso.title || 'Curso Digital'),
          unit_price: Number(curso.price || 0),
          quantity: 1,
          currency_id: "COP"
        }
      ],
      payer: {
        email: String(usuario.email || 'test_payer@test.com')
      },
      external_reference: referenciaExterna,
      back_urls: {
        success: urlExito,
        pending: urlPendiente,
        failure: urlRechazado
      },
      auto_return: "approved"
    };

    const respuesta = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(preferenciaPayload)
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok) {
      return res.status(respuesta.status).json({
        error: "Error devuelto por la API de Mercado Pago",
        detalles: resultado
      });
    }

    // Seleccionar el link de pago según el tipo de token (Sandbox o Producción)
    const linkPago = accessToken.startsWith('TEST-') ? resultado.sandbox_init_point : resultado.init_point;

    return res.status(200).json({
      status: "success",
      init_point: linkPago,
      reference: referenciaExterna
    });

  } catch (error) {
    return res.status(500).json({ error: "Excepción en el servidor: " + error.toString() });
  }
}
