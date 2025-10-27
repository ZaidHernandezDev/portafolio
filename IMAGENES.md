# 📸 Instrucciones para Imágenes del Portafolio

## Pasos para añadir tus imágenes:

1. **Copia las imágenes de tu portafolio anterior** ubicadas en la carpeta de tu antiguo proyecto
2. **Pégalas en** `public/images/`
3. Las imágenes necesarias son:
   - `css.png` - Proyecto de maquetación HTML/CSS
   - `javascript.png` - Proyecto JavaScript/jQuery
   - `encriptador.png` - Challenge Encriptador
   - `upiicsafood.png` - Proyecto UPIICSA FOOD
   - `google.png` - Buscador de Google
   - `wiki.png` - Proyecto Wiki

## Recomendaciones de optimización:

- **Formato recomendado**: WebP o PNG
- **Dimensiones sugeridas**: 800x500px (ratio 16:10)
- **Peso máximo**: 200KB por imagen
- **Calidad**: Optimiza las imágenes para web

## Herramientas de optimización:

- [TinyPNG](https://tinypng.com/) - Comprime PNG y JPG
- [Squoosh](https://squoosh.app/) - Optimiza y convierte a WebP
- [ImageOptim](https://imageoptim.com/) - Para macOS

## Imágenes placeholder:

Mientras no tengas las imágenes, el proyecto funcionará mostrando un área donde deberían estar las imágenes. No afectará la funcionalidad del portafolio.

## Añadir nuevas imágenes:

1. Coloca la imagen en `public/images/`
2. Actualiza el path en `src/data/projects.ts`:

```typescript
image: '/images/nombre-de-tu-imagen.png',
```

¡Listo! El portafolio se actualizará automáticamente.
