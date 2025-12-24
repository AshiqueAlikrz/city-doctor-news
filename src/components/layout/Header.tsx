import { motion } from "framer-motion";
import { Moon, Sun, Globe } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleTheme } from "@/store/slices/themeSlice";
import { toggleLanguage } from "@/store/slices/languageSlice";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";
import NewsSection from "./Sections";
import { compareAsc, format } from "date-fns";

const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);
  const language = useAppSelector((state) => state.language.current);
  const { t, isRTL } = useTranslation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-xl border-b border-border"
      style={{ background: "hsl(var(--background) / 0.9)" }}
    >
      <div className="container mx-auto">
        <div className="flex  items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex  items-center gap-3">
              <div
                className="sm:w-20 sm:h-20 h-14 w-14"
                style={{
                  backgroundImage: "url(/favicon.ico)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="flex flex-col">
                <span className=" text-sm sm:text-2xl font-bold text-headline ">{t("companyName") + " " + t("news")}</span>
                <span className=" text-[7px] xs:text-[10px] sm:text-sm font-medium text-headline  ">{format(new Date(), "dd/MM/yyyy - EEEE")}</span>
              </div>
            </motion.div>
          </Link>

          <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(toggleLanguage())}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-muted-foreground" />
              <motion.span key={language} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-medium uppercase">
                {language}
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(toggleTheme())}
              className="relative w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors overflow-hidden"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{
                  rotate: theme === "dark" ? 180 : 0,
                  scale: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Sun className="w-5 h-5 text-accent" />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  rotate: theme === "light" ? -180 : 0,
                  scale: theme === "light" ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Moon className="w-5 h-5 text-accent" />
              </motion.div>
            </motion.button>
          </div>
        </div>
        <NewsSection />
      </div>
    </motion.header>
  );
};

export default Header;
