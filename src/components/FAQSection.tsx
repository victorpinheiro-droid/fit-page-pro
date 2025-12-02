import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto custa a consultoria?",
      answer: "O valor varia de acordo com o plano escolhido. Entre em contato pelo WhatsApp para conhecer as opções disponíveis e escolher a que melhor se encaixa no seu objetivo e orçamento.",
    },
    {
      question: "Preciso ter experiência com exercícios?",
      answer: "Não! A consultoria é adaptada para todos os níveis, desde iniciantes até avançados. Todos os exercícios vêm com vídeos explicativos detalhados.",
    },
    {
      question: "Como funciona o acompanhamento?",
      answer: "O acompanhamento é feito via WhatsApp. Você terá suporte diário para tirar dúvidas, ajustar exercícios e manter a motivação. Além disso, fazemos check-ins semanais para avaliar seu progresso.",
    },
    {
      question: "Qual é a duração mínima da consultoria?",
      answer: "Recomendamos um mínimo de 3 meses para resultados consistentes, mas você pode começar com planos mensais. A transformação é um processo, e o tempo vai depender dos seus objetivos.",
    },
    {
      question: "O treino funciona para quem treina em casa?",
      answer: "Sim! Posso montar treinos adaptados para casa, com ou sem equipamentos. O importante é trabalhar com o que você tem disponível da melhor forma possível.",
    },
    {
      question: "Vocês oferecem dieta também?",
      answer: "O foco principal é no treino personalizado. Para alimentação, posso dar orientações gerais, mas para um plano nutricional completo recomendo acompanhamento com um nutricionista.",
    },
    {
      question: "Como faço para começar?",
      answer: "É simples! Clique no botão de WhatsApp, me mande uma mensagem contando seu objetivo e vamos conversar sobre a melhor forma de te ajudar.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-card/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Dúvidas
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre a consultoria de treinos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-border/50 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
