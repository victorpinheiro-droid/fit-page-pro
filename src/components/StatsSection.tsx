import { Users, TrendingUp, Award, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "200+",
      label: "Alunos Transformados",
      description: "Pessoas que já alcançaram seus objetivos",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Taxa de Satisfação",
      description: "Avaliação dos nossos alunos",
    },
    {
      icon: Award,
      value: "5+",
      label: "Anos de Experiência",
      description: "Dedicado à transformação física",
    },
    {
      icon: Clock,
      value: "24h",
      label: "Suporte Disponível",
      description: "Acompanhamento constante",
    },
  ];

  return (
    <section className="py-16 border-y border-border/50">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
