import { Button } from "@/components/ui/button";
import { Check, Star, MessageCircle } from "lucide-react";

const PricingSection = () => {
  const features = [
    "Treino 100% personalizado",
    "Vídeos explicativos",
    "Suporte diário via WhatsApp",
    "Ajustes semanais do treino",
    "Acompanhamento de evolução",
    "Acesso direto ao coach",
  ];

  return (
    <section id="planos" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Investimento
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pronto para <span className="text-gradient">Transformar</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Invista em você. Os resultados vão muito além da estética.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative glass-card p-8 md:p-10 border-primary/30">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                <Star className="w-4 h-4 fill-current" />
                Mais Escolhido
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Consultoria Completa
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Tudo que você precisa para alcançar seus objetivos
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-gradient">R$</span>
                <span className="text-6xl font-bold text-gradient">XXX</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="xl" className="w-full">
              <MessageCircle className="mr-2 w-5 h-5" />
              Quero Começar Agora
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Pagamento via PIX ou cartão. Sem taxa de adesão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
