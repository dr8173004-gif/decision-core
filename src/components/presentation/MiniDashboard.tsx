import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface MetricProps {
  labelKey: string;
  valueKey: string;
  changeKey?: string;
  level: "high" | "medium" | "low" | "neutral";
  barPercent?: number;
  barColor?: string;
}

const metricsConfig: MetricProps[] = [
  {
    labelKey: "dashboard.risk.label",
    valueKey: "dashboard.risk.value",
    changeKey: "dashboard.risk.change",
    level: "high",
    barPercent: 85,
    barColor: "hsl(0, 70%, 55%)",
  },
  {
    labelKey: "dashboard.cost.label",
    valueKey: "dashboard.cost.value",
    changeKey: "dashboard.cost.change",
    level: "high",
    barPercent: 78,
    barColor: "hsl(0, 70%, 55%)",
  },
  {
    labelKey: "dashboard.time.label",
    valueKey: "dashboard.time.value",
    changeKey: "dashboard.time.change",
    level: "medium",
    barPercent: 60,
    barColor: "hsl(38, 90%, 55%)",
  },
  {
    labelKey: "dashboard.reliability.label",
    valueKey: "dashboard.reliability.value",
    changeKey: "dashboard.reliability.change",
    level: "medium",
    barPercent: 65,
    barColor: "hsl(38, 90%, 55%)",
  },
];

function DashboardCard({ metric, isVisible }: { metric: MetricProps; isVisible: boolean }) {
  const [barWidth, setBarWidth] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    if (isVisible && metric.barPercent) {
      const timer = setTimeout(() => setBarWidth(metric.barPercent!), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, metric.barPercent]);

  return (
    <div className="dashboard-card">
      <div className="dashboard-label">{t(metric.labelKey)}</div>
      <div className={`dashboard-value ${metric.level}`}>{t(metric.valueKey)}</div>
      {metric.changeKey && <div className="dashboard-change">{t(metric.changeKey)}</div>}
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
      {metricsConfig.map((metric, i) => (
        <DashboardCard key={i} metric={metric} isVisible={isVisible} />
      ))}
    </div>
  );
}
