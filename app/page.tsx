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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">BP</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item, index) => {
                const sections = ['home', 'about', 'skills', 'projects', 'contact'];
                return (
                  <a
                    key={item}
                    href={`#${sections[index]}`}
                    className={`transition-all duration-300 ${activeSection === sections[index] ? 'text-indigo-400 font-semibold' : 'text-slate-300 hover:text-indigo-400'
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
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item, index) => {
                const sections = ['home', 'about', 'skills', 'projects', 'contact'];
                return (
                  <a
                    key={item}
                    href={`#${sections[index]}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-300 hover:text-indigo-400 transition-colors"
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
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-8 inline-block animate-bounce-slow">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-indigo-500 via-pink-500 to-teal-500 p-1 shadow-2xl shadow-indigo-500/50">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-7xl">
                  👨‍💻
                </div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-500 bg-clip-text text-transparent animate-gradient">
                Barbara Palma
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-400 mb-10 max-w-4xl mx-auto font-light">
              Desarrolladora Full Stack apasionada por crear experiencias web excepcionales
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
              >
                <span className="relative z-10">Ver Proyectos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
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
                { icon: '🎯', title: 'Enfocada', desc: 'En resultados de calidad' },
                { icon: '🚀', title: 'Innovadora', desc: 'Siempre aprendiendo' },
                { icon: '💡', title: 'Creativa', desc: 'Soluciones únicas' },
                { icon: '🤝', title: 'Colaborativa', desc: 'Trabajo en equipo' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 text-center group"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                  <h3 className="text-2xl font-bold">{skill.name}</h3>
                </div>
                <div className="relative h-4 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-right text-sm text-slate-400 mt-3 font-semibold">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 group overflow-hidden"
              >
                <div className={`h-52 bg-gradient-to-br ${project.color} rounded-xl mb-6 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  💼
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/30 rounded-full text-sm font-medium hover:scale-105 transition-transform">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 md:p-14 rounded-3xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-300">Nombre</label>
                <input
                  type="text"
                  className="w-full px-5 py-4 bg-slate-800/50 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-white placeholder-slate-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-300">Email</label>
                <input
                  type="email"
                  className="w-full px-5 py-4 bg-slate-800/50 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-white placeholder-slate-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-300">Mensaje</label>
                <textarea
                  rows={6}
                  className="w-full px-5 py-4 bg-slate-800/50 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none text-white placeholder-slate-500"
                  placeholder="Tu mensaje..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 group relative"
              >
                <span className="relative z-10">Enviar Mensaje</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
            <div className="mt-10 flex justify-center gap-6">
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
                  className="w-14 h-14 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 text-2xl"
                  title={social.name}
                >
                  {social.icon}
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
