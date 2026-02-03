'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      year: '2024'
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.',
      tech: ['React', 'Firebase', 'Tailwind'],
      year: '2024'
    },
    {
      title: 'Portfolio CMS',
      description: 'Sistema de gestión de contenido para portafolios con editor visual y SEO optimizado.',
      tech: ['Next.js', 'Sanity', 'TypeScript'],
      year: '2023'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">BP</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item, index) => {
                const sections = ['home', 'about', 'skills', 'projects', 'contact'];
                return (
                  <a
                    key={item}
                    href={`#${sections[index]}`}
                    className={`text-sm font-medium transition-colors ${activeSection === sections[index] ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {item}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item, index) => {
                const sections = ['home', 'about', 'skills', 'projects', 'contact'];
                return (
                  <a
                    key={item}
                    href={`#${sections[index]}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-4xl">👋</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            Barbara Palma
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            Desarrolladora Full Stack especializada en crear experiencias web excepcionales
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="btn-minimal">
              Ver Proyectos
            </a>
            <a href="#contact" className="btn-outline">
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Sobre Mí</h2>
            <div className="accent-line"></div>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Soy una desarrolladora apasionada con experiencia en la creación de aplicaciones web modernas y escalables.
              Me especializo en tecnologías frontend y backend, siempre buscando las mejores prácticas y soluciones innovadoras.
            </p>
            <p>
              Mi enfoque está en crear interfaces de usuario intuitivas y experiencias digitales que marquen la diferencia.
              Me encanta aprender nuevas tecnologías y enfrentar desafíos complejos.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              { value: '5+', label: 'Años de experiencia' },
              { value: '50+', label: 'Proyectos completados' },
              { value: '30+', label: 'Clientes satisfechos' },
              { value: '100%', label: 'Dedicación' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-spacing px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Habilidades</h2>
            <div className="accent-line"></div>
          </div>
          <div className="space-y-8">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-3">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-spacing px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Proyectos Destacados</h2>
            <div className="accent-line"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border border-gray-200 card-minimal"
              >
                <div className="text-sm text-gray-500 mb-4">{project.year}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Contacto</h2>
            <div className="accent-line"></div>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors resize-none"
                placeholder="Tu mensaje..."
              />
            </div>
            <button type="submit" className="btn-minimal w-full">
              Enviar Mensaje
            </button>
          </form>
          <div className="mt-12 flex justify-center gap-6">
            {[
              { name: 'GitHub', link: 'https://github.com/barbarapalmamena' },
              { name: 'LinkedIn', link: '#' },
              { name: 'Twitter', link: '#' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium minimal-link"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-100">
        <p className="text-sm">© 2026 Barbara Palma. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
