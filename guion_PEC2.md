# Guion PEC2 (≈5 minutos) — explicado paso a paso

> Objetivo: que el video sea fácil de seguir, empezando por el resultado final (Netlify) y luego entrando en el código.

---

## 1) Arranque: mostrar lo final (≈30-40s)
Buenas, en este video voy a explicar mi PEC2. Para empezar, enseño directamente el resultado final: la web ya está **desplegada en Netlify** y también tenéis el **repositorio en GitHub**.

Ahora mismo podéis ver que el sitio tiene **4 páginas**: la **portada** y tres páginas interiores. Además, la web está pensada para verse bien en **móvil, tablet y escritorio**, o sea que es responsive.

---

## 2) Qué hice y cómo enfoqué el trabajo (≈40-50s)
La base del proyecto la saqué de **UOC Boilerplate**, y me apoyé en un flujo moderno con Sass y compilación para producción. La idea fue ir por partes: primero tener la estructura y el contenido, y después ir afinando el estilo y los requisitos del enunciado.

En cuanto a estilo, usé **Bootstrap 5** como base visual y Sass para personalizarlo. También metí las técnicas que pedían en el enunciado: **CSS Grid** en la portada, **Flex** en la página de ponentes, y **container queries** en las páginas.

---

## 3) Explico la estructura del código (≈50-60s)
Vale, ahora si pasamos al proyecto, lo que hice fue separar el código para que fuese más fácil de mantener.

En **HTML** tengo mis páginas en `src/` (por ejemplo `index.html`, `ponentes.html`, `noticia.html` y `contacto.html`). Y en **Sass** separé el CSS en parciales para que cada archivo tenga su responsabilidad: por ejemplo tengo ficheros para variables, layout, componentes y utilidades.

Lo importante aquí es que al final todo se une en `main.scss`, y eso es lo que se compila en producción con `npm run build`.

---

## 4) Layouts por páginas: qué usé y por qué (≈2 minutos)
Ahora me centro en cada página y en los requisitos clave.

### Portada (CSS Grid + fallback con @supports) (≈25-30s)
La **portada** la hice con **CSS Grid** porque quería que quedase como un póster promocional. Para no depender solo de Grid, añadí un **fallback con `@supports`**, así si el navegador no lo soporta, el diseño sigue siendo usable.

### Página de ponentes (Flex sin row/col de Bootstrap) (≈25-30s)
En `ponentes.html` hice una retícula de ponentes con **Flexbox**. Lo importante aquí es que **no usé** las clases `.row` o `.col-*` de Bootstrap, tal y como pedía el enunciado. Entonces el comportamiento lo controlo directamente desde mi CSS.

### Página estilo artículo (mínimo 4 párrafos + fotos + :has() + :is/:where) (≈40-45s)
La página `noticia.html` la trabajé como si fuese un **artículo**: tiene **varios párrafos** y **dos fotos**. Además, apliqué estilos a elementos típicos del HTML como **blockquote** y listas.

Y aquí implementé el requisito más “de concepto”: usé **`:has()`** para ajustar estilos según la estructura del contenido. Y lo combiné con **`:is()` y/o `:where()`** para hacerlo de forma más ordenada y legible.

### Página libre (nuevas unidades y colores + interacción) (≈35-40s)
La cuarta página, `contacto.html`, la usé como contenido libre. Aquí probé lo que pedía el módulo de **nuevas unidades y colores**, y además metí un bloque interactivo (por ejemplo un formulario, según la idea del enunciado). La intención fue que fuese útil y que se viera bien en todos los tamaños.

---

## 5) Responsive, container queries y cascada (≈45-55s)
Algo que trabajé para que el responsive se notase de verdad es que no me limité a mirar el tamaño de la pantalla: usé **container queries** para que ciertos estilos dependan del “contenedor”.

También, en dos de las páginas, cuidé el uso de la **cascada** de una forma coherente: primero estilos base y después ajustes, evitando duplicar reglas.

---

## 6) Bootstrap, dependencia externa y Stylelint (≈40-50s)
Con **Bootstrap 5** lo usé como base para estructura y componentes, pero lo personalicé con Sass. Además, usé el mínimo de componentes que pedía el enunciado y personalicé parámetros a través de **variables Sass**.

También añadí una dependencia externa para reforzar la parte visual (por ejemplo iconos), y la integré dentro del diseño.

Por último, configuré **Stylelint** con mis criterios de estilo y con plugins/reglas acordes a la guía que elegí. Lo importante es que al ejecutar la validación no me daba errores.

---

## 7) Compilar, GitHub y Netlify (≈25-35s)
Cuando terminé el desarrollo, compilé para producción con **`npm run build`**. Luego publiqué el código en **GitHub** y ya dejé la web desplegada en **Netlify** para que se vea pública.

En el proyecto se ve claramente la parte de salida en `dist/`, y la parte fuente en `src/`.

---

## Cierre (≈10-15s)
Y esto es todo: un sitio responsive con el diseño y los requisitos del enunciado, usando el stack del curso y cuidando estructura de código, estilo con Sass, buenas prácticas y la parte de validación con Stylelint.

---

## Cómo usar este guion
- Recomendación: empieza el video en la web desplegada y luego pasa a GitHub.
- Luego, enseña el código por partes: HTML (páginas) → Sass (main + parciales) → 1-2 ejemplos de cada requisito (Grid fallback, Flex, :has, container queries).

