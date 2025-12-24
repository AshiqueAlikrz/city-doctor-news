import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const { t, isRTL } = useTranslation();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "hsl(var(--accent))" }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "hsl(var(--primary))" }} />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`max-w-3xl ${isRTL ? "mr-0 ml-auto text-right" : "ml-0 mr-auto text-left"}`}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium uppercase tracking-wider rounded-full bg-accent/10 text-accent"
          >
            {t("news")}
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="headline-xl mb-6">
            {t("stayInformed")}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="body-lg text-muted-foreground max-w-2xl">
            {t("heroSubtitle")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
