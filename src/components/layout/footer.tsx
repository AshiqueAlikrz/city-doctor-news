import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { sections, TranslationKeys } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t, isRTL } = useTranslation();

  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4"> {t("aboutNews")}</h3>
          <p className="text-sm text-gray-600">{t("footerText")}</p>
        </div>

        {/* Quick Links / Sections */}
        <div>
          <h3 className="text-lg font-semibold mb-4"> {t("sections")}</h3>
          <ul className="flex flex-col space-y-2 text-sm">
            {sections.map((item: TranslationKeys) => (
              <a key={item} href="#" className="text-gray-700 hover:text-accent transition">
                {t(item)}
              </a>
            ))}
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("followAndSubscribe")}</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-accent">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-accent">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-accent">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-accent">
              <Linkedin size={20} />
            </a>
          </div>
          <form className=" flex flex-wrap gap-2 rounded-md">
            <input type="email" placeholder={t("enterEmail")} className="px-4 py-2 border border-gray-300 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-accent-500" />
            <button type="submit" className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition">
              {t("subscribe")}
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 mt-8 pt-4 py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} News. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
