# Invitación web — Juan Manuel Rolón Notario

Invitación de graduación adaptable a teléfonos y computadoras, hecha con HTML, CSS y JavaScript sin frameworks ni dependencias de compilación.

## Datos del evento

- **Graduado:** Juan Manuel Rolón Notario
- **Fecha:** sábado 12 de diciembre de 2026
- **Hora:** 21:00 (Paraguay, UTC−03:00)
- **Lugar:** Salón Municipal de Arroyos y Esteros
- **Mapa:** https://maps.app.goo.gl/XcayssYj99bX46hQ9
- **WhatsApp para confirmaciones:** https://wa.me/595972510330
- **Música:** “Highway to Hell” de AC/DC, mediante el reproductor del video oficial de YouTube.

## Lista de invitados

La sección **Lista de invitados** se despliega al tocar el botón principal. Incluye 17 invitaciones y 40 cupos asignados, divididos en “Lista general” y “Grupo Notario”. Cada invitación tiene su propio botón de WhatsApp y una ventana de confirmación previa. El mensaje se prepara con el nombre de la invitación y sus cupos.

La lista es visible para cualquier visitante de la página. El sitio no muestra estados de asistencia confirmada ni guarda respuestas. La confirmación solo se envía cuando el invitado decide enviar el mensaje desde WhatsApp.

## Música

La canción se muestra mediante un reproductor incrustado del video oficial de AC/DC. El visitante debe tocar **Play** para escucharla. El navegador no permite garantizar reproducción automática con sonido. Si el reproductor no carga, se puede abrir el video oficial directamente en YouTube.

El audio no se copia ni se aloja en este repositorio; se reproduce desde la publicación oficial del artista:
https://www.youtube.com/watch?v=l482T0yNkeo

## Compatibilidad de colores con Samsung Internet

La página identifica Samsung Internet mediante su identificador de navegador y aplica un tema alternativo únicamente allí. Las secciones que Samsung suele oscurecer se muestran con fondo azul, texto claro y detalles dorados. En Safari de iPhone, Chrome y otros navegadores se conserva el diseño original.

Esto no cambia la configuración de modo oscuro del dispositivo ni desactiva ajustes del navegador. Es una adaptación visual del propio sitio. Conviene probarla en un teléfono Samsung antes de publicarla.

## Archivos

- `index.html`: contenido de la invitación, reproductor, lista de invitados y diálogo de WhatsApp.
- `styles.css`: diseño adaptable, lista desplegable, diálogo y tema alternativo de Samsung Internet.
- `script.js`: cuenta regresiva, despliegue de la lista y mensajes personalizados de WhatsApp.
- `assets/favicon.svg`: ícono del sitio.
- `assets/portada-social.svg`: imagen para la vista previa al compartir.
- `.nojekyll`: archivo auxiliar para publicación estática.

## Probar localmente

1. Extraé el ZIP.
2. Abrí la carpeta `invitacion_juan_manuel_GitHub` en Visual Studio Code.
3. Abrí `index.html` en un navegador o utilizá la extensión Live Server.
4. Probá **Ver lista de invitados y confirmar asistencia**.
5. En una invitación, tocá **Confirmar por WhatsApp** y luego **Sí, abrir WhatsApp**. El chat debe abrirse con el mensaje preparado.
6. En la sección **Highway to Hell**, tocá Play para iniciar el video oficial.
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

## Privacidad y funcionamiento

El sitio no recopila ni almacena confirmaciones, no utiliza formularios de terceros, cookies analíticas ni bases de datos. Los nombres y cupos de la lista son públicos porque la sección se muestra en la invitación. Cada botón prepara un mensaje de WhatsApp, pero no lo envía automáticamente.
