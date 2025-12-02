import { Star, ChevronLeft, ChevronRight, Quote, TrendingUp, Target, Flame } from "lucide-react";
import { useState } from "react";

const ResultsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Lucas Silva",
      role: "Empresário",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "Em 4 meses perdi 15kg e ganhei massa muscular. O acompanhamento personalizado faz toda diferença. Melhor investimento que fiz na minha saúde!",
      rating: 5,
    },
    {
      name: "Mariana Costa",
      role: "Advogada",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: "Nunca imaginei conseguir resultados tão rápidos. A metodologia é clara e o suporte é incrível. Super recomendo para quem quer transformação real.",
      rating: 5,
    },
    {
      name: "Rafael Santos",
      role: "Desenvolvedor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      text: "Trabalho home office e sempre tive dificuldade com exercícios. Os treinos adaptados à minha rotina mudaram minha vida completamente.",
      rating: 5,
    },
  ];

  const transformations = [
    { icon: Flame, before: "60kg", after: "75kg", change: "+15kg", goal: "Ganho de Massa", time: "6 meses", color: "from-orange-500 to-red-500" },
    { icon: Target, before: "95kg", after: "78kg", change: "-17kg", goal: "Emagrecimento", time: "5 meses", color: "from-primary to-emerald-500" },
    { icon: TrendingUp, before: "70kg", after: "82kg", change: "+12kg", goal: "Hipertrofia", time: "8 meses", color: "from-blue-500 to-cyan-500" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="resultados" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <span className="premium-badge mb-6 inline-flex">
            Resultados Reais
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Histórias de{" "}
            <span className="text-gradient">Transformação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos alunos alcançaram com dedicação e o acompanhamento certo
          </p>
        </div>

        {/* Transformation Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {transformations.map((item, i) => (
            <div 
              key={i} 
              className="feature-card p-8 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">{item.goal}</div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl text-muted-foreground font-medium">{item.before}</span>
                <div className="flex-1 h-1 bg-gradient-to-r from-muted via-primary to-primary rounded-full" />
                <span className="text-3xl font-extrabold text-foreground">{item.after}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gradient">{item.change}</span>
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">{item.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="glass-card p-10 md:p-14 relative overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-8 right-8 w-20 h-20 text-primary/10" />
            
            {/* Stars */}
            <div className="flex gap-1.5 mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground mb-10 leading-relaxed font-medium">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center gap-5">
              <div className="relative">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-primary/30"
                />
                <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-sm -z-10" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;