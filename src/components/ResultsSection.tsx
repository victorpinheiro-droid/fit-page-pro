import { Star, ChevronLeft, ChevronRight } from "lucide-react";
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
    { before: "60kg", after: "75kg", goal: "Ganho de Massa", time: "6 meses" },
    { before: "95kg", after: "78kg", goal: "Emagrecimento", time: "5 meses" },
    { before: "70kg", after: "82kg", goal: "Hipertrofia", time: "8 meses" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="resultados" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Resultados Reais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Histórias de <span className="text-gradient">Transformação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos alunos alcançaram com dedicação e o acompanhamento certo
          </p>
        </div>

        {/* Transformation Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {transformations.map((item, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <div className="text-sm text-primary mb-2">{item.goal}</div>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-2xl text-muted-foreground">{item.before}</span>
                <span className="text-primary">→</span>
                <span className="text-2xl font-bold text-gradient">{item.after}</span>
              </div>
              <div className="text-xs text-muted-foreground">{item.time}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/50"
              />
              <div>
                <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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
