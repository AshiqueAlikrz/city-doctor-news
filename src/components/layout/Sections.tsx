import { useTranslation } from "@/hooks/useTranslation";
import { sections, TranslationKeys } from "@/lib/utils";
import { useState } from "react";

export default function NewsSection() {
  const { t, isRTL } = useTranslation();

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-t sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <nav className={`hidden lg:flex gap-10 text-sm font-semibold ${isRTL ? "rtl" : "ltr"}`}>
            {sections.map((item: TranslationKeys) => (
              <a key={item} href="#" className="dark:text-white hover:text-accent transition">
                {t(item)}
              </a>
            ))}
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1">
            <span className="w-6 h-0.5 bg-gray-800" />
            <span className="w-6 h-0.5 bg-gray-800" />
            <span className="w-6 h-0.5 bg-gray-800" />
          </button>
        </div>
      </div>

      {open && (
        <div className={`lg:hidden border-t bg-white ${isRTL ? "rtl" : "ltr"}`}>
          <nav className="flex flex-col divide-y">
            {sections.map((item: TranslationKeys) => (
              <a key={item} href="#" className="px-4 py-3 text-sm font-medium hover:bg-gray-100">
                {t(item)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
