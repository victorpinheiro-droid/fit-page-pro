import { Target, Heart, Award, Dumbbell, CheckCircle } from "lucide-react";

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

  const credentials = [
    "Educação Física em Formação",
    "+5 Anos de Experiência",
    "+200 Alunos Transformados",
    "Especialista em Hipertrofia",
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <span className="premium-badge mb-6 inline-flex">
              Sobre Mim
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              Olá, eu sou o{" "}
              <span className="text-gradient">Igor Alves</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Estudante de Educação Física com mais de <span className="text-foreground font-semibold">5 anos de experiência</span> em musculação 
                e transformação corporal. Minha jornada começou com minha própria transformação, 
                e desde então decidi ajudar outras pessoas a alcançarem seus objetivos.
              </p>
              <p>
                Acredito que <span className="text-foreground font-semibold">treino bom é treino personalizado</span>. Não existe fórmula mágica, 
                existe consistência, acompanhamento e um plano feito especificamente para você.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-3 mt-8 mb-10">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{cred}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, i) => (
                <div 
                  key={value.title} 
                  className="feature-card p-5 animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="icon-container w-12 h-12 mb-4">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-bold text-foreground mb-1">{value.title}</div>
                  <div className="text-xs text-muted-foreground">{value.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-card via-secondary to-card border border-border/50 overflow-hidden relative shadow-elevated">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-primary/10 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                {/* Avatar placeholder */}
                <div className="relative mb-8">
                  <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center shadow-glow">
                    <span className="text-6xl font-extrabold text-gradient">IA</span>
                  </div>
                  <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl -z-10" />
                </div>
                
                <div className="text-2xl font-extrabold text-foreground mb-2">Igor Alves</div>
                <div className="text-muted-foreground mb-6">Personal Trainer & Coach</div>
                
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                    Ed. Física
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                    5+ Anos
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                    +200 Alunos
                  </span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex items-center justify-center">
                <Dumbbell className="w-8 h-8 text-primary/60" />
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-primary/10 to-emerald-500/20 blur-3xl -z-10 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;