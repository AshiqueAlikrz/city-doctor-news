import React from "react";
import { useGetNewsQuery } from "@/store/api/newsApi";

const HeadingNewsSection: React.FC = () => {
  const { data: news, isLoading, isError, refetch } = useGetNewsQuery();

  const trendingImage = "https://media.assettype.com/gulfnews%2F2025-12-23%2F8zk8b6hr%2FSleigh380.png?rect=0%2C90%2C454%2C341&w=640&auto=format%2Ccompress&fit=max";

  if (isLoading) {
    return <div className="w-full p-4 text-center text-gray-500">Loading news...</div>;
  }

  if (isError) {
    return (
      <div className="w-full p-4 text-center text-red-500">
        Error fetching news.{" "}
        <button onClick={() => refetch()} className="underline text-blue-500">
          Retry
        </button>
      </div>
    );
  }

  if (!news || news.length === 0) {
    return <div className="w-full p-4 text-center text-gray-500">No news available at the moment.</div>;
  }

  const newsItem = news[1];

  return (
    <div className=" bg-white shadow-md rounded-md overflow-hidden flex flex-col md:flex-row my-4">
      <div className="md:w-1/3 w-full h-48 md:h-auto flex-shrink-0">
        <img src={trendingImage} alt={newsItem.title} className="object-cover w-full h-full" />
      </div>

      <div className="md:w-2/3 w-full p-4 flex flex-col">
        <h2 className="text-md md:text-4xl font-semibold mb-2">{newsItem.title}</h2>
        <p className="text-gray-600 text-sm md:text-lg">{newsItem.body}</p>
      </div>
    </div>
  );
};

export default HeadingNewsSection;
