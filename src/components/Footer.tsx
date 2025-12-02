import { Instagram, MessageCircle, Zap, Heart } from "lucide-react";

const Footer = () => {
  const links = [
    { href: "#home", label: "Início" },
    { href: "#resultados", label: "Resultados" },
    { href: "#sobre", label: "Sobre" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#faq", label: "FAQ" },
    { href: "#planos", label: "Planos" },
  ];

  return (
    <footer className="py-16 border-t border-border/50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="group flex items-center gap-2 font-display text-xl font-extrabold text-foreground mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center shadow-glow-sm">
                <Zap className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span>
                <span className="text-gradient">IA</span>
                <span className="text-foreground">Personal</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando vidas através de treinos personalizados e acompanhamento profissional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Links Rápidos</h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Igor Alves Personal. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-current" /> para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;