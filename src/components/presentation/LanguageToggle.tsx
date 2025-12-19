import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-sm font-medium text-foreground hover:bg-background/90 transition-all duration-300 shadow-lg"
      aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      <Globe size={16} className="text-primary" />
      <span className="uppercase tracking-wider">{language === "pt" ? "EN" : "PT"}</span>
    </button>
  );
}
