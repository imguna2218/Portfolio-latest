import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            2025 Parisa Gunasekhar
          </p>

          <p className="text-sm text-muted-foreground">
            Built with React & Tailwind
          </p>

          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button
              className="flex items-center gap-2 text-primary hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-full transition-all glow-effect"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
