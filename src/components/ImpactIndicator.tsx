interface ImpactIndicatorProps {
  label: string;
  value: string;
  trend: "up" | "down" | "neutral";
  variant: "danger" | "warning" | "success";
}

export function ImpactIndicator({ label, value, variant }: ImpactIndicatorProps) {
  const variantStyles = {
    danger: "border-destructive/30 bg-destructive/10 text-destructive",
    warning: "border-warning/30 bg-warning/10 text-warning",
    success: "border-accent/30 bg-accent/10 text-accent",
  };

  return (
    <div className={`p-4 rounded-lg border ${variantStyles[variant]}`}>
      <p className="text-xs uppercase tracking-wider opacity-80 mb-1">{label}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}

export function ImpactChart() {
  return (
    <div className="technical-card p-6">
      <h4 className="text-sm font-semibold mb-6 text-muted-foreground uppercase tracking-wider">
        Custo de intervenção
      </h4>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Ajuste preventivo</span>
            <span className="text-accent font-mono">1x</span>
          </div>
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full" style={{ width: "20%" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Correção tardia</span>
            <span className="text-destructive font-mono">5-10x</span>
          </div>
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-destructive rounded-full" style={{ width: "85%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
