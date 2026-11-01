# Taller Láser · versión de escritorio (Windows)

App instalable que funciona **sin internet**. Tus datos se guardan solo en tu computadora.

## 1. Publicarla (una sola vez, ~5 minutos)

La instalación requiere que la app esté en una dirección `https`. GitHub Pages lo da gratis:

1. Crea una cuenta en <https://github.com> (si no tienes).
2. Botón **New** (nuevo repositorio) → nombre `taller-laser` → **Public** → **Create repository**.
   El código queda público, pero **tus datos no**: nunca salen de tu computadora.
3. En el repositorio: **Add file › Upload files**. Arrastra **todo el contenido** de esta carpeta
   (`index.html`, `sw.js`, `manifest.webmanifest`, y las carpetas `fonts`, `icons`, `vendor`).
   No arrastres la carpeta contenedora, sino lo que hay dentro. Pulsa **Commit changes**.
4. **Settings › Pages** → *Source*: **Deploy from a branch** → *Branch*: **main** y **/(root)** → **Save**.
5. Espera 1 o 2 minutos. Tu app queda en `https://TU-USUARIO.github.io/taller-laser/`.

## 2. Instalarla en Windows

1. Abre esa dirección en **Microsoft Edge** o **Google Chrome**.
2. Edge: icono **Aplicación disponible › Instalar** en la barra de direcciones
   (o menú **⋯ › Aplicaciones › Instalar este sitio como aplicación**).
   Chrome: icono de instalar en la barra de direcciones (o menú **⋮ › Transmitir, guardar y compartir › Instalar página como app**).
3. Aparece en el menú Inicio con su icono; puedes anclarla a la barra de tareas.
   Después de abrirla una vez, funciona sin conexión.

## 3. Pasar tus datos desde la versión en Claude

1. En la app de Claude: **Respaldo y nube › Descargar respaldo (.json)** (deja marcada la casilla de fotos).
2. En la app de escritorio: **Respaldo y nube › Restaurar desde archivo** y elige ese archivo.

## 4. Respaldo automático (recomendado)

**Respaldo y nube › Elegir carpeta de respaldo.** La app guarda `taller-laser-respaldo.json` y una copia por día,
un minuto después de cada cambio y al cerrarla.

- Si eliges una carpeta de **Google Drive para escritorio** (por ejemplo `G:\Mi unidad\Taller Láser`), OneDrive o Dropbox,
  la copia queda también en tu nube.
- Al reiniciar Windows, el navegador puede pedir que reactives el permiso: botón **Reactivar permiso**.
- El respaldo automático no incluye fotos; para eso usa **Descargar respaldo** con fotos de vez en cuando.

## 5. Actualizar

Sube los archivos nuevos al mismo repositorio (reemplazando los anteriores). La app avisa que hay versión nueva;
ciérrala y vuelve a abrirla.

## Importante

- Los datos viven en el perfil de Edge o Chrome **para esa dirección**. No borres los “datos del sitio” de esa página,
  y si desinstalas la app, **no** marques “borrar también los datos”.
- No funciona con doble clic en `index.html`: necesita estar publicada en `https`.
- El **Asistente con IA** y la **nube compartida** solo existen en la versión de Claude. Más adelante se puede
  conectar esta versión a GitHub, Supabase o Google Drive.
