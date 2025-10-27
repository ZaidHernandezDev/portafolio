# 🛠️ Scripts Útiles para el Proyecto

## Comandos de NPM

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en http://localhost:5173

# Producción
npm run build        # Construye el proyecto para producción en /dist
npm run preview      # Previsualiza el build de producción

# Linting
npm run lint         # Ejecuta ESLint para verificar el código
```

## Comandos útiles adicionales

```bash
# Instalar una nueva dependencia
npm install nombre-paquete

# Instalar una dependencia de desarrollo
npm install -D nombre-paquete

# Actualizar dependencias
npm update

# Verificar dependencias desactualizadas
npm outdated

# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

## Git Commands (sugeridos)

```bash
# Estado del repositorio
git status

# Añadir cambios
git add .

# Commit
git commit -m "feat: descripción del cambio"

# Push a GitHub
git push origin v2-react

# Ver historial
git log --oneline

# Crear nueva rama
git checkout -b nombre-rama
```

## Deploy a GitHub Pages

```bash
# 1. Instalar gh-pages
npm install -D gh-pages

# 2. Añadir al package.json en "scripts":
# "deploy": "npm run build && gh-pages -d dist"

# 3. Configurar base en vite.config.ts:
# base: '/portafolio/'

# 4. Ejecutar deploy
npm run deploy
```

## Deploy a Vercel

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# Para producción
vercel --prod
```

## Deploy a Netlify

```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
netlify deploy

# Para producción
netlify deploy --prod
```

## Optimización de imágenes

```bash
# Usando sharp-cli
npm install -g sharp-cli

# Optimizar todas las imágenes en /public/images
sharp -i "public/images/*.{png,jpg}" -o "public/images/optimized" resize 800 500

# Convertir a WebP
sharp -i "public/images/*.{png,jpg}" -o "public/images" -f webp
```

## Analizar el bundle

```bash
# Instalar rollup-plugin-visualizer
npm install -D rollup-plugin-visualizer

# Ejecutar build y generar stats
npm run build

# Abrirá stats.html con el análisis del bundle
```

## Tips de desarrollo

### Hot Module Replacement (HMR)
El servidor de desarrollo ya tiene HMR activado. Los cambios se reflejan inmediatamente sin recargar la página.

### TypeScript Check
```bash
# Verificar tipos sin compilar
npx tsc --noEmit
```

### Format con Prettier (opcional)
```bash
# Instalar Prettier
npm install -D prettier

# Crear .prettierrc
echo '{"semi": true, "singleQuote": true}' > .prettierrc

# Formatear código
npx prettier --write src/**/*.{ts,tsx}
```

### VS Code Extensions Recomendadas
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)
- Auto Rename Tag
- GitLens

---

💡 **Pro Tip**: Usa `npm run dev` y deja el servidor corriendo mientras desarrollas. Los cambios se reflejarán automáticamente gracias a HMR.
