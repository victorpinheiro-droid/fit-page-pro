import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#resultados", label: "Resultados" },
    { href: "#sobre", label: "Sobre" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18 md:h-22">
        <a href="#home" className="group flex items-center gap-2 font-display text-xl md:text-2xl font-extrabold text-foreground">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">
            <Zap className="w-5 h-5 text-primary-foreground fill-current" />
          </div>
          <span>
            <span className="text-gradient">IA</span>
            <span className="text-foreground">Personal</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <Button variant="hero" size="sm" className="hidden md:inline-flex">
          Começar Agora
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 animate-slide-up"
                style={{ animationDelay: `${i * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" className="w-fit mt-2">
              Começar Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;