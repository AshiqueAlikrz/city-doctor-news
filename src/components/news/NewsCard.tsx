import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, User } from 'lucide-react';
import { NewsItem } from '@/store/api/newsApi';
import { useTranslation } from '@/hooks/useTranslation';

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

// Array of placeholder images for variety
const placeholderImages = [
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1557992260-ec58e38d363c?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop',
];

const fallbackImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop';

const NewsCard = ({ news, index }: NewsCardProps) => {
  const { t, isRTL } = useTranslation();
  const [imageError, setImageError] = useState(false);
  
  const imageUrl = placeholderImages[news.id % placeholderImages.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="news-card bg-card group"
    >
      <Link to={`/post/${news.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={imageError ? fallbackImage : imageUrl}
            alt={news.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className={`p-5 space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Category badge */}
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-accent/10 text-accent">
            {t('news')}
          </span>

          {/* Title */}
          <h2 className="headline-md line-clamp-2 group-hover:text-accent transition-colors">
            {news.title}
          </h2>

          {/* Description */}
          <p className="body-sm text-muted-foreground line-clamp-2">
            {news.body}
          </p>

          {/* Author & Read More */}
          <div className={`flex items-center justify-between pt-3 border-t border-divider ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <User className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="body-sm text-muted-foreground">
                {news.author.name}
              </span>
            </div>
            
            <motion.span
              whileHover={{ x: isRTL ? -4 : 4 }}
              className={`flex items-center gap-1 text-sm font-medium text-accent ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('readMore')}
              {isRTL ? (
                <ArrowLeft className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default NewsCard;
