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
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 85, icon: '▲' },
    { name: 'TypeScript', level: 88, icon: '📘' },
    { name: 'Tailwind CSS', level: 92, icon: '🎨' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'Python', level: 75, icon: '🐍' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.',
      tech: ['React', 'Firebase', 'Tailwind'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Portfolio CMS',
      description: 'Sistema de gestión de contenido para portafolios con editor visual y SEO optimizado.',
      tech: ['Next.js', 'Sanity', 'TypeScript'],
      color: 'from-teal-500 to-emerald-600'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">BP</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all duration-300 hover:text-primary ${activeSection === item.toLowerCase() ? 'text-primary font-semibold' : 'text-gray-300'
                    }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="fade-in">
            <div className="mb-6 float-animation">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hola, soy <span className="gradient-text">Barbara Palma</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Desarrolladora Full Stack apasionada por crear experiencias web excepcionales
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#projects" className="btn-primary">
                Ver Proyectos
              </a>
              <a href="#contact" className="glass px-8 py-3 rounded-xl hover:bg-white/10 transition-all">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Sobre Mí
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass p-8 rounded-2xl card-hover">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Soy una desarrolladora apasionada con experiencia en la creación de aplicaciones web modernas y escalables.
                Me especializo en tecnologías frontend y backend, siempre buscando las mejores prácticas y soluciones innovadoras.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mi enfoque está en crear interfaces de usuario intuitivas y experiencias digitales que marquen la diferencia.
                Me encanta aprender nuevas tecnologías y enfrentar desafíos complejos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🎯', title: 'Enfocada', desc: 'En resultados de calidad' },
                { icon: '🚀', title: 'Innovadora', desc: 'Siempre aprendiendo' },
                { icon: '💡', title: 'Creativa', desc: 'Soluciones únicas' },
                { icon: '🤝', title: 'Colaborativa', desc: 'Trabajo en equipo' },
              ].map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-xl card-hover text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Habilidades
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="glass p-6 rounded-xl card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>
                <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full animated-gradient rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-400 mt-2">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="glass p-6 rounded-xl card-hover group">
                <div className={`h-48 bg-gradient-to-br ${project.color} rounded-lg mb-6 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform`}>
                  💼
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
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
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Contacto
          </h2>
          <div className="glass p-8 md:p-12 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Enviar Mensaje
              </button>
            </form>
            <div className="mt-8 flex justify-center gap-6">
              {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>© 2026 Barbara Palma. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
