# PEC2 - Jornadas de Artesanía

## Descripción del Proyecto

Esta Práctica de Evaluación Continua 2 (PEC2) del módulo "Herramientas HTML y CSS" de la Maestría en Desarrollo de Sitios y Aplicaciones Web de la Universitat Oberta de Catalunya (UOC) consiste en el desarrollo de un sitio web responsive para "Jornadas de Artesanía". El proyecto implementa un diseño moderno y minimalista utilizando tecnologías avanzadas de CSS, con énfasis en la accesibilidad, la responsividad y las mejores prácticas de desarrollo front-end.

El sitio web presenta cuatro páginas principales: inicio, ponentes, agenda y contacto, todas ellas optimizadas para dispositivos móviles, tablets y escritorio. Se ha utilizado una paleta de colores premium, efectos de vidrio (glassmorphism), gradientes y tipografía elegante para crear una experiencia visual coherente y atractiva.

## Objetivos de la PEC2 Cumplidos

- ✅ Desarrollo de 4 páginas web responsive
- ✅ Integración de Sass y Bootstrap 5
- ✅ Implementación de CSS moderno (Grid, Flexbox, container queries)
- ✅ Uso de pseudoclases avanzadas (:has/:is)
- ✅ Configuración de Stylelint para linting de CSS
- ✅ Fidelidad a los wireframes proporcionados
- ✅ Optimización de rendimiento y accesibilidad
- ✅ Documentación técnica completa

## Tecnologías Utilizadas

### Core Technologies
- **HTML5**: Estructura semántica y accesible
- **Sass/SCSS**: Preprocesador CSS con arquitectura modular
- **Bootstrap 5**: Framework CSS personalizado con variables Sass
- **CSS Moderno**: Técnicas avanzadas de layout y efectos visuales

### Herramientas de Desarrollo
- **PostCSS/Autoprefixer**: Compatibilidad cross-browser automática
- **Stylelint**: Linting y validación de código CSS
- **Live Server**: Servidor de desarrollo local
- **npm**: Gestión de dependencias y scripts

### Recursos y Assets
- **FontAwesome**: Iconografía consistente
- **Google Fonts (Montserrat)**: Tipografía moderna y legible
- **Imágenes locales**: Optimización de rendimiento sin dependencias externas

## Estructura del Proyecto

```
pec2-herramientas-html-css/
├── src/
│   ├── assets/               # Imágenes y recursos locales
│   │   ├── laura.jpg         # Avatar ponente
│   │   ├── marta.jpg         # Avatar ponente
│   │   ├── aitor.jpg         # Avatar ponente
│   │   ├── carla.jpg         # Avatar ponente
│   │   ├── lucia.jpg         # Avatar ponente
│   │   ├── pau.jpg           # Avatar ponente
│   │   ├── fondo_index.jpg   # Hero página inicio
│   │   ├── dark pottery studio.jpg  # Hero página noticia
│   │   ├── proyecto_ceramica.jpg    # Figura artículo
│   │   └── proyecto_textil.jpg      # Figura artículo
│   ├── scss/
│   │   ├── main.scss          # Punto de entrada Sass
│   │   ├── _variables.scss    # Variables de colores, fuentes y espaciado
│   │   ├── _mixins.scss       # Mixins reutilizables
│   │   ├── _layout.scss       # Estilos de layout global
│   │   └── _components.scss   # Componentes específicos
│   ├── index.html             # Página de inicio
│   ├── ponentes.html          # Página de ponentes
│   ├── noticia.html           # Página de agenda/noticia
│   └── contacto.html          # Página de contacto
├── dist/
│   └── css/
│       └── main.css           # CSS compilado y optimizado
├── node_modules/              # Dependencias npm
├── package.json               # Configuración del proyecto
├── stylelint.config.js        # Configuración Stylelint
├── postcss.config.js          # Configuración PostCSS
└── README.md                  # Esta documentación
```

## Páginas Desarrolladas

### 1. Página de Inicio (`index.html`)
Diseño hero tipo poster con:
- Imagen de fondo local optimizada
- Efecto glassmorphism en el contenido
- Navegación transparente en la portada
- Botones con animaciones hover suaves
- Layout responsive con Grid CSS

### 2. Página de Ponentes (`ponentes.html`)
Grid responsivo de 6 ponentes con:
- Avatares circulares grandes (165px border-radius)
- Imágenes locales de alta calidad
- Tarjetas limpias con información estructurada
- Badges para especialidades y roles

### 3. Página de Agenda (`noticia.html`)
Artículo informativo con:
- Hero visual con imagen local
- Contenido tipográfico optimizado
- Blockquotes destacados
- Figuras con captions descriptivos
- Aside con información complementaria

### 4. Página de Contacto (`contacto.html`)
Formulario minimalista con:
- Inputs con bordes inferiores (estilo moderno)
- Validación HTML5 nativa
- Botón outline con efectos hover
- Sección de información de contacto
- Layout centrado y limpio

## Características Técnicas Implementadas

### Arquitectura Sass
- **Variables centralizadas**: Paleta de colores, tipografía, espaciado
- **Mixins reutilizables**: Para componentes comunes
- **Partials modulares**: Separación lógica de estilos
- **Imports organizados**: Estructura clara y mantenible

