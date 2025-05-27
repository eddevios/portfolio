import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Smartphone, 
  Gamepad, 
  Globe, 
  Apple, 
  Cuboid as Android,
  Search,
  Mail,
  Phone,
  MapPin,
  Send,
  Newspaper,
  Code2
} from 'lucide-react';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      {children}
    </motion.div>
  );
}

type TabType = 'android' | 'ios' | 'web' | 'seo' | 'games';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('android');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const news = [
    {
      title: 'Nueva App Android Lanzada',
      date: '2024-03-15',
      description: 'Acabamos de lanzar una nueva aplicación de gestión de tareas con IA',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Actualización Unity Engine',
      date: '2024-03-10',
      description: 'Implementando las últimas características de Unity para mejores gráficos',
      image: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Optimización SEO',
      date: '2024-03-05',
      description: 'Nuevas técnicas de SEO para mejorar el posicionamiento web',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="h-screen relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          {/* Logo */}
          <div className="mb-8 p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md">
            <Code2 className="w-20 h-20 text-purple-400" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              eddevios
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Desarrollador Full Stack especializado en aplicaciones móviles, videojuegos y desarrollo web
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-400 rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        {/* Services Tabs Section */}
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12 text-center">Servicios</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'android' as TabType, icon: Android, label: 'Android' },
              { id: 'ios' as TabType, icon: Apple, label: 'iOS' },
              { id: 'web' as TabType, icon: Globe, label: 'Web' },
              { id: 'seo' as TabType, icon: Search, label: 'SEO' },
              { id: 'games' as TabType, icon: Gamepad, label: 'Juegos' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            {activeTab === 'android' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Desarrollo Android</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Características</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Desarrollo nativo en Kotlin</li>
                      <li>Material Design 3</li>
                      <li>Integración con APIs REST</li>
                      <li>Base de datos local con Room</li>
                      <li>Jetpack Compose UI</li>
                    </ul>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1000&q=80"
                      alt="Android Development"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ios' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Desarrollo iOS</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Características</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Swift y SwiftUI</li>
                      <li>Diseño Human Interface</li>
                      <li>Core Data</li>
                      <li>Push Notifications</li>
                      <li>In-App Purchases</li>
                    </ul>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80"
                      alt="iOS Development"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'web' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Desarrollo Web</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Tecnologías</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>WordPress Personalizado</li>
                      <li>Temas a Medida</li>
                      <li>WooCommerce</li>
                      <li>Optimización de Rendimiento</li>
                      <li>Diseño Responsive</li>
                    </ul>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80"
                      alt="Web Development"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'seo' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Optimización SEO</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Servicios</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Auditoría SEO Completa</li>
                      <li>Optimización On-Page</li>
                      <li>Link Building</li>
                      <li>Contenido Optimizado</li>
                      <li>Análisis de Competencia</li>
                    </ul>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1000&q=80"
                      alt="SEO Services"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'games' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Desarrollo de Videojuegos</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Características</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Unity Engine</li>
                      <li>Modelado 3D</li>
                      <li>Animaciones</li>
                      <li>Física de Juego</li>
                      <li>Multiplataforma</li>
                    </ul>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=1000&q=80"
                      alt="Game Development"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* News Section */}
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12 text-center">Últimas Noticias</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{item.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12 text-center">Experiencia</h2>
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur">
              <h3 className="text-2xl font-semibold mb-4">+5 años de experiencia</h3>
              <p className="text-gray-400 mb-6">
                Desarrollando soluciones digitales para clientes de diversos sectores
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { number: '50+', text: 'Aplicaciones Móviles' },
                  { number: '20+', text: 'Videojuegos' },
                  { number: '100+', text: 'Sitios Web' },
                  { number: '200+', text: 'Clientes Satisfechos' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-400">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection>
          <div className="bg-gray-800/30 p-8 rounded-lg backdrop-blur">
            <h2 className="text-4xl font-bold mb-12 text-center">Contacto</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-400 mr-4" />
                    <a
                      href="mailto:info@eddevios.com"
                      className="text-gray-800 hover:underline"
                      aria-label="Enviar un email a info@eddevios.com"
                    >
                      info@eddevios.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-400 mr-4" />
                    <a
                      href="tel:+34690136503"
                      className="text-gray-800 hover:underline"
                      aria-label="Llamar al teléfono +34 690 136 503"
                    >
                      +34 690 136 503
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                    <span>Madrid, España</span>
                  </div>
                </div>
              </div>
              <div>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <footer className="bg-gray-800/30 py-8 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()}{' '}
          <a
            href="https://eddevios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            eddevios
          </a>
          . Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;