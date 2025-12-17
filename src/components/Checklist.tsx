import { Check } from "lucide-react";

interface ChecklistProps {
  items: string[];
}

export function Checklist({ items }: ChecklistProps) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div 
          key={i} 
          className="flex gap-3 items-start p-3 rounded-lg bg-accent/10 border border-accent/20"
        >
          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-accent" />
          </div>
          <span className="text-sm leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  );
}
