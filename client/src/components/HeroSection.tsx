import { motion, useScroll, useTransform } from "framer-motion";
import { useEventSettings } from "@/contexts/EventContext";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const { settings } = useEventSettings();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContent = () => {
    const element = document.getElementById("invitation");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-soft-black text-off-white">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay for readability */}
        <img 
          src="/images/hero-portal.jpg" 
          alt="Terracotta Portal" 
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="font-serif text-lg italic tracking-widest text-sand/80 md:text-xl">
            CONVIDAM-TE PARA CELEBRAR O SEU CASAMENTO
          </p>
          
          <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-off-white md:text-7xl lg:text-8xl">
            {settings.groom_name} <br />
            <span className="text-4xl md:text-6xl">&</span> <br />
            {settings.bride_name}
          </h1>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="rounded-full border border-sand/30 bg-black/20 px-6 py-2 backdrop-blur-sm">
              <p className="font-sans text-sm font-light tracking-widest text-sand uppercase">
                Save the Date · {new Date(settings.wedding_date).toLocaleDateString('pt-PT')} · {settings.wedding_time} · {settings.ceremony_address.split(',')[0]}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <button 
            onClick={scrollToContent}
            className="group flex flex-col items-center gap-2 text-sand transition-colors hover:text-white"
          >
            <span className="font-serif text-sm tracking-widest uppercase">Entrar no convite</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-6 w-6 opacity-70 group-hover:opacity-100" />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Subtle Quote Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-[0.03]">
        <h2 className="text-center font-serif text-[10vw] leading-none text-white">
          O AMOR É<br />PACIENTE
        </h2>
      </div>
    </section>
  );
}
