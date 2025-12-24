"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const SponsorsCarousel = () => {
  const { t, isRTL } = useTranslation();

  const sponsorAds = [
    {
      id: 1,
      image: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/12/LAmphkMS-Emirates-Airlines-13-1200x800.jpg",
      link: "#",
      title: "Travel Deals",
      description: "Exclusive travel offers for Emirates Airlines.",
    },
    {
      id: 2,
      image: "https://citydoctor.ae/cdn/shop/collections/DOC_6833f5ec-9448-4bfc-950e-ade46b34e20e.jpg?crop=center&height=1200&v=1761134367&width=1200",
      link: "#",
      title: "City Doctor",
      description: "Doctor at your home & Hotel in 60 mins!",
    },
    {
      id: 3,
      image: "https://aircargoweek.com/wp-content/uploads/2025/11/1763384723560-768x576.jpeg.webp",
      link: "#",
      title: "Emirates - Your luxury choice",
      description: "Fast and reliable shipping for all your needs.",
    },
    {
      id: 4,
      image: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw7130d188/nk/cc5/4/0/e/6/6/cc540e66_3b4e_4e64_a537_cf089a7ca84e.jpg",
      link: "#",
      title: "Nike",
      description: "Just do it!.",
    },
  ];

  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCarousel = async () => {
      while (true) {
        await controls.start({ x: "-100%", transition: { duration: 12, ease: "linear" } });
        controls.set({ x: 0 });
      }
    };
    animateCarousel();
  }, [controls]);

  return (
    <section className="bg-gray-100 py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{t("ourSponsors")}</h2>
        <motion.div ref={containerRef} className={`${isRTL ? "flex-row-reverse" : "flex-row"} flex gap-6 `} animate={controls}>
          {[...sponsorAds, ...sponsorAds].map((ad, index) => (
            <a key={index} href={ad.link} target="_blank" rel="noopener noreferrer" className="relative min-w-[300px] md:min-w-[500px] h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
              {/* Ad Text Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-white text-lg md:text-2xl font-bold mb-2">{ad.title}</h3>
                <p className="text-white text-sm md:text-base">{ad.description}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsCarousel;
