# eddevios Portfolio

Portfolio profesional desarrollado con React, TypeScript y Tailwind CSS, presentando servicios de desarrollo móvil, web y videojuegos.

## 🚀 Tecnologías Utilizadas

- **React 18** – Biblioteca de UI
- **TypeScript** – Tipado estático
- **Tailwind CSS** – Framework de estilos utilitarios
- **Framer Motion** – Animaciones declarativas
- **Lucide React** – Iconos SVG como componentes React
- **Vite** – Dev server ultrarrápido y bundler
- **Firebase Hosting** – para servir la build en producción y gestionar dominios
- **GitHub Actions** – pipeline CI/CD que compila con Vite y despliega a Firebase automáticamente
- **Node.js & npm** – entorno de ejecución y gestor de paquetes
- **ESLint** – análisis estático de código para mantener la calidad
- **PostCSS & Autoprefixer** – procesado de CSS y generación de prefijos automáticos (vía Tailwind)
- **.env & dotenv** (si usas variables de entorno) – para claves de EmailJS u otras APIs
- **Git** – control de versiones y flujo de trabajo colaborativo
- **EmailJS o tu backend** (opcional) – si el formulario de contacto envía correos sin servidor

## 📁 Estructura del Proyecto

```text
eddevios-portfolio/
├── public/                    # Archivos estáticos (imágenes, favicon)
├── src/
│   ├── App.tsx               # Componente raíz (Hero, servicios, noticias, stats, formulario)
│   ├── main.tsx              # Punto de entrada que renderiza <App/>
│   └── index.css             # Importa @tailwind base, components y utilities
├── .github/
│   └── workflows/
│       └── firebase-hosting-deploy.yml  # Workflow de GitHub Actions
├── firebase.json             # Configuración de Firebase Hosting
├── .firebaserc               # Alias de proyecto Firebase
├── package.json              # Dependencias y scripts
└── vite.config.ts            # Configuración de Vite
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

## 🖥️ URLs del proyecto

- **Repositorio GitHub:** https://github.com/eddevios/portfolio
- **Sitio en Firebase Hosting (producción):**
  - https://eddevios-portfolio-2025.web.app
  - https://eddevios-portfolio-2025.firebaseapp.com

## 🚦 Requisitos Previos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

## 📥 Instalación

1. Clona el repositorio:

### HTTPS:
```bash
git clone https://github.com/eddevios/portfolio.git
```

### SSH:
```bash
git clone git@github.com:eddevios/portfolio.git
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

### 📦 Scripts Disponibles

- `npm run dev` – Servidor de desarrollo con HMR
- `npm run build` – Genera la versión optimizada en `dist/`
- `npm run preview` – Previsualiza la build localmente
- `npm run lint` – Ejecuta ESLint
- `npm run deploy` – Ejecuta `build` y luego `firebase deploy`

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

4. **Imágenes**: Si añades o cambias imágenes, ponlas en `public/images/` y luego impórtalas:
```tsx
import logo from '/images/mi-logo.png'
<img src={logo} alt="Mi logo"/>
```

## 🔄 Proceso de Despliegue

### Firebase Hosting (Automático)

Si estás usando GitHub Actions, basta con hacer commit y push a la rama `main`:

```bash
git add .
git commit -m "Actualiza teléfono y servicios"
git push origin main
```

El workflow `.github/workflows/firebase-hosting-deploy.yml` se encargará de compilar y publicar tu sitio automáticamente.

### Firebase Hosting (Manual)

```bash
npm run build    # genera carpeta dist/
npm run deploy   # build + firebase deploy
```

### Despliegue Local (XAMPP)

1. Construye la aplicación:
```bash
npm run build
```

2. Copia el contenido de la carpeta `dist` a tu directorio de XAMPP:
   - **Windows**: `C:\xampp\htdocs\eddevios`
   - **Linux**: `/opt/lampp/htdocs/eddevios`
   - **macOS**: `/Applications/XAMPP/htdocs/eddevios`

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
5. Comprueba que el formulario de contacto funciona (usa el entorno de EmailJS o tu backend)

## 🤝 Contribuir

1. Haz fork del repositorio
2. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Haz tus cambios y commitea: `git commit -m "Descripción de la mejora"`
4. Envía tu rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request describiendo los cambios

---

Con este README tendrás toda la información para editar el contenido, probar localmente y desplegar tus actualizaciones tanto en Firebase Hosting como en XAMPP de forma manual o automática vía GitHub Actions.
