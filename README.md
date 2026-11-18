# Invitación web — Juan Manuel Rolón Notario

Invitación de graduación adaptable a teléfonos y computadoras, hecha con HTML, CSS y JavaScript sin frameworks ni dependencias de compilación.

## Datos del evento

- **Graduado:** Juan Manuel Rolón Notario
- **Fecha:** sábado 12 de diciembre de 2026
- **Hora:** 21:00 (Paraguay, UTC−03:00)
- **Lugar:** Salón Municipal de Arroyos y Esteros
- **Mapa:** https://maps.app.goo.gl/XcayssYj99bX46hQ9
- **WhatsApp para confirmaciones:** https://wa.me/595972510330
- **Música:** melodía instrumental tranquila incluida en `assets/musica-original.mp3`.

## Lista de invitados

La sección **Lista de invitados** se despliega al tocar el botón principal. Incluye 17 invitaciones y 40 cupos asignados, divididos en “Lista general” y “Grupo Notario”. Cada invitación tiene su propio botón de WhatsApp y una ventana de confirmación previa. El mensaje se prepara con el nombre de la invitación y sus cupos.

La lista es visible para cualquier visitante de la página. El sitio no muestra estados de asistencia confirmada ni guarda respuestas. La confirmación solo se envía cuando el invitado decide enviar el mensaje desde WhatsApp.

## Música de fondo

La página conserva únicamente el pequeño botón flotante de música. Al tocarlo, reproduce la melodía instrumental tranquila incluida en `assets/musica-original.mp3`; al tocarlo nuevamente, pausa la reproducción. La música se inicia por interacción del visitante, ya que los navegadores suelen bloquear el audio automático con sonido.

No hay video, reproductor de YouTube ni sección musical adicional.

## Compatibilidad de colores con Samsung Internet

La página identifica Samsung Internet mediante su identificador de navegador y aplica un tema alternativo únicamente allí. Las secciones que Samsung suele oscurecer se muestran con fondo azul, texto claro y detalles dorados. En Safari de iPhone, Chrome y otros navegadores se conserva el diseño original.

Esto no cambia la configuración de modo oscuro del dispositivo ni desactiva ajustes del navegador. Es una adaptación visual del propio sitio. Conviene probarla en un teléfono Samsung antes de darla por validada.

## Archivos

- `index.html`: contenido de la invitación, lista de invitados, botón de música y diálogo de WhatsApp.
- `styles.css`: diseño adaptable, lista desplegable, diálogo y tema alternativo de Samsung Internet.
- `script.js`: cuenta regresiva, reproducción/pausa de música, despliegue de la lista y mensajes personalizados de WhatsApp.
- `assets/musica-original.mp3`: melodía instrumental tranquila usada por el botón flotante.
- `assets/favicon.svg`: ícono del sitio.
- `assets/portada-social.svg`: imagen para la vista previa al compartir.
- `.nojekyll`: archivo auxiliar para publicación estática.

## Probar localmente

1. Extraé el ZIP.
2. Abrí la carpeta `invitacion_juan_manuel_GitHub` en Visual Studio Code.
3. Abrí `index.html` en un navegador o utilizá la extensión Live Server.
4. Probá **Ver lista de invitados y confirmar asistencia**.
5. En una invitación, tocá **Confirmar por WhatsApp** y luego **Sí, abrir WhatsApp**. El chat debe abrirse con el mensaje preparado.
6. Tocá el botón flotante **Reproducir música** y comprobá que la melodía comienza; volvé a tocarlo para pausarla.
7. Probá el sitio en Samsung Internet y también en Chrome/Safari para comprobar que el tema alternativo solo se active en Samsung Internet.

## Publicación en GitHub y Cloudflare Pages

- **Repositorio:** https://github.com/pablobritez245-boop/invitacion-juan-manuel
- **Sitio:** https://invitacion-juan-manuel.pages.dev

Para actualizar el sitio, reemplazá los archivos del repositorio por los de esta carpeta y confirmá los cambios en la rama `main`. Cloudflare Pages está conectado al repositorio y publicará el nuevo contenido después del despliegue automático.

No hace falta crear otro enlace ni otro proyecto de Cloudflare. Todos los invitados seguirán usando el mismo enlace público.

## Personalizar

- Textos, lista, evento, mapa y número de WhatsApp: `index.html`.
- Colores y distribución: variables y reglas de `styles.css`.
- Fecha de la cuenta regresiva y comportamiento de botones: `script.js`.
- Archivo de música: reemplazá `assets/musica-original.mp3` por otro audio que tengas derecho a publicar, conservando el mismo nombre.

## Privacidad y funcionamiento

El sitio no recopila ni almacena confirmaciones, no utiliza formularios de terceros, cookies analíticas ni bases de datos. Los nombres y cupos de la lista son públicos porque la sección se muestra en la invitación. Cada botón prepara un mensaje de WhatsApp, pero no lo envía automáticamente.
