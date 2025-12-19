import { useEffect, useState } from "react";
import { ArrowDown, TrendingUp, Droplets, Timer, AlertTriangle } from "lucide-react";

import hero from "@/assets/hero-barragem-analise.jpg";
import frente from "@/assets/frente-servico-compactacao.jpg";
import lab from "@/assets/laboratorio-ensaios.jpg";
import diagrama from "@/assets/diagrama-rabiscado.jpg";
import monitoramento from "@/assets/instrumentacao-monitoramento.jpg";

import { ProgressBar } from "@/components/presentation/ProgressBar";
import { SlideIndicator } from "@/components/presentation/SlideIndicator";
import { DecisionFlow } from "@/components/presentation/DecisionFlow";
import { ComparisonCards } from "@/components/presentation/ComparisonCards";
import { MiniDashboard } from "@/components/presentation/MiniDashboard";
import { CaseTimeline } from "@/components/presentation/CaseTimeline";
import { StopAndThink } from "@/components/presentation/StopAndThink";
import { DecisionChecklist } from "@/components/presentation/Checklist";
import { LanguageToggle } from "@/components/presentation/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

// KPI Card Component
function KPI({
  title,
  value,
  help,
  tone = "copper",
}: {
  title: string;
  value: string;
  help: string;
  tone?: "copper" | "steel" | "graphite";
}) {
  return (
    <div className={`kpi-card ${tone}`}>
      <div className="kpi-title">{title}</div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-help">{help}</div>
    </div>
  );
}

