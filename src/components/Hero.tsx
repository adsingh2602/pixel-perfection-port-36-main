import { Github, Linkedin, Mail } from 'lucide-react';
import heroAvatar from '@/assets/hero-avatar.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-primary text-lg font-semibold">Hi there! 👋</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                I'm <span className="gradient-text">Amardeep</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground">
                Software Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Crafting beautiful, performant, and scalable web applications with modern technologies.
              Passionate about creating exceptional user experiences and clean code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/adsingh2602"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:glow-border transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} className="text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/amardeep-singh-90653823a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:glow-border transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-primary" />
              </a>
              <a
                href="mailto:amardeepsingh2602@gmail.com"
                className="p-3 glass-card hover:glow-border transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} className="text-primary" />
              </a>
            </div>
          </div>

          {/* Right Content - Avatar Card */}
          <div className="relative animate-slide-up delay-200">
            <div className="glass-card p-8 glow-border animate-glow">
              <div className="relative">
                <img
                  src={heroAvatar}
                  alt="Developer workspace"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-glow rounded-2xl"></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
