import { useAppSelector } from "@/store/hooks";
import { translations, TranslationKey } from "@/i18n/translations";

export const useTranslation = () => {
  const language = useAppSelector((state) => state.language.current);

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === "ar";

  return { t, language, isRTL };
};
