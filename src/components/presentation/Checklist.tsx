import { Check } from "lucide-react";

const items = [
  {
    title: "Paralisar ou reduzir ritmo",
    description: "Ao primeiro sinal de tendência de desvio, diminuir a velocidade de execução para permitir análise adequada.",
  },
  {
    title: "Ajustar processo imediatamente",
    description: "Corrigir umidade, energia de compactação ou espessura de camada antes que o desvio se acumule.",
  },
  {
    title: "Reavaliar condições de frente",
    description: "Verificar se as condições climáticas, de material e de equipamento são compatíveis com o processo.",
  },
  {
    title: "Retomar com monitoramento reforçado",
    description: "Só prosseguir quando CT confirmar estabilização, com frequência de ensaio aumentada.",
  },
];

export function DecisionChecklist() {
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
