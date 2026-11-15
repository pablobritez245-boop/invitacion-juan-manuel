# Invitación web — Juan Manuel Rolón Notario

Invitación de graduación estática, adaptable a teléfonos y computadoras. Está construida con HTML, CSS y JavaScript sin frameworks ni dependencias de compilación.

## Datos del evento

- **Graduado:** Juan Manuel Rolón Notario
- **Fecha:** sábado 12 de diciembre de 2026
- **Hora:** 21:00 (Paraguay, UTC−03:00)
- **Lugar:** Salón Municipal de Arroyos y Esteros
- **Mapa:** https://maps.app.goo.gl/XcayssYj99bX46hQ9
- **Confirmación:** https://wa.me/595972510330

El botón de WhatsApp abre una conversación con un mensaje de confirmación preparado. El botón de ubicación abre el enlace de Google Maps facilitado.

## Archivos

- `index.html`: contenido, metadatos y enlaces de la invitación.
- `styles.css`: diseño responsive azul marino, dorado y blanco.
- `script.js`: cuenta regresiva, control de música y animaciones de entrada.
- `assets/musica-original.mp3`: melodía instrumental original creada para esta invitación.
- `assets/favicon.svg`: ícono del sitio.
- `assets/portada-social.svg`: imagen vectorial para la vista previa de enlaces cuando el servicio que comparte la página admite SVG en Open Graph.

## Probar localmente

1. Extraé el ZIP.
2. Abrí la carpeta `invitacion_juan_manuel` en Visual Studio Code.
3. Abrí `index.html` en el navegador. También podés usar la extensión Live Server.
4. Tocá **REPRODUCIR MÚSICA** para activar la melodía. Los navegadores no permiten iniciar sonido automáticamente sin una interacción del visitante.
5. Probá **CÓMO LLEGAR** y **CONFIRMAR ASISTENCIA**.

## Publicar con GitHub Pages

1. Creá un repositorio nuevo, por ejemplo `invitacion-juan-manuel`.
2. Subí el contenido de esta carpeta directamente a la raíz del repositorio. `index.html` debe quedar en la raíz, no dentro de otra subcarpeta.
3. En GitHub, abrí **Settings → Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**.
5. Seleccioná la rama `main` y la carpeta `/(root)`, y guardá.
6. Esperá a que GitHub Pages complete la publicación. La dirección tendrá el formato `https://USUARIO.github.io/invitacion-juan-manuel/`.

La publicación requiere que GitHub Pages esté disponible para el repositorio y que la cuenta tenga permisos para configurar Pages. El sitio es público: no incluyas datos personales adicionales que no quieras compartir.

## Personalizar

- Texto, fecha, hora y enlaces: `index.html`.
- Colores y distribución: variables al comienzo de `styles.css`.
- Fecha del contador: constante `eventDate` al comienzo de `script.js`.

## Privacidad y funcionamiento

Este proyecto no recopila ni almacena confirmaciones. El botón de WhatsApp abre un chat con el número proporcionado; la confirmación se envía solamente cuando el invitado pulsa enviar dentro de WhatsApp. No se emplean formularios de terceros, cookies analíticas ni bases de datos.
