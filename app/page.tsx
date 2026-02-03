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
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.',
      tech: ['React', 'Firebase', 'Tailwind'],
    },
    {
      title: 'Portfolio CMS',
      description: 'Sistema de gestión de contenido para portafolios con editor visual y SEO optimizado.',
      tech: ['Next.js', 'Sanity', 'TypeScript'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">Barbara Palma</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item, index) => {
                const sections = ['home', 'about', 'skills', 'projects', 'contact'];
                return (
                  <a
                    key={item}
                    href={`#${sections[index]}`}
                    className={`text-sm font-semibold transition-all duration-300 ${activeSection === sections[index]
                        ? 'text-blue-400'
                        : 'text-slate-300 hover:text-white'
                      }`}
                  >
                    {item}
                  </a>
                );
              })}
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
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item, index) => {
                const sections = ['home', 'about', 'skills', 'projects', 'contact'];
                return (
                  <a
                    key={item}
                    href={`#${sections[index]}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-300 hover:text-white transition-colors font-medium"
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
        <div className="max-w-5xl mx-auto text-center fade-in-up">
          <div className="mb-8 float">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 shadow-2xl shadow-blue-500/50">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
                💼
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
            Hola, soy{' '}
            <span className="gradient-text">Barbara Palma</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Desarrolladora Full Stack especializada en crear soluciones web innovadoras y escalables
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="#projects" className="btn-pro">
              Ver Proyectos
            </a>
            <a href="#contact" className="btn-outline-pro">
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-pro px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Sobre Mí</h2>
            <div className="accent-line-pro mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="pro-card p-10">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Soy una desarrolladora apasionada con experiencia en la creación de aplicaciones web modernas y escalables.
                Me especializo en tecnologías frontend y backend, siempre buscando las mejores prácticas y soluciones innovadoras.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Mi enfoque está en crear interfaces de usuario intuitivas y experiencias digitales que marquen la diferencia.
                Me encanta aprender nuevas tecnologías y enfrentar desafíos complejos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🎯', title: 'Enfocada', desc: 'Resultados de calidad' },
                { icon: '🚀', title: 'Innovadora', desc: 'Siempre aprendiendo' },
                { icon: '💡', title: 'Creativa', desc: 'Soluciones únicas' },
                { icon: '🤝', title: 'Colaborativa', desc: 'Trabajo en equipo' },
              ].map((item, idx) => (
                <div key={idx} className="pro-card p-6 text-center group">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-pro px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Habilidades</h2>
            <div className="accent-line-pro mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="pro-card p-8">
                <div className="flex justify-between mb-4">
                  <span className="font-bold text-lg text-white">{skill.name}</span>
                  <span className="text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-pro px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Proyectos Destacados</h2>
            <div className="accent-line-pro mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="pro-card p-8 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-slate-300 hover:border-blue-500/50 transition-colors">
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
      <section id="contact" className="section-pro px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Contacto</h2>
            <div className="accent-line-pro mx-auto"></div>
          </div>
          <div className="pro-card p-10 md:p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-300">Nombre</label>
                <input
                  type="text"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-slate-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-300">Email</label>
                <input
                  type="email"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-slate-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-300">Mensaje</label>
                <textarea
                  rows={6}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-white placeholder-slate-500"
                  placeholder="Tu mensaje..."
                />
              </div>
              <button type="submit" className="btn-pro w-full">
                Enviar Mensaje
              </button>
            </form>
            <div className="mt-10 flex justify-center gap-8">
              {[
                { name: 'GitHub', icon: '💻', link: 'https://github.com/barbarapalmamena' },
                { name: 'LinkedIn', icon: '💼', link: '#' },
                { name: 'Twitter', icon: '🐦', link: '#' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
                  title={social.name}
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform">{social.icon}</div>
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-500 border-t border-white/10">
        <p>© 2026 Barbara Palma. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
