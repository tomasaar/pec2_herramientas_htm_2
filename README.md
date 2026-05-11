# PEC2 - Jornadas de Artesanía

## 🚀 Inicio Rápido

### 1. Clonar el repositorio
```bash
git clone https://github.com/tomasaar/pec2_herramientas_htm_2.git
cd pec2-herramientas-html-css
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Construir el proyecto
```bash
npm run build
```

### 4. Ejecutar en desarrollo
```bash
npm start
```
> Se abrirá automáticamente en http://localhost:5500

## 📋 Información del Proyecto

**PEC2 - Herramientas HTML y CSS**  
**Máster en Desarrollo de Sitios y Aplicaciones Web**  
**Universitat Oberta de Catalunya (UOC)**

Este proyecto implementa un sitio web responsive de 4 páginas para "Jornadas de Artesanía" utilizando tecnologías modernas de CSS.

## 🎯 Características Implementadas

- ✅ 4 páginas responsive (inicio, ponentes, agenda, contacto)
- ✅ Sass + Bootstrap 5 personalizado
- ✅ CSS moderno (Grid, Flexbox, container queries, :has/:is)
- ✅ Stylelint configurado
- ✅ Imágenes locales optimizadas
- ✅ Diseño glassmorphism y gradientes premium

## 📁 Estructura del Proyecto

```
pec2-herramientas-html-css/
├── src/
│   ├── assets/               # Imágenes locales
│   ├── scss/                 # Estilos Sass
│   │   ├── main.scss         # Punto de entrada
│   │   ├── _variables.scss   # Paleta de colores
│   │   ├── _layout.scss      # Layout global
│   │   └── _mixins.scss      # Mixins reutilizables
│   ├── index.html            # Página inicio
│   ├── ponentes.html         # Página ponentes
│   ├── noticia.html          # Página agenda
│   └── contacto.html         # Página contacto
├── dist/css/main.css         # CSS compilado
├── package.json              # Dependencias
├── stylelint.config.js       # Configuración linting
└── README.md                 # Esta documentación
```

## 🛠️ Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run build` | Compila Sass → CSS optimizado |
| `npm run lint:css` | Ejecuta Stylelint |
| `npm start` | Servidor desarrollo (localhost:5500) |

## 🎨 Paleta de Colores

| Color | HEX | Uso |
|-------|-----|-----|
| Azul Principal | `#1e3967` | Identidad principal |
| Azul Secundario | `#2c6d90` | Bordes, navegación |
| Verde Agua | `#4ab5b1` | Estados, acentos |
| Amarillo | `#f7c64b` | Llamadas a acción |
| Naranja | `#e67a4c` | Gradientes, footer |

## 📱 Páginas del Sitio

### 🏠 Inicio (`index.html`)
- Hero con imagen local y glassmorphism
- Navegación transparente
- Botones con hover effects

### 👥 Ponentes (`ponentes.html`)
- Grid de 6 ponentes
- Avatares circulares (165px)
- Información estructurada

### 📅 Agenda (`noticia.html`)
- Artículo con hero visual
- Blockquotes y figuras
- Aside informativo

### 📞 Contacto (`contacto.html`)
- Formulario minimalista
- Inputs con bordes inferiores
- Layout centrado

## 🏗️ Tecnologías Principales

- **HTML5** - Estructura semántica
- **Sass/SCSS** - Preprocesador modular
- **Bootstrap 5** - Framework personalizado
- **CSS Grid & Flexbox** - Layouts modernos
- **Container Queries** - Diseño adaptativo
- **PostCSS/Autoprefixer** - Compatibilidad
- **Stylelint** - Linting de código

## 🔧 Desarrollo

### Prerrequisitos
- Node.js ≥ 16
- npm ≥ 7
- Git

### Configuración de Stylelint
```javascript
module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'color-function-notation': 'modern',
    'scss/at-rule-no-unknown': true
  }
};
```

### Build Process
1. **Sass** compila `src/scss/main.scss`
2. **PostCSS** aplica autoprefixer
3. Output: `dist/css/main.css`

## 🚀 Despliegue

### Opción 1: GitHub Pages
1. Push a rama `main`
2. Settings → Pages → Source: `main`
3. URL: `https://tomasaar.github.io/pec2_herramientas_htm_2/`

### Opción 2: Netlify
1. Conectar repo en Netlify
2. Build command: `npm run build`
3. Publish directory: `src/`

## ✅ Validación

### Build Status
- ✅ Compilación sin errores
- ✅ Linting aprobado
- ✅ Responsive en todos dispositivos
- ✅ Navegadores modernos compatibles

### Performance
- Lighthouse Score > 90
- Imágenes locales (sin dependencias externas)
- CSS optimizado y minificado

## 👨‍💻 Autor

**Tomás A. Rodríguez**  
*Máster Desarrollo Web - UOC*  
PEC2 - Herramientas HTML y CSS

## 📄 Licencia

Proyecto académico - UOC 2026

---

**Estado del proyecto**: ✅ Completo y funcional  
**Última actualización**: Mayo 2026  
**Repositorio**: [GitHub](https://github.com/tomasaar/pec2_herramientas_htm_2)
