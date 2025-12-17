import { ReactNode } from "react";

interface TechnicalCardProps {
  children: ReactNode;
  className?: string;
}

export function TechnicalCard({ children, className = "" }: TechnicalCardProps) {
  return (
    <div className={`technical-card ${className}`}>
      {children}
    </div>
  );
}

interface ContextCardProps {
  items: { label: string; value: string }[];
}

export function ContextCard({ items }: ContextCardProps) {
  return (
    <div className="technical-card">
      <div className="grid gap-4">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
            <span className="text-muted-foreground text-sm">{item.label}</span>
            <span className="font-medium text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
