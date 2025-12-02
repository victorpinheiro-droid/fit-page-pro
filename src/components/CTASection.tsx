import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container relative z-10">
        <div className="glass-card p-8 md:p-16 text-center border-primary/20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Oportunidade Limitada
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para Transformar{" "}
            <span className="text-gradient">Sua Vida</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Não espere mais para começar. Sua melhor versão está a uma decisão de distância. 
            Entre em contato agora e dê o primeiro passo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp
            </Button>
            <Button variant="outline" size="lg">
              Saiba Mais
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Resposta em até 24h
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Sem compromisso
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Primeira conversa grátis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
