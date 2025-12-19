import { XCircle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ComparisonCards() {
  const { t } = useLanguage();

  const negative = [
    t("comparison.negative.1"),
    t("comparison.negative.2"),
    t("comparison.negative.3"),
    t("comparison.negative.4"),
    t("comparison.negative.5"),
  ];

  const positive = [
    t("comparison.positive.1"),
    t("comparison.positive.2"),
    t("comparison.positive.3"),
    t("comparison.positive.4"),
    t("comparison.positive.5"),
  ];

  return (
    <div className="comparison-grid">
      <div className="comparison-card negative reveal">
        <div className="comparison-header">
          <div className="comparison-icon">
            <XCircle size={20} />
          </div>
          <div className="comparison-title">{t("comparison.negative.title")}</div>
        </div>
        <ul className="comparison-list">
          {negative.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="comparison-card positive reveal reveal-delay-2">
        <div className="comparison-header">
          <div className="comparison-icon">
            <CheckCircle size={20} />
          </div>
          <div className="comparison-title">{t("comparison.positive.title")}</div>
        </div>
        <ul className="comparison-list">
          {positive.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
