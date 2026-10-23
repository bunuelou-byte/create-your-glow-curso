javascript
export default async function handler(req, res) {
  // Configurar cabeceras CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
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
    const { curso, usuario } = req.body;
    const accessToken = process.env.PASARELA_TOKEN;

    if (!accessToken) {
      return res.status(500).json({ error: 'Falta configurar PASARELA_TOKEN en Vercel' });
    }

    const referenciaExterna = `${usuario.uid}_${curso.id}`;

    // Base URL de GitHub Pages
    const baseUrl = "https://bunuelou-byte.github.io/create-your-glow"; 
    const urlExito = `${baseUrl}/pago-exitoso.html?ref=${referenciaExterna}`;
    const urlPendiente = `${baseUrl}/pago-pendiente.html?ref=${referenciaExterna}`;
    const urlRechazado = `${baseUrl}/pago-rechazado.html?ref=${referenciaExterna}`;

    const preferenciaPayload = {
      items: [
        {
          id: String(curso.id),
          title: String(curso.title),
          unit_price: Number(curso.price),
          quantity: 1,
          currency_id: "COP"
        }
      ],
      payer: {
        email: String(usuario.email)
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
        error: "Error de Mercado Pago",
        detalles: resultado
      });
    }

    // CAMBIO CLAVE: Devolvemos explícitamente el link de pruebas (sandbox_init_point)
    // si estás usando un token de pruebas (TEST-...). Si prefieres producción, puedes usar init_point.
    const linkPago = accessToken.startsWith('TEST-') ? resultado.sandbox_init_point : resultado.init_point;

    return res.status(200).json({
      status: "success",
      init_point: linkPago,
      reference: referenciaExterna
    });

  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
}
