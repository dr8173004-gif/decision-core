import { Lightbulb } from "lucide-react";

interface InsightCardProps {
  insight: string;
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <div className="insight-card flex gap-4 items-start">
      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
        <Lightbulb className="w-4 h-4 text-primary" />
      </div>
      <p className="text-sm leading-relaxed pt-1">{insight}</p>
    </div>
  );
}

interface InsightListProps {
  insights: string[];
}

export function InsightList({ insights }: InsightListProps) {
  return (
    <div className="space-y-4">
      {insights.map((insight, i) => (
        <InsightCard key={i} insight={insight} />
      ))}
    </div>
  );
}
