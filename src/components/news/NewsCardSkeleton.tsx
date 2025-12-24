import { motion } from 'framer-motion';

const NewsCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="news-card bg-card"
    >
      {/* Image Skeleton */}
      <div className="aspect-[16/10] skeleton-shimmer" />
      
      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Category badge skeleton */}
        <div className="w-16 h-5 rounded-full skeleton-shimmer" />
        
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-6 w-full skeleton-shimmer rounded" />
          <div className="h-6 w-3/4 skeleton-shimmer rounded" />
        </div>
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full skeleton-shimmer rounded" />
          <div className="h-4 w-5/6 skeleton-shimmer rounded" />
        </div>
        
        {/* Author skeleton */}
        <div className="flex items-center gap-3 pt-2">
          <div className="w-8 h-8 rounded-full skeleton-shimmer" />
          <div className="h-4 w-24 skeleton-shimmer rounded" />
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCardSkeleton;
