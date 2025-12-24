import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail, Building2, Quote, User, AlertCircle, RefreshCw } from "lucide-react";
import { useGetNewsByIdQuery } from "@/store/action/newsAction";
import { useTranslation } from "@/hooks/useTranslation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";

const placeholderImages = [
  "https://grahamlawga.com/wp-content/uploads/2019/07/car-accident-checklist.jpg",
  "https://grahamlawga.com/wp-content/uploads/2019/07/car-accident-checklist.jpg",
  "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/12/LAmphkMS-Emirates-Airlines-13-1200x800.jpg",
  "https://aircargoweek.com/wp-content/uploads/2025/11/1763384723560-768x576.jpeg.webp",
  "https://content.presspage.com/uploads/2431/9c927d34-172e-4ba3-9cd7-4b963c44e41b/1920_01-kum09187.jpg?10000",
];

const fallbackImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYU8kS3hhQ46o4uN2BIEuc7sN5RrB31Ldpxg&s";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: news, isLoading, isError, refetch } = useGetNewsByIdQuery(Number(id));
  const { t, isRTL } = useTranslation();
  const [imageError, setImageError] = useState(false);

  const imageUrl = news ? placeholderImages[news.id % placeholderImages.length] : fallbackImage;

  // Skeleton part
  if (isLoading) {
    return (
      <div className={`min-h-screen bg-background ${isRTL ? "text-right" : "text-left"}`}>
        <Header />
        <main className="container py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="w-32 h-10 skeleton-shimmer rounded-lg mb-8" />
            <div className="aspect-[16/9] skeleton-shimmer rounded-2xl mb-8" />
            <div className="space-y-3 mb-8">
              <div className="h-10 w-full skeleton-shimmer rounded" />
              <div className="h-10 w-3/4 skeleton-shimmer rounded" />
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full skeleton-shimmer" />
              <div className="space-y-2">
                <div className="h-5 w-32 skeleton-shimmer rounded" />
                <div className="h-4 w-48 skeleton-shimmer rounded" />
              </div>
            </div>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-4 w-full skeleton-shimmer rounded" />
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (isError || !news) {
    return (
      <div className={`min-h-screen bg-background ${isRTL ? "text-right" : "text-left"}`}>
        <Header />
        <main className="container py-8 md:py-12">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="headline-md mb-2">{t("error")}</h3>
            <p className="body-md text-muted-foreground mb-6">{t("errorLoading")}</p>
            <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Link to="/" className="btn-ghost flex items-center gap-2">
                {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                {t("backToNews")}
              </Link>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => refetch()} className="btn-accent flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                {t("tryAgain")}
              </motion.button>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "text-right" : "text-left"}`}>
      <Header />

      <main className="container py-8 md:py-12">
        <article className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: isRTL ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/" className={`inline-flex items-center gap-2 btn-ghost mb-8 ${isRTL ? "flex-row-reverse" : ""}`}>
              {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              {t("backToNews")}
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative aspect-[16/9] overflow-hidden mb-8 shadow-lg">
            <img src={imageError ? fallbackImage : imageUrl} alt={news.title} onError={() => setImageError(true)} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-10 ${isRTL ? "text-right" : "text-left"}`}>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-accent text-white">{t("news")}</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="headline-xl mb-8 capitalize">
            {news.title}
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="border p-6 mb-10 ">
            <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <span className="caption block mb-1">{t("author")}</span>
                <h3 className="headline-md mb-3">{news.author.name}</h3>
                <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${news.author.email}`} className="hover:text-accent transition-colors">
                      {news.author.email}
                    </a>
                  </div>
                  <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <Building2 className="w-4 h-4" />
                    <span>{news.author.company.name}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-6 pt-6 border-t border-divider flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <span className="caption block mb-1">{t("catchPhrase")}</span>
                <p className="body-md italic text-muted-foreground">"{news.author.company.catchPhrase}"</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="prose prose-lg max-w-none">
            <p className="body-lg text-foreground leading-relaxed mb-6 first-letter:text-5xl first-letter:font-headline first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              {news.body}
            </p>

            <p className="body-md text-muted-foreground leading-relaxed mb-6">{news.body}</p>
            <p className="body-md text-muted-foreground leading-relaxed">{news.body}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12 pt-8 border-t border-divider">
            <Link to="/" className={`btn-primary inline-flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              {t("backToNews")}
            </Link>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PostDetail;
