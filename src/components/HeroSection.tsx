import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const HeroSection = () => {
  const benefits = [
    "Treinos Personalizados",
    "Suporte Diário",
    "Resultados Garantidos",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Vagas Limitadas
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforme Seu Corpo{" "}
              <span className="text-gradient">de Verdade</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Treinos 100% personalizados para o seu objetivo. Seja para ganho de massa, 
              emagrecimento ou condicionamento físico. Resultados reais com acompanhamento profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <MessageCircle className="mr-2" />
                Falar no WhatsApp
              </Button>
              <Button variant="outline" size="lg">
                Saiba Mais
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img
                src={heroImage}
                alt="Personal trainer profissional"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