// Trend visualization component
function TrendVisualization() {
  const { t } = useLanguage();
  
  const data = [
    { day: "D1", value: 13.8, status: "ok" },
    { day: "D2", value: 14.1, status: "ok" },
    { day: "D3", value: 14.5, status: "warn" },
    { day: "D4", value: 14.9, status: "warn" },
    { day: "D5", value: 15.2, status: "danger" },
  ];

  return (
    <div className="glass-card mt-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {t("data.trend.title")}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {t("data.trend.optimal")}
          </div>
        </div>
        <AlertTriangle className="text-warning" size={20} />
      </div>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 text-xs font-semibold text-muted-foreground">{item.day}</div>
            <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${(item.value / 16) * 100}%`,
                  background:
                    item.status === "ok"
                      ? "hsl(150, 60%, 45%)"
                      : item.status === "warn"
                      ? "hsl(38, 90%, 55%)"
                      : "hsl(0, 70%, 55%)",
                }}
              />
            </div>
            <div
              className={`w-12 text-sm font-bold text-right ${
                item.status === "ok"
                  ? "text-green-400"
                  : item.status === "warn"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {item.value}%
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/30 text-sm text-muted-foreground">
        <strong className="text-primary">Insight:</strong> {t("data.trend.insight")}
      </div>
    </div>
  );
}

export default function Index() {
  const [dashboardVisible, setDashboardVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            
            // Check if dashboard slide is visible
            if (entry.target.closest("#slide-dashboard")) {
              setDashboardVisible(true);
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <article className="presentation">
      {/* Fixed Background */}
      <div className="bg-fixed" style={{ backgroundImage: `url(${hero})` }} />
      <div className="bg-overlay" />

      {/* Progress Bar */}
      <ProgressBar />

      {/* Slide Indicator */}
      <SlideIndicator totalSlides={8} />

      {/* Language Toggle */}
      <LanguageToggle />

      {/* ========== SLIDE 1: HERO ========== */}
      <section className="slide slide-hero">
        <div className="slide-content reveal">
          <h1 className="title-hero mb-6">
            {t("hero.title.line1")}<br />
            {t("hero.title.line2")}<br />
            <span className="text-primary">{t("hero.title.highlight")}</span>
          </h1>

          <p className="subtitle mx-auto mb-12">
            {t("hero.subtitle.part1")} {t("hero.subtitle.part2")}{" "}
            <strong className="text-accent-foreground">{t("hero.subtitle.whenAdjust")}</strong> {t("hero.subtitle.and")}{" "}
            <strong className="text-accent-foreground">{t("hero.subtitle.whenStop")}</strong> {t("hero.subtitle.part3")}
          </p>

          <div className="scroll-indicator text-muted-foreground">
            <span className="text-xs uppercase tracking-widest font-medium">{t("hero.scroll")}</span>
            <ArrowDown size={20} />
          </div>
        </div>
      </section>

      {/* ========== SLIDE 2: CONTEXTO ========== */}
      <section className="slide">
        <div className="slide-content">
          <div className="reveal">
            <h2 className="title-section">{t("context.title")}</h2>
            <p className="subtitle mb-8">
              {t("context.subtitle")}
            </p>
          </div>

          <div className="grid-2">
            <div className="reveal reveal-delay-1">
              <div className="glass-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="text-primary" size={20} />
                  </div>
                  <span className="font-bold">{t("context.card1.title")}</span>
                </div>
                <p className="text-body">
                  {t("context.card1.text")}
                </p>
              </div>

              <div className="glass-card mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center">
                    <Droplets className="text-secondary" size={20} />
                  </div>
                  <span className="font-bold">{t("context.card2.title")}</span>
                </div>
                <p className="text-body">
                  {t("context.card2.text")}
                </p>
              </div>

              <div className="glass-card mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
                    <Timer className="text-warning" size={20} />
                  </div>
                  <span className="font-bold">{t("context.card3.title")}</span>
                </div>
                <p className="text-body">
                  {t("context.card3.text")}
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="figure-container">
                <img src={frente} alt="Work front and compaction" />
                <div className="figure-caption">
                  <span className="figure-label">{t("context.figure1.label")}</span>
                  {t("context.figure1.caption")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SLIDE 3: DADOS E TENDÊNCIA ========== */}
      <section className="slide" id="slide-dashboard">
        <div className="slide-content">
          <div className="reveal">
            <h2 className="title-section">{t("data.title")}</h2>
            <p className="subtitle mb-8">
              {t("data.subtitle")}
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <MiniDashboard isVisible={dashboardVisible} />
          </div>

          <div className="reveal reveal-delay-2">
            <TrendVisualization />
          </div>

          <div className="reveal reveal-delay-3">
            <StopAndThink
              question={t("data.stopThink.question")}
              answer={t("data.stopThink.answer")}
            />
          </div>
        </div>
      </section>

      {/* ========== SLIDE 4: FLUXO DE DECISÃO ========== */}
      <section className="slide">
        <div className="slide-content">
          <div className="reveal">
            <h2 className="title-section">{t("flow.title")}</h2>
            <p className="subtitle mb-8">
              {t("flow.subtitle")}
            </p>
          </div>

          <div className="reveal reveal-delay-1 mb-8">
            <DecisionFlow />
          </div>

          <div className="reveal reveal-delay-2">
            <div className="figure-container">
              <img src={diagrama} alt="Decision flow diagram" />
              <div className="figure-caption">
                <span className="figure-label">{t("flow.figure2.label")}</span>
                {t("flow.figure2.caption")}
              </div>
            </div>
          </div>

          <div className="note-box reveal reveal-delay-3">
            <strong>{t("flow.note.label")}</strong> {t("flow.note")}
          </div>
        </div>
      </section>

      {/* ========== SLIDE 5: ONDE FALHOU ========== */}
      <section className="slide">
        <div className="slide-content">
          <div className="reveal">
            <h2 className="title-section">{t("failure.title")}</h2>
            <p className="subtitle mb-8">
              {t("failure.subtitle.part1")} <strong className="text-primary">{t("failure.subtitle.highlight")}</strong> {t("failure.subtitle.part2")}
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <ComparisonCards />
          </div>

          <div className="grid-2 mt-8">
            <div className="reveal reveal-delay-2">
              <div className="glass-card glass-card-highlight">
                <h3 className="font-bold text-lg mb-4">{t("failure.causes.title")}</h3>
                <ul className="list-styled">
                  <li>{t("failure.causes.1")}</li>
                  <li>{t("failure.causes.2")}</li>
                  <li>{t("failure.causes.3")}</li>
                  <li>{t("failure.causes.4")}</li>
                  <li>{t("failure.causes.5")}</li>
                </ul>
              </div>
            </div>

            <div className="reveal reveal-delay-3">
              <div className="figure-container">
                <img src={lab} alt="Laboratory and tests" />
                <div className="figure-caption">
                  <span className="figure-label">{t("failure.figure3.label")}</span>
                  {t("failure.figure3.caption")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SLIDE 6: IMPACTO REAL ========== */}
      <section className="slide">
        <div className="slide-content">
          <div className="reveal">
            <h2 className="title-section">{t("impact.title")}</h2>
            <p className="subtitle mb-8">
              {t("impact.subtitle")}
            </p>
          </div>

          <div className="reveal reveal-delay-1 mb-8">
            <CaseTimeline />
          </div>

          <div className="reveal reveal-delay-2">
            <div className="kpi-grid">
              <KPI
                tone="copper"
                title={t("impact.kpi1.title")}
                value={t("impact.kpi1.value")}
                help={t("impact.kpi1.help")}
              />
              <KPI
                tone="steel"
                title={t("impact.kpi2.title")}
                value={t("impact.kpi2.value")}
                help={t("impact.kpi2.help")}
              />
              <KPI
                tone="graphite"
                title={t("impact.kpi3.title")}
                value={t("impact.kpi3.value")}
                help={t("impact.kpi3.help")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== SLIDE 7: DECISÃO CORRETA ========== */}
      <section className="slide">
        <div className="slide-content">
          <div className="reveal">
            <h2 className="title-section">{t("decision.title")}</h2>
            <p className="subtitle mb-8">
              {t("decision.subtitle")}
            </p>
          </div>

          <div className="grid-2">
            <div className="reveal reveal-delay-1">
              <DecisionChecklist />

              <div className="note-box mt-6">
                <strong>{t("decision.principle.label")}</strong> {t("decision.principle.text")} <em>{t("decision.principle.highlight")}</em>{t("decision.principle.end")}
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="figure-container">
                <img src={monitoramento} alt="Instrumentation and monitoring" />
                <div className="figure-caption">
                  <span className="figure-label">{t("decision.figure4.label")}</span>
                  {t("decision.figure4.caption")}
                </div>
              </div>

              <div className="glass-card glass-card-steel mt-4">
                <h4 className="font-bold mb-3">{t("decision.triggers.title")}</h4>
                <ul className="list-styled text-sm">
                  <li>{t("decision.triggers.1")}</li>
                  <li>{t("decision.triggers.2")}</li>
                  <li>{t("decision.triggers.3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SLIDE 8: FECHAMENTO ========== */}
      <section className="slide footer-slide">
        <div className="reveal">
          <blockquote className="footer-quote">
            {t("footer.quote")}
          </blockquote>

          <p className="footer-signature">
            {t("footer.signature")}
          </p>
        </div>
      </section>
    </article>
  );
}
