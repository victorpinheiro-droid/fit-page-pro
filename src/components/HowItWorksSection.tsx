import { MessageSquare, ClipboardList, Dumbbell, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "Primeiro Contato",
      description: "Entre em contato pelo WhatsApp. Vamos conversar sobre seus objetivos, rotina e histórico.",
    },
    {
      icon: ClipboardList,
      step: "02",
      title: "Avaliação Completa",
      description: "Análise detalhada do seu perfil, nível de condicionamento e definição de metas realistas.",
    },
    {
      icon: Dumbbell,
      step: "03",
      title: "Treino Personalizado",
      description: "Receba sua ficha de treino 100% individualizada, com vídeos explicativos de cada exercício.",
    },
    {
      icon: TrendingUp,
      step: "04",
      title: "Evolução Contínua",
      description: "Acompanhamento semanal, ajustes no treino e suporte para garantir seus resultados.",
    },
  ];

  const features = [
    "Treino 100% personalizado",
    "Vídeos demonstrativos",
    "Suporte via WhatsApp",
    "Ajustes semanais",
    "Planilha organizada",
    "Acompanhamento de evolução",
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Metodologia
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Como Funciona em <span className="text-gradient">4 Passos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e eficiente para você começar sua transformação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item, index) => (
            <div key={item.step} className="feature-card relative group">
              <div className="absolute top-4 right-4 text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {item.step}
              </div>
              <div className="step-icon mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              O que está incluso
            </h3>
            <p className="text-muted-foreground">Tudo que você precisa para alcançar seus objetivos</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