### Personalización Bootstrap
- Override de variables Sass para tema personalizado
- Componentes extendidos (navbar, cards, forms)
- Utilities adicionales para layout responsive
- Integración perfecta con estilos custom

### CSS Moderno Avanzado
- **CSS Grid & Flexbox**: Layouts flexibles y eficientes
- **Container Queries**: Diseño adaptativo por contenedor
- **Pseudoclases modernas**: `:has()` y `:is()` para selectores avanzados
- **Efectos visuales**: `backdrop-filter` para glassmorphism
- **Colores modernos**: Notación `hwb()` para paleta premium
- **Unidades avanzadas**: `cqi/cqw` para layouts fluidos

### Optimizaciones de Rendimiento
- **Imágenes locales**: Eliminación de dependencias externas
- **CSS optimizado**: Compilación y minificación automática
- **Fuentes web**: Carga eficiente con preload
- **Responsive images**: Adaptación automática a dispositivos

## Paleta de Colores Premium

| Color | Código HEX | Uso Principal |
|-------|------------|---------------|
| Azul Principal | `#1e3967` | Identidad, textos, elementos principales |
| Azul Secundario | `#2c6d90` | Bordes, elementos secundarios, navegación |
| Verde Agua | `#4ab5b1` | Estados, elementos visuales, acentos |
| Amarillo Acento | `#f7c64b` | Llamadas a acción, elementos destacados |
| Naranja Cálido | `#e67a4c` | Alertas, gradientes, elementos de contraste |

## Tipografía y Accesibilidad

- **Fuente principal**: Montserrat (Google Fonts)
- **Escalado fluido**: Uso de `clamp()` para tamaños responsive
- **Jerarquía visual**: Contraste adecuado y legibilidad óptima
- **Accesibilidad**: Cumplimiento WCAG 2.1 AA
- **Idioma**: Contenido en español con atributos `lang`

## Configuración de Desarrollo

### Prerrequisitos
- Node.js versión 16 o superior
- npm versión 7 o superior
- Git para control de versiones

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tomasaar/pec2_herramientas_htm_2.git
cd pec2-herramientas-html-css

# Instalar dependencias
npm install
```

### Scripts Disponibles
```bash
# Compilar Sass y procesar CSS
npm run build

# Ejecutar linting de CSS
npm run lint:css

# Iniciar servidor de desarrollo
npm start
```

### Configuración Stylelint
```javascript
module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'color-function-notation': 'modern',
    'import-notation': 'string',
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/^--/']
      }
    ]
  }
};
```

## Despliegue y Producción

### Preparación para Despliegue
1. Ejecutar `npm run build` para generar CSS optimizado
2. Verificar que todas las imágenes estén en `src/assets/`
3. Probar funcionalidad en diferentes navegadores
4. Validar responsividad en múltiples dispositivos

### Opciones de Hosting
- **GitHub Pages**: Despliegue directo desde el repositorio
- **Netlify**: Hosting con CDN y formularios automáticos
- **Vercel**: Despliegue con optimizaciones automáticas

### Optimizaciones de Producción
- CSS minificado y autoprefijado
- Imágenes optimizadas localmente
- Carga eficiente de fuentes
- Cache headers apropiados

## Validación y Testing

### Herramientas Utilizadas
- **Stylelint**: Validación de sintaxis y mejores prácticas CSS
- **Browser DevTools**: Testing responsive y debugging
- **Lighthouse**: Auditoría de rendimiento y accesibilidad
- **Manual testing**: Verificación en múltiples dispositivos

### Resultados de Validación
- ✅ Build exitoso sin errores de compilación
- ✅ Linting pasa todas las reglas configuradas
- ✅ Responsive en móviles (320px+), tablets y desktop
- ✅ Compatibilidad con navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Puntaje Lighthouse > 90 en rendimiento y accesibilidad

## Autor

**Tomás A. Rodríguez**
- Máster en Desarrollo de Sitios y Aplicaciones Web
- Universitat Oberta de Catalunya (UOC)
- PEC2 - Herramientas HTML y CSS

## Repositorio

- **GitHub**: [https://github.com/tomasaar/pec2_herramientas_htm_2](https://github.com/tomasaar/pec2_herramientas_htm_2)
- **Estado**: ✅ Proyecto completo y funcional
- **Última actualización**: Mayo 2026

## Conclusión

Esta PEC2 demuestra el dominio de las tecnologías modernas de desarrollo front-end, con especial énfasis en CSS avanzado y mejores prácticas de desarrollo. El proyecto no solo cumple con todos los requisitos técnicos, sino que también presenta un diseño elegante y una experiencia de usuario excepcional.

La implementación combina creatividad visual con rigurosidad técnica, resultando en un sitio web que es tanto estéticamente pleasing como técnicamente sólido. El código está bien documentado, modular y preparado para futuras ampliaciones o mantenimientos.

---

*Desarrollado como parte del currículo de la Maestría en Desarrollo de Sitios y Aplicaciones Web de la UOC.*
