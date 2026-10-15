/*
  CONFIGURACIÓN DE RESPONDEYA
  Es el único archivo que hay que editar para dejar el sitio operativo.
  Lo leen todas las páginas (inicio, empezar, contacto, etc.).
*/
window.RESPONDEYA = {

  // Número de WhatsApp Business en formato internacional, sin + ni espacios.
  // Ejemplo: "5491122334455". Mientras diga PEGA_TU..., los botones avisan
  // en vez de abrir un chat con un número que no existe.
  WHATSAPP_NUMBER: "PEGA_TU_NUMERO_DE_WHATSAPP_BUSINESS",
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
  // Días de prueba sin cobro inicial. Se cuentan desde que el agente está andando con tus propiedades.
  PRUEBA_DIAS: 14,

  MONEDA: "USD",
  PLANES: [
    {
      id: "inicio",
      nombre: "Inicio",
      para: "Para una inmobiliaria que quiere sacarse de encima las consultas básicas.",
      volumen: "Hasta 300 conversaciones por mes",
      precio: null,
      destacado: false,
      incluye: [
        "1 número de WhatsApp Business",
        "Atención 24 horas",
        "Calificación de cada interesado",
        "Agenda de visitas",
        "Derivación al asesor con resumen",
        "Carga de tus propiedades y condiciones"
      ]
    },
    {
      id: "crecimiento",
      nombre: "Crecimiento",
      para: "Para el equipo que ya tiene volumen y varias operaciones a la vez.",
      volumen: "Hasta 1.000 conversaciones por mes",
      precio: null,
      destacado: true,
      incluye: [
        "Todo lo de Inicio",
        "Hasta 2 números de WhatsApp Business",
        "Alquiler, venta y pozo en el mismo agente",
        "Ajuste mensual del guion según lo que preguntan",
        "Soporte directo por WhatsApp"
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
        "Todo lo de Crecimiento",
        "Más números y sucursales",
        "Configuración a medida",
        "Se cotiza según tu operación"
      ]
    }
  ]
};
