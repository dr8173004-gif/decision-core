import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function DecisionChecklist() {
  const { t } = useLanguage();

  const items = [
    {
      title: t("checklist.item1.title"),
      description: t("checklist.item1.description"),
    },
    {
      title: t("checklist.item2.title"),
      description: t("checklist.item2.description"),
    },
    {
      title: t("checklist.item3.title"),
      description: t("checklist.item3.description"),
    },
    {
      title: t("checklist.item4.title"),
      description: t("checklist.item4.description"),
    },
  ];

  return (
    <div className="checklist">
      {items.map((item, i) => (
        <div
          key={i}
          className="checklist-item reveal"
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          <div className="checklist-check">
            <Check size={14} strokeWidth={3} />
          </div>
          <div className="checklist-text">
            <strong>{item.title}:</strong> {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}
