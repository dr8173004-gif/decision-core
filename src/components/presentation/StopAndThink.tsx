import { useState } from "react";
import { Lightbulb, ChevronDown, ChevronUp } from "lucide-react";

interface StopAndThinkProps {
  question: string;
  answer: string;
}

export function StopAndThink({ question, answer }: StopAndThinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="stop-think">
      <div className="stop-think-header">
        <div className="stop-think-icon">
          <Lightbulb size={20} />
        </div>
        <div className="stop-think-label">Pare e Pense</div>
      </div>
      
      <div className="stop-think-question">{question}</div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
      >
        {isOpen ? "Ocultar resposta" : "Ver resposta"}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      {isOpen && (
        <div className="stop-think-answer">
          {answer}
        </div>
      )}
    </div>
  );
}
