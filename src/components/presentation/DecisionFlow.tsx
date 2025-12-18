import { Database, Brain, Target, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Dado",
    text: "Umidade, compactação, dispersão dos resultados",
  },
  {
    icon: Brain,
    title: "Interpretação",
    text: "Análise de tendência e contexto da estrutura",
  },
  {
    icon: Target,
    title: "Decisão",
    text: "Ajustar processo, parar ou prosseguir",
  },
  {
    icon: TrendingUp,
    title: "Impacto",
    text: "Custo evitado, risco controlado, prazo real",
  },
];

export function DecisionFlow() {
  return (
    <div className="decision-flow">
      {steps.map((step, i) => (
        <>
          <div key={step.title} className="flow-step reveal reveal-delay-1">
            <div className="flow-step-icon">
              <step.icon size={24} />
            </div>
            <div className="flow-step-title">{step.title}</div>
            <div className="flow-step-text">{step.text}</div>
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
