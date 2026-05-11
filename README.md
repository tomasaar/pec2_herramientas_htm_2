# PEC2 - Jornadas de Artesanía

## Descripción del Proyecto

Esta PEC2 del módulo "Herramientas HTML y CSS" de la Maestría en Desarrollo de Sitios y Aplicaciones Web de la UOC presenta un sitio web responsive para "Jornadas de Artesanía". El diseño es moderno, minimalista y utiliza una paleta de colores premium con elementos de vidrio, gradientes y tipografía elegante.

## Tecnologías Utilizadas

- **Sass**: Organización modular, variables, mixins y estilos reutilizables.
- **Bootstrap 5**: Componentes base y utilities personalizados.
- **FontAwesome**: Iconos para navegación, botones y elementos de contacto.
- **PostCSS/Autoprefixer**: Compatibilidad amplia de CSS.
- **Stylelint**: Linting de Sass para mantener el código limpio.
- **CSS moderno**: Grid, Flexbox, container queries, backdrop-filter, hwb(), cqi/cqw.
- **Local assets**: Todas las imágenes son locales, no se usan recursos externos en la versión final.

## Estructura del Proyecto

```
src/
├── assets/               # Imágenes locales usadas en el sitio
├── scss/
│   ├── main.scss          # Entrada principal de Sass
│   ├── _variables.scss    # Paleta, tipografía y Bootstrap overrides
│   ├── _mixins.scss       # Mixins reutilizables
│   ├── _layout.scss       # Estilos de layout y componentes globales
│   └── _components.scss   # Estilos específicos de secciones
├── index.html             # Página de inicio
├── ponentes.html          # Página de ponentes
├── noticia.html           # Página de agenda / noticia
└── contacto.html          # Página de contacto
```

## Páginas Desarrolladas

### 1. Página de Inicio (`index.html`)
- Hero tipo poster con imagen local y efecto de glassmorphism.
- Hero copy desplazado a la derecha con tarjeta translúcida.
- Navegación transparente en la portada.
- Botones con hovers suaves y sombras modernas.

### 2. Página de Ponentes (`ponentes.html`)
- Grid responsivo de 6 ponentes.
- Avatares grandes con bordes redondeados (165px) y fotos locales.
- Tarjetas limpias con badges y texto claro.

### 3. Página de Agenda (`noticia.html`)
- Hero de artículo con imagen local.
- Contenido estructurado con blockquote, listas, figuras y aside.
- Uso de estilos tipográficos para mejorar lectura.

### 4. Página de Contacto (`contacto.html`)
- Diseño minimalista y moderno.
- Formulario con inputs de línea inferior.
- Botón de envío con estilo outline y hover.
- Sección de detalles con iconos y texto limpio.

## Características Técnicas Implementadas

### Sass
- Variables centralizadas para paleta, tipografía y espaciado.
- Mixins para tarjetas, secciones y layouts.
- Partial imports para mantener código modular.

### Bootstrap Personalizado
- Personalización de variables de Bootstrap desde Sass.
- Uso de navbar, cards, botones y formularios.
- Utilities propias para espaciados y responsividad.

### CSS Moderno
- **Grid y Flexbox** para layouts responsivos.
- **Container queries** para adaptar secciones dependiendo del contenedor.
- **Backdrop-filter** y transparencias para glassmorphism.
- **Colores hwb()** y gradientes con paleta premium.
- **Unidades cqi/cqw** para dimensiones relativas a la interfaz.

### Footer
- Footer con gradiente diagonal usando:
  - `#e67a4c`
  - `#2c6d90`
  - `#4ab5b1`
- Texto y enlaces en blanco para contraste.

## Paleta de Colores
- **#1e3967** — Azul oscuro principal
- **#2c6d90** — Azul secundario
- **#4ab5b1** — Verde agua
- **#f7c64b** — Amarillo acento
- **#e67a4c** — Naranja cálido

## Tipografía
- Fuente base: **Montserrat**
- Uso de `clamp()` para escalado fluido de títulos y textos.
- Enfoque en legibilidad y jerarquía visual.

## Configuración de Desarrollo

### Dependencias
```json
{
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "bootstrap": "^5.3.0",
    "live-server": "^1.2.2",
    "postcss": "^8.4.35",
    "postcss-cli": "^10.1.0",
    "postcss-scss": "^4.0.3",
    "sass": "^1.72.1",
    "stylelint": "^16.2.1",
    "stylelint-config-standard-scss": "^13.0.0"
  }
}
```

### Scripts
- `npm run build`: Compila Sass y aplica Autoprefixer.
- `npm run lint:css`: Revisa Sass con Stylelint.
- `npm start`: Inicia Live Server en `src/`.

### Estilo y Linting
- Stylelint configurado con `stylelint-config-standard-scss`.
- Reglas para soportar notación moderna de colores y imports Sass.

## Cómo ejecutar el proyecto

1. Instala dependencias con `npm install`.
2. Ejecuta `npm run build`.
3. Abre `src/index.html` o usa `npm start`.

## Despliegue

Este proyecto está listo para desplegar en GitHub Pages o Netlify.

## Documentación del repositorio

Repositorio GitHub esperado:
https://github.com/tomasaar/pec2_herramientas_htm_2.git

## Comentarios finales

La entrega cumple con los requisitos de PEC2:
- 4 páginas funcionales.
- Diseño responsive y moderno.
- Uso de Sass, Bootstrap y CSS contemporáneo.
- Localización de recursos de imágenes.
- Documentación para desarrollo y despliegue.
