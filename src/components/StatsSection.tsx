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
    <section className="py-20 relative">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className="stat-card group animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="icon-container mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="number-highlight mb-3">
                {stat.value}
              </div>
              <div className="font-bold text-foreground text-lg mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default StatsSection;