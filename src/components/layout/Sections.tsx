import { useState } from "react";

const sections = ["LATEST NEWS", "UAE", "TRAVEL", "BUSINESS", "LIVING IN UAE", "WORLD", "ENTERTAINMENT", "SPORT", "LIFESTYLE", "PODCASTS"];

export default function NewsSection() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-t  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <nav className="hidden lg:flex gap-10 text-sm font-semibold">
            {sections.map((item) => (
              <a key={item} href="#" className="text-gray-700 hover:text-blue-600 transition">
                {item}
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
        <div className="lg:hidden border-t bg-white">
          <nav className="flex flex-col divide-y">
            {sections.map((item) => (
              <a key={item} href="#" className="px-4 py-3 text-sm font-medium hover:bg-gray-100">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
