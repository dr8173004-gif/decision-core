import { Database, Brain, Target, TrendingUp, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function DecisionFlow() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Database,
      titleKey: "flow.step1.title",
      textKey: "flow.step1.text",
    },
    {
      icon: Brain,
      titleKey: "flow.step2.title",
      textKey: "flow.step2.text",
    },
    {
      icon: Target,
      titleKey: "flow.step3.title",
      textKey: "flow.step3.text",
    },
    {
      icon: TrendingUp,
      titleKey: "flow.step4.title",
      textKey: "flow.step4.text",
    },
  ];

  return (
    <div className="decision-flow">
      {steps.map((step, i) => (
        <>
          <div key={step.titleKey} className="flow-step reveal reveal-delay-1">
            <div className="flow-step-icon">
              <step.icon size={24} />
            </div>
            <div className="flow-step-title">{t(step.titleKey)}</div>
            <div className="flow-step-text">{t(step.textKey)}</div>
          </div>
          {i < steps.length - 1 && (
            <div className="flow-arrow" key={`arrow-${i}`}>
              <ArrowRight size={24} />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
