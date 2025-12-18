import { useEffect, useState } from "react";

interface MetricProps {
  label: string;
  value: string;
  change?: string;
  level: "high" | "medium" | "low" | "neutral";
  barPercent?: number;
  barColor?: string;
}

const metrics: MetricProps[] = [
  {
    label: "Risco Operacional",
    value: "Alto",
    change: "sem monitoramento",
    level: "high",
    barPercent: 85,
    barColor: "hsl(0, 70%, 55%)",
  },
  {
    label: "Custo Correção",
    value: "R$ 500k",
    change: "retrabalho estimado",
    level: "high",
    barPercent: 78,
    barColor: "hsl(0, 70%, 55%)",
  },
  {
    label: "Prazo Impacto",
    value: "30 dias",
    change: "atraso provável",
    level: "medium",
    barPercent: 60,
    barColor: "hsl(38, 90%, 55%)",
  },
  {
    label: "Confiabilidade",
    value: "65%",
    change: "abaixo do ideal",
    level: "medium",
    barPercent: 65,
    barColor: "hsl(38, 90%, 55%)",
  },
];

function DashboardCard({ metric, isVisible }: { metric: MetricProps; isVisible: boolean }) {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (isVisible && metric.barPercent) {
      const timer = setTimeout(() => setBarWidth(metric.barPercent!), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, metric.barPercent]);

  return (
    <div className="dashboard-card">
      <div className="dashboard-label">{metric.label}</div>
      <div className={`dashboard-value ${metric.level}`}>{metric.value}</div>
      {metric.change && <div className="dashboard-change">{metric.change}</div>}
      {metric.barPercent && (
        <div className="dashboard-bar">
          <div
            className="dashboard-bar-fill"
            style={{
              width: `${barWidth}%`,
              background: metric.barColor,
            }}
          />
        </div>
      )}
    </div>
  );
}

export function MiniDashboard({ isVisible = false }: { isVisible?: boolean }) {
  return (
    <div className="dashboard-grid">
      {metrics.map((metric, i) => (
        <DashboardCard key={i} metric={metric} isVisible={isVisible} />
      ))}
    </div>
  );
}
