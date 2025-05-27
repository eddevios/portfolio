# eddevios Portfolio

Portfolio profesional desarrollado con React, TypeScript y Tailwind CSS, presentando servicios de desarrollo móvil, web y videojuegos.

## 🚀 Tecnologías Utilizadas

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **Vite** - Build tool y dev server

## 📁 Estructura del Proyecto

```
eddevios-portfolio/
├── src/
│   ├── App.tsx           # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── public/              # Archivos estáticos
├── package.json        # Dependencias y scripts
└── vite.config.ts      # Configuración de Vite
```

## 🛠️ Principales Archivos

- **App.tsx**: Contiene toda la lógica y componentes de la aplicación:
  - Hero Section
  - Servicios con pestañas
  - Sección de noticias
  - Experiencia
  - Formulario de contacto

- **index.css**: Importa los estilos de Tailwind CSS

- **vite.config.ts**: Configuración del bundler y plugins

## 🚦 Requisitos Previos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

## 📥 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🔧 Desarrollo

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

### Modificar Contenido

1. **Servicios**: Modifica el array de servicios en `App.tsx`:
```typescript
const services = [
  { id: 'android', icon: Android, label: 'Android' },
  // Añade o modifica servicios aquí
];
```

2. **Noticias**: Actualiza el array `news` en `App.tsx`:
```typescript
const news = [
  {
    title: 'Nueva Noticia',
    date: '2024-03-15',
    description: 'Descripción...',
    image: 'URL_de_imagen'
  },
  // Añade más noticias
];
```

3. **Experiencia**: Modifica las estadísticas en la sección correspondiente:
```typescript
const stats = [
  { number: '50+', text: 'Aplicaciones Móviles' },
  // Modifica o añade estadísticas
];
```

## 📦 Despliegue

### Despliegue Local (XAMPP)

1. Construye la aplicación:
```bash
npm run build
```

2. Copia el contenido de la carpeta `dist` a tu directorio de XAMPP:
   - Ubicación en Windows: `C:\xampp\htdocs\eddevios`
   - Ubicación en Linux: `/opt/lampp/htdocs/eddevios`
   - Ubicación en macOS: `/Applications/XAMPP/htdocs/eddevios`

3. Accede a través de:
```
http://localhost/eddevios
```

### Configuración de XAMPP

1. Asegúrate de que Apache está corriendo en XAMPP
2. Configura un Virtual Host (opcional):

```apache
<VirtualHost *:80>
    DocumentRoot "/xampp/htdocs/eddevios"
    ServerName eddevios.local
    <Directory "/xampp/htdocs/eddevios">
        Options Indexes FollowSymLinks MultiViews
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

3. Añade a tu archivo hosts:
```
127.0.0.1 eddevios.local
```

## 🎨 Personalización

### Colores

Los colores principales se pueden modificar en las clases de Tailwind:

- Fondo principal: `bg-gray-900`
- Acentos: `from-purple-500 to-blue-500`
- Textos: `text-white`, `text-gray-300`, `text-gray-400`

### Imágenes

Las imágenes se cargan desde Unsplash. Para cambiarlas, modifica las URLs en las secciones correspondientes del `App.tsx`.

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints de Tailwind:
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

## ⚠️ Consideraciones

1. Asegúrate de tener habilitado el mod_rewrite en Apache para el routing
2. Configura correctamente los CORS si vas a hacer llamadas API
3. Optimiza las imágenes antes de desplegarlas
4. Mantén actualizadas las dependencias

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request