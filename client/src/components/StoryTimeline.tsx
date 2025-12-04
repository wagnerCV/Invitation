import { motion } from "framer-motion";
import { Heart, MapPin, Calendar, Gem } from "lucide-react";

const milestones = [
  {
    year: "2018",
    title: "Como nos conhecemos",
    description: "Um café casual em Lisboa transformou-se numa conversa de horas. Sabíamos logo que havia algo especial.",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    year: "2019",
    title: "O primeiro encontro",
    description: "Um passeio ao pôr-do-sol na Costa da Caparica. O início oficial da nossa aventura juntos.",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    year: "2024",
    title: "O pedido",
    description: "Numa viagem inesquecível, sob as estrelas, a pergunta mais importante foi feita. A resposta foi um 'Sim' emocionado.",
    icon: <Gem className="w-5 h-5" />,
  },
  {
    year: "2026",
    title: "O grande dia",
    description: "Onde prometemos amor eterno diante de todos os que mais amamos. O começo do nosso 'para sempre'.",
    icon: <Calendar className="w-5 h-5" />,
  },
];

export default function StoryTimeline() {
  return (
    <section className="py-24 bg-off-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-soft-black mb-4">A Nossa História</h2>
          <div className="w-16 h-1 bg-terracotta mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-sand -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full md:w-auto">
                  <div className={`bg-white p-8 rounded-xl shadow-md border border-sand/20 hover:shadow-lg transition-shadow duration-300 ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    <span className="font-serif text-4xl text-terracotta/20 block mb-2">{item.year}</span>
                    <h3 className="font-serif text-2xl text-soft-black mb-3">{item.title}</h3>
                    <p className="font-sans text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-terracotta text-white shadow-lg shrink-0">
                  {item.icon}
                </div>

                {/* Empty Space for Layout Balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
