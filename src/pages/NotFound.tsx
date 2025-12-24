import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Header from "@/components/layout/Header";

const NotFound = () => {
  const { t, isRTL } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error("404 erroir found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "text-right" : "text-left"}`}>
      <Header />

      <main className="container flex items-center justify-center min-h-[70vh]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 mb-8"
          >
            <span className="text-5xl font-headline font-bold text-accent">404</span>
          </motion.div>

          <h1 className="headline-xl mb-4">Page Not Found</h1>
          <p className="body-lg text-muted-foreground mb-8 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>

          <Link to="/" className={`btn-primary inline-flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Home className="w-4 h-4" />
            {t("backToNews")}
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default NotFound;
