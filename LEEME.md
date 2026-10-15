# Sitio de RespondeYA (GitHub Pages)

Todo el sitio son archivos estáticos. Se publica copiando esta carpeta a la raíz del repo y activando
Settings → Pages → rama `main`, carpeta `/ (root)`.

## Lo único que hay que editar para dejarlo operativo: `config.js`

| Qué | Dónde | Mientras no esté |
|---|---|---|
| Número de WhatsApp Business | `WHATSAPP_NUMBER` | Los botones avisan, no abren ningún chat |
| Destino del formulario | `FORM_ENDPOINT` | El formulario avisa que no envió nada |
| Mail de contacto y de datos personales | `CONTACT_EMAIL` | Se muestra `[DATO]` |
| Precios de los planes | `PLANES[].precio` (número, por mes) | Se muestra "Consultar" |

Los volúmenes y lo que incluye cada plan también están ahí. Son una propuesta: cada línea es un compromiso.

## El formulario no puede guardar solo

La página es estática: no tiene servidor ni base de datos. `FORM_ENDPOINT` tiene que apuntar a un servicio que reciba un POST con JSON:

- **Formspree** (el más simple): creás un formulario y pegás su URL.
- **Webhook de n8n**: cuando tengas n8n andando, recibe el POST y lo manda a Airtable, a un mail o adonde quieras.
- **Google Apps Script**: una hoja de Google que recibe las filas.

No pongas claves de Airtable ni de ningún servicio dentro de `config.js`: el archivo es público.
No hay login ni contraseñas a propósito: sin servidor, guardarlas sería inseguro.

## Páginas legales

`terminos.html`, `privacidad.html` y `proteccion-de-datos.html` son borradores. Los campos marcados
con `[DATO: ...]` (titular, CUIT, domicilio, proveedores, plazos, jurisdicción) hay que completarlos con
información real, y conviene que los revise un abogado antes de publicar.

## Dominio propio

Agregá un archivo `CNAME` en la raíz con el dominio (por ejemplo `respondeya.net`) y apuntá los DNS a GitHub Pages.
