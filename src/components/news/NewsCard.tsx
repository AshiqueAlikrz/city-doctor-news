import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, User } from "lucide-react";
import { NewsItem } from "@/store/action/newsAction";
import { useTranslation } from "@/hooks/useTranslation";

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

const placeholderImages = [
  "https://grahamlawga.com/wp-content/uploads/2019/07/car-accident-checklist.jpg",
  "https://grahamlawga.com/wp-content/uploads/2019/07/car-accident-checklist.jpg",
  "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/12/LAmphkMS-Emirates-Airlines-13-1200x800.jpg",
  "https://aircargoweek.com/wp-content/uploads/2025/11/1763384723560-768x576.jpeg.webp",
  "https://content.presspage.com/uploads/2431/9c927d34-172e-4ba3-9cd7-4b963c44e41b/1920_01-kum09187.jpg?10000",
];

const fallbackImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYU8kS3hhQ46o4uN2BIEuc7sN5RrB31Ldpxg&s";

const NewsCard = ({ news, index }: NewsCardProps) => {
  const { t, isRTL } = useTranslation();
  const [imageError, setImageError] = useState(false);

  const imageUrl = placeholderImages[news.id % placeholderImages.length];

  return (
    <motion.article initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-card group">
      <Link to={`/post/${news.id}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={imageError ? fallbackImage : imageUrl}
            alt={news.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className={`p-5 space-y-3 ${isRTL ? "text-right" : "text-left"}`}>
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-accent/10 text-accent">{t("news")}</span>

          <h2 className="headline-md line-clamp-2 group-hover:text-accent transition-colors">{news.title}</h2>

          <p className="body-sm text-muted-foreground line-clamp-2">{news.body}</p>

          <div className={`flex items-center justify-between pt-3 border-t border-divider ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <User className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="body-sm text-muted-foreground">{news.author.name}</span>
            </div>

            <motion.span whileHover={{ x: isRTL ? -4 : 4 }} className={`flex items-center gap-1 text-sm font-medium text-accent ${isRTL ? "flex-row-reverse" : ""}`}>
              {t("readMore")}
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default NewsCard;
