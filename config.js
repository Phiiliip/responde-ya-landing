/*
  CONFIGURACIÓN DE RESPONDEYA
  Es el único archivo que hay que editar para dejar el sitio operativo.
  Lo leen todas las páginas (inicio, empezar, contacto, etc.).
*/
window.RESPONDEYA = {

  // Número de WhatsApp Business en formato internacional, sin + ni espacios.
  // Ejemplo: "5491122334455". Mientras diga PEGA_TU..., los botones avisan
  // en vez de abrir un chat con un número que no existe.
  WHATSAPP_NUMBER: "5491172120111",
  MENSAJE: "Hola, vi RespondeYA y quiero saber más.",

  // URL que recibe el formulario de "Empezar" (por ejemplo un endpoint de
  // Formspree, un webhook de n8n o un Apps Script de Google).
  // Vacío = el formulario avisa que falta configurarlo y NO finge enviar nada.
  FORM_ENDPOINT: "",

  // Mail de contacto y de derechos sobre datos personales. Vacío = se muestra [DATO].
  CONTACT_EMAIL: "",

  // Planes. "precio" en número (por mes) o null para mostrar "Consultar".
  // Los volúmenes y lo que incluye cada plan son una propuesta: ajustalos a lo
  // que realmente podés entregar, porque todo lo que figura acá es un compromiso.
  MONEDA: "USD",
  PLANES: [
    {
      id: "inicio",
      nombre: "Inicio",
      para: "Para empezar a atender tus consultas por WhatsApp.",
      volumen: "Hasta 300 conversaciones por mes",
      precio: null,
      destacado: false,
      incluye: [
        "Tu número de WhatsApp Business",
        "Atención 24 horas",
        "Alquiler, venta y pozo en el mismo agente",
        "Calificación de cada interesado",
        "Agenda de visitas",
        "Derivación al asesor con resumen",
        "Carga de tus propiedades y condiciones",
        "Soporte directo por WhatsApp"
      ]
    },
    {
      id: "crecimiento",
      nombre: "Crecimiento",
      para: "Para un equipo que recibe más consultas cada mes.",
      volumen: "Hasta 1.000 conversaciones por mes",
      precio: null,
      destacado: true,
      incluye: [
        "Todo lo de Inicio",
        "Más conversaciones por mes"
      ]
    },
    {
      id: "a-medida",
      nombre: "A medida",
      para: "Para varias sucursales o un volumen que supera los planes anteriores.",
      volumen: "Más de 1.000 conversaciones por mes",
      precio: null,
      destacado: false,
      incluye: [
        "Todo lo de Inicio",
        "Volumen a medida",
        "Se cotiza según tu operación"
      ]
    }
  ]
};
