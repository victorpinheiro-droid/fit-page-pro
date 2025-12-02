import { MessageSquare, ClipboardList, Dumbbell, TrendingUp, CheckCircle, Play, FileText, Headphones } from "lucide-react";

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
    { icon: Dumbbell, text: "Treino 100% personalizado" },
    { icon: Play, text: "Vídeos demonstrativos" },
    { icon: MessageSquare, text: "Suporte via WhatsApp" },
    { icon: TrendingUp, text: "Ajustes semanais" },
    { icon: FileText, text: "Planilha organizada" },
    { icon: Headphones, text: "Acompanhamento de evolução" },
  ];

  return (
    <section id="como-funciona" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <span className="premium-badge mb-6 inline-flex">
            Metodologia
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Como Funciona em{" "}
            <span className="text-gradient">4 Passos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e eficiente para você começar sua transformação
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((item, index) => (
            <div 
              key={item.step} 
              className="feature-card relative group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step number */}
              <div className="absolute top-6 right-6 text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                {item.step}
              </div>
              
              {/* Icon */}
              <div className="icon-container mb-8 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6">
                  <div className="h-0.5 bg-gradient-to-r from-border to-primary/30" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="glass-card p-10 md:p-14">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              O que está incluso
            </h3>
            <p className="text-muted-foreground text-lg">Tudo que você precisa para alcançar seus objetivos</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <div 
                key={feature.text} 
                className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-secondary/80 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;