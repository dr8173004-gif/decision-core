import { ReactNode } from "react";
import { AlertTriangle, Info } from "lucide-react";

interface AlertBoxProps {
  variant?: "warning" | "info";
  children: ReactNode;
  icon?: boolean;
}

export function AlertBox({ variant = "warning", children, icon = true }: AlertBoxProps) {
  const iconElement = variant === "warning" 
    ? <AlertTriangle className="w-5 h-5 text-warning shrink-0" />
    : <Info className="w-5 h-5 text-primary shrink-0" />;

  return (
    <div className={`alert-${variant} flex gap-3 items-start`}>
      {icon && iconElement}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
