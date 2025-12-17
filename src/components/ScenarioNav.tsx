import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScenarioNavProps {
  currentScenario: number;
  totalScenarios: number;
  onPrevious?: () => void;
  onNext?: () => void;
}

export function ScenarioNav({ currentScenario, totalScenarios, onPrevious, onNext }: ScenarioNavProps) {
  const hasPrevious = currentScenario > 1;
  const hasNext = currentScenario < totalScenarios;

  return (
    <div className="flex items-center justify-between gap-4">
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all ${
          hasPrevious 
            ? "border-border hover:border-primary hover:bg-primary/5 text-foreground" 
            : "border-border/50 text-muted-foreground cursor-not-allowed opacity-50"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Cenário anterior</span>
      </button>

      <div className="text-center">
        <span className="text-xs text-muted-foreground">Cenário</span>
        <p className="font-mono font-semibold text-primary">{currentScenario} / {totalScenarios}</p>
      </div>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all ${
          hasNext 
            ? "border-border hover:border-primary hover:bg-primary/5 text-foreground" 
            : "border-border/50 text-muted-foreground cursor-not-allowed opacity-50"
        }`}
      >
        <span className="text-sm font-medium">Próximo cenário</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
