import { useGetNewsQuery } from "@/store/action/newsAction";
import React from "react";

const MainHeading = () => {
  const { data: news, isLoading, isError } = useGetNewsQuery();

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="h-8 w-64 bg-gray-200 skeleton-shimmer rounded" />
      </div>
    );
  }

  if (isError || !news || news.length === 0) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Latest News</h1>
      </div>
    );
  }

  const topNews = news[0];

  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-4 py-4">
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold capitalize">{topNews.title}</h1>
        <p className="text-gray-600 mt-1 line-clamp-2">{topNews.body}</p>
      </div>

      <div className="w-full md:w-72 h-20 md:h-24 bg-gray-200 flex items-center justify-center rounded">
        <span className="text-sm text-gray-500">Advertisement</span>
      </div>
    </div>
  );
};

export default MainHeading;
