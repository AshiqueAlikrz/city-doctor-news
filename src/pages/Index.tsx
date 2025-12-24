import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/news/HeroSection";
import NewsList from "@/components/news/NewsList";
import { useTranslation } from "@/hooks/useTranslation";
import HeadingNewsSection from "@/components/news/HeadingNewsSection";

const Index = () => {
  const { t, isRTL } = useTranslation();

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "text-right" : "text-left"}`}>
      <Header />

      <main>
        <HeroSection />

        <section className="pb-16 md:pb-24">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className={`flex items-center gap-4 mb-8 mt-10 ${isRTL ? "flex-row-reverse" : ""}`}>
              <h2 className="headline-lg">{t("trendingNews")}</h2>
              <div className="flex-1 h-px bg-divider" />
            </motion.div>
            <HeadingNewsSection />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className={`flex items-center gap-4 mb-8 mt-10 ${isRTL ? "flex-row-reverse" : ""}`}>
              <h2 className="headline-lg">{t("latestNews")}</h2>
              <div className="flex-1 h-px bg-divider" />
            </motion.div>
            <NewsList />
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">© 2024 News. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
