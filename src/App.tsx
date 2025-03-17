import React, { useEffect, useState } from 'react';
import { Code2, Brain, LineChart, Github, Linkedin, Mail, GraduationCap, BookOpen, Terminal, Award, Users, Briefcase } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Header/Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/30 via-[#0a192f]/70 to-[#0a192f] pointer-events-none"
            style={parallaxStyle}
          ></div>
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
            alt="Abstract AI Visualization"
            className="w-full h-full object-cover opacity-40"
            style={parallaxStyle}
          />
          <div className="absolute inset-0 bg-[#0a192f]/30"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364ffda' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.1
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="text-sm font-mono text-emerald-400 mb-4 opacity-0 animate-slide-up" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
              Hi, my name is
            </div>
            <h1 className="text-7xl font-bold mb-4 opacity-0 animate-slide-up" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
              <span className="text-slate-200">NLP Researcher</span>
              <br />
              <span className="text-slate-400">Data Scientist</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl opacity-0 animate-slide-up" style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
              MS Student at IISER Bhopal specializing in Natural Language Processing
              and Financial Analytics. Building the future of text analysis and market prediction.
            </p>
            <div className="flex gap-4 opacity-0 animate-slide-up" style={{animationDelay: '800ms', animationFillMode: 'forwards'}}>
              <a href="#contact" className="bg-emerald-500/10 border border-emerald-500 hover:bg-emerald-500/20 px-6 py-3 rounded-lg font-medium transition">
                Get in Touch
              </a>
              <a href="#projects" className="bg-slate-700/50 hover:bg-slate-700/70 px-6 py-3 rounded-lg font-medium transition">
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Binary/Code-like elements */}
          <div className="absolute top-1/4 left-1/4 animate-float-slow text-emerald-500/20 font-mono text-xs">
            <div className="space-y-2">
              <div>01001110 01001100 01010000</div>
              <div>{'function analyze() {'}</div>
              <div>{'  return sentiment;'}</div>
              <div>{'}'}</div>
            </div>
          </div>
          {/* Stock chart pattern */}
          <div className="absolute top-1/3 right-1/4 animate-float-medium">
            <svg width="120" height="40" viewBox="0 0 120 40" className="stroke-emerald-500/20">
              <path
                d="M0 20 L20 25 L40 15 L60 30 L80 10 L100 20 L120 15"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </div>
          {/* Neural network nodes */}
          <div className="absolute bottom-1/4 left-1/3 animate-float-fast">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-emerald-500/30 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 bg-[#0a192f]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <h2 className="text-3xl font-bold mb-2">About Me</h2>
                <div className="h-1 w-20 bg-emerald-400"></div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                As an NLP Researcher and final year MS student at IISER Bhopal, I combine my passion for data science
                with financial analytics. My research focuses on developing innovative natural language processing
                solutions while maintaining a strong understanding of financial markets and their data-driven aspects.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition">
                  <Brain className="text-emerald-400 w-8 h-8 mb-4" />
                  <h3 className="font-bold mb-2">NLP Research</h3>
                  <p className="text-slate-400 text-sm">Specializing in financial text analysis</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition">
                  <LineChart className="text-emerald-400 w-8 h-8 mb-4" />
                  <h3 className="font-bold mb-2">Data Science</h3>
                  <p className="text-slate-400 text-sm">Advanced analytics & ML</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="bg-slate-800/30 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-6 flex items-center gap-2">
                  <GraduationCap className="text-emerald-400" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">MS in Data Science & Engineering</p>
                    <p className="text-slate-400">IISER Bhopal • 2022-2024</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/30 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-6 flex items-center gap-2">
                  <Award className="text-emerald-400" />
                  Research Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">NLP Research Assistant</p>
                    <p className="text-slate-400">Financial Text Analysis Lab • 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
            <div className="h-1 w-20 bg-emerald-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Languages",
                items: ["Python", "R", "SQL", "JavaScript"],
                icon: <Code2 className="text-emerald-400 w-6 h-6" />
              },
              {
                title: "ML/DL",
                items: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers"],
                icon: <Brain className="text-emerald-400 w-6 h-6" />
              },
              {
                title: "Data Science",
                items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
                icon: <LineChart className="text-emerald-400 w-6 h-6" />
              },
              {
                title: "Tools",
                items: ["Git", "Docker", "AWS", "Linux"],
                icon: <Terminal className="text-emerald-400 w-6 h-6" />
              }
            ].map((category, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/30 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition"
              >
                <div className="flex items-center gap-2 mb-4">
                  {category.icon}
                  <h3 className="font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-slate-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-[#0a192f]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <div className="h-1 w-20 bg-emerald-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Financial NLP Analysis",
                description: "Developed deep learning models for financial sentiment analysis and market prediction using transformer architectures.",
                image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
                tags: ["PyTorch", "NLP", "Finance"]
              },
              {
                title: "Market Prediction System",
                description: "Built an end-to-end system for market prediction using news sentiment and technical indicators.",
                image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1000",
                tags: ["Machine Learning", "Time Series", "Python"]
              }
            ].map((project, idx) => (
              <div 
                key={idx}
                className="group bg-slate-800/30 rounded-lg overflow-hidden transform hover:scale-105 transition"
              >
                <div className="relative h-64">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions of Responsibility */}
      <section className="py-32 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Positions of Responsibility</h2>
            <div className="h-1 w-20 bg-emerald-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Research Lead",
                organization: "AI/ML Student Society",
                period: "2023 - Present",
                description: "Led a team of 5 researchers in developing novel NLP solutions.",
                icon: <Users className="text-emerald-400 w-6 h-6" />
              },
              {
                title: "Teaching Assistant",
                organization: "Data Science Department",
                period: "2022 - 2023",
                description: "Conducted tutorials and assisted in course development.",
                icon: <Briefcase className="text-emerald-400 w-6 h-6" />
              }
            ].map((position, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/30 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  {position.icon}
                  <div>
                    <h3 className="font-bold">{position.title}</h3>
                    <p className="text-emerald-400 text-sm">{position.organization}</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-2">{position.description}</p>
                <p className="text-slate-400 text-sm">{position.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#0a192f]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
            <div className="h-1 w-20 bg-emerald-400 mx-auto mb-8"></div>
            <p className="text-slate-300 mb-12">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex justify-center gap-8">
              <a 
                href="#" 
                className="flex items-center gap-2 bg-slate-800/30 px-6 py-3 rounded-lg hover:bg-slate-800/50 transition"
              >
                <Github className="text-emerald-400" />
                <span>GitHub</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 bg-slate-800/30 px-6 py-3 rounded-lg hover:bg-slate-800/50 transition"
              >
                <Linkedin className="text-emerald-400" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 bg-slate-800/30 px-6 py-3 rounded-lg hover:bg-slate-800/50 transition"
              >
                <Mail className="text-emerald-400" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a192f] border-t border-slate-800/50">
        <div className="container mx-auto px-6 text-center text-slate-400">
          <p>© 2024 | Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;