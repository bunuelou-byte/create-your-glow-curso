export default async function handler(req, res) {
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

    // Tu URL actual de GitHub Pages
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

    return res.status(200).json({
      status: "success",
      init_point: resultado.init_point,
      sandbox_init_point: resultado.sandbox_init_point,
      reference: referenciaExterna
    });

  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
}
