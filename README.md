# Portafolio Personal - V2 React

Portafolio personal desarrollado con React, TypeScript, ChakraUI y Tailwind CSS.

## Tecnologías Utilizadas

- **React 19** - Biblioteca para interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Build tool y dev server ultrarrápido
- **ChakraUI v3** - Sistema de componentes accesible
- **Tailwind CSS v4** - Framework de utilidades CSS
- **React Icons** - Iconos para React

## Características

- Diseño moderno y responsivo
- Modo claro/oscuro con ChakraUI
- Componentes reutilizables
- Totalmente responsivo
- Optimizado con Vite
- SEO friendly
- Accesibilidad (a11y)
- Animaciones suaves

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Barra de navegación
│   ├── ProjectCard.tsx # Tarjeta de proyecto
│   ├── Footer.tsx      # Pie de página
│   └── ui/             # Componentes UI de ChakraUI
├── data/               # Datos de la aplicación
│   └── projects.ts     # Lista de proyectos
├── types.ts            # Definiciones TypeScript
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

## Personalización

### Añadir un nuevo proyecto

Edita el archivo `src/data/projects.ts` y añade un nuevo objeto al array:

```typescript
{
  id: 7,
  title: 'Nombre del proyecto',
  description: 'Descripción detallada',
  image: '/images/proyecto.png',
  technologies: [
    { name: 'React', icon: 'FaReact' },
  ],
  status: 'completed',
  statusText: 'Terminado',
  projectUrl: 'https://ejemplo.com',
  codeUrl: 'https://github.com/usuario/repo',
}
```

### Cambiar información personal

Edita los componentes `Header.tsx` y `Footer.tsx` para actualizar:
- Nombre
- Enlaces a redes sociales
- Copyright

### Añadir imágenes

Coloca las imágenes de tus proyectos en `public/images/`

## Temas y Estilos

El proyecto usa ChakraUI v3 con soporte para modo claro/oscuro. Los estilos se pueden personalizar en:
- `src/components/ui/provider.tsx` - Configuración del tema
- `src/index.css` - Estilos globales con Tailwind

## Build

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## Deploy

Puedes deployar este proyecto en:
- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

## Autor

**Zaid Alberto Ramírez Hernández**
- GitHub: [@ZaidHernandezDev](https://github.com/ZaidHernandezDev)
- LinkedIn: [Zaid Alberto Ramírez Hernández](https://www.linkedin.com/in/zaid-alberto-ramirez-hernandez-web-dev-jr/)

## Licencia

Este proyecto está bajo la Licencia MIT.

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
