import { useLanguage } from "@/contexts/LanguageContext";

export function CaseTimeline() {
  const { t } = useLanguage();

  const timelineItems = [
    {
      dateKey: "timeline.day1.date",
      titleKey: "timeline.day1.title",
      textKey: "timeline.day1.text",
    },
    {
      dateKey: "timeline.day7.date",
      titleKey: "timeline.day7.title",
      textKey: "timeline.day7.text",
    },
    {
      dateKey: "timeline.day30.date",
      titleKey: "timeline.day30.title",
      textKey: "timeline.day30.text",
    },
  ];

  return (
    <div className="timeline">
      {timelineItems.map((item, i) => (
        <div key={i} className="timeline-item reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
          <div className={`timeline-dot ${i === timelineItems.length - 1 ? "" : "pulse"}`} />
          <div>
            <div className="timeline-date">{t(item.dateKey)}</div>
            <div className="timeline-title">{t(item.titleKey)}</div>
            <div className="timeline-text">{t(item.textKey)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
