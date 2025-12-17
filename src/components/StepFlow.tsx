import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function Step({ number, title, description, icon: Icon }: StepProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="step-indicator">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 pt-1">
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface StepFlowProps {
  children: ReactNode;
}

export function StepFlow({ children }: StepFlowProps) {
  return (
    <div className="flex flex-col gap-6 relative">
      <div className="absolute left-5 top-12 bottom-4 w-px bg-border" />
      {children}
    </div>
  );
}
