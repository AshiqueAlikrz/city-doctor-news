import { motion } from "framer-motion";
import { RefreshCw, AlertCircle } from "lucide-react";
import { useGetNewsQuery } from "@/store/api/newsApi";
import { useTranslation } from "@/hooks/useTranslation";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";

const NewsList = () => {
  const { data: news, isLoading, isError, refetch } = useGetNewsQuery();
  const { t, isRTL } = useTranslation();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h3 className="headline-md mb-2">{t("error")}</h3>
        <p className="body-md text-muted-foreground mb-6">{t("errorLoading")}</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => refetch()} className="btn-accent flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          {t("tryAgain")}
        </motion.button>
      </motion.div>
    );
  }

  if (!news || news.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="body-lg text-muted-foreground">{t("noNews")}</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isRTL ? "text-right" : "text-left"}`}>
      {news.slice(0, 12).map((item, index) => (
        <NewsCard key={item.id} news={item} index={index} />
      ))}
    </div>
  );
};

export default NewsList;
