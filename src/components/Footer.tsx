import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50 bg-background/50 backdrop-blur">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Amardeep. All rights reserved.
          </p>
          
          {/* <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>using React & Tailwind CSS</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
