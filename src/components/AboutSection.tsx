import { Target, Heart, Award, Dumbbell } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada treino é pensado para te aproximar do seu objetivo",
    },
    {
      icon: Heart,
      title: "Comprometimento",
      description: "Acompanhamento real, não apenas envio de planilhas",
    },
    {
      icon: Award,
      title: "Método Comprovado",
      description: "Baseado em ciência e experiência prática",
    },
    {
      icon: Dumbbell,
      title: "Treino Inteligente",
      description: "Máximo resultado com eficiência no tempo",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-card/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Sobre Mim
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Olá, eu sou o{" "}
              <span className="text-gradient">Igor Alves</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Estudante de Educação Física com mais de 5 anos de experiência em musculação 
                e transformação corporal. Minha jornada começou com minha própria transformação, 
                e desde então decidi ajudar outras pessoas a alcançarem seus objetivos.
              </p>
              <p>
                Acredito que treino bom é treino personalizado. Não existe fórmula mágica, 
                existe consistência, acompanhamento e um plano feito especificamente para você.
              </p>
              <p>
                Já ajudei mais de 200 pessoas a transformarem seus corpos e suas vidas. 
                Meu compromisso é estar junto em cada passo dessa jornada.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{value.title}</div>
                    <div className="text-xs text-muted-foreground">{value.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border/50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">IA</span>
                </div>
                <div className="text-xl font-bold text-foreground mb-2">Igor Alves</div>
                <div className="text-sm text-muted-foreground">Personal Trainer</div>
                <div className="mt-4 flex justify-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Ed. Física</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">5+ Anos</span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
