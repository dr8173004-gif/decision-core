import { XCircle, CheckCircle } from "lucide-react";

const negative = [
  "Decisão baseada em prazo e pressão",
  "CT consultado apenas para validar o que já foi feito",
  "Tendência de desvio ignorada ou minimizada",
  "Correção posterior com custo elevado",
  "Risco acumulativo não quantificado",
];

const positive = [
  "Decisão orientada por gatilhos técnicos",
  "CT integrado ao fluxo de execução",
  "Tendência analisada em tempo real",
  "Ajuste preventivo com custo controlado",
  "Risco monitorado e documentado",
];

export function ComparisonCards() {
  return (
    <div className="comparison-grid">
      <div className="comparison-card negative reveal">
        <div className="comparison-header">
          <div className="comparison-icon">
            <XCircle size={20} />
          </div>
          <div className="comparison-title">Decisão Apressada</div>
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
          <div className="comparison-title">Decisão Bem Analisada</div>
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
