import heroImage from "@/assets/hero-tailings-dam.jpg";
import { useMemo } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  ClipboardCheck,
  PauseCircle,
  Activity,
  Link2,
  Wrench,
} from "lucide-react";

type Reading = { label: string; value: number };

export default function Index() {
  const ref = useScrollReveal();

  // ✅ Baseado no seu texto (CENÁRIO 4)
  const caseMeta = {
    title: "Cenário 4 — Decisão técnica sem suporte do CT",
    subtitle: "Pilhas e barragens de mineração | quando o CT vira “carimbo” e não sistema de decisão",
    kicker: ["Análise de Caso", "Mineração", "Controle Tecnológico", "Pilhas & Barragens"],
  };

  // 🔢 Dados usados como sustentação visual (você pode trocar pelos seus números reais depois)
  const stats = useMemo(() => {
    const retrabalhoPct = 10; // “pode custar mais de 10%”
    const ctPctMin = 0.5;     // “CT gira em torno de 0,5–1%”
    const ctPctMax = 1.0;

    const riskScore = 78; // score “humano” (0–100) baseado na falha sistêmica descrita
    const commScore = 22; // comunicação técnica efetiva (baixa)
    const decisionScore = 28; // decisão orientada por CT (baixa)

    return { retrabalhoPct, ctPctMin, ctPctMax, riskScore, commScore, decisionScore };
  }, []);

  // Mini tendência de “desvio” (exemplo didático e discreto)
  const trend: Reading[] = [
    { label: "D1", value: 62 },
    { label: "D2", value: 66 },
    { label: "D3", value: 71 },
    { label: "D4", value: 78 },
  ];

  const maxTrend = Math.max(...trend.map((d) => d.value));

  return (
    <article ref={ref} className="case-wrap">
      {/* HERO / FUNDO */}
      <header className="case-hero">
        <div className="case-hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="case-hero-overlay" />

        {/* “rabiscos” em SVG por cima */}
        <svg className="case-scribbles" viewBox="0 0 1200 420" preserveAspectRatio="none" aria-hidden="true">
          <path d="M60,80 C220,40 360,130 520,100 C690,70 760,20 940,65 C1040,90 1120,70 1160,55" />
          <path d="M120,260 C280,210 420,330 610,290 C770,255 900,200 1080,230" />
          <path d="M900,120 l80,-30 l-25,75" />
          <path d="M260,320 l70,-35 l-20,70" />
        </svg>

        <div className="case-container">
          <div className="reveal">
            <div className="case-kickers">
              {caseMeta.kicker.map((t) => (
                <span key={t} className="tag-mining">{t}</span>
              ))}
            </div>

            <h1 className="case-title">
              {caseMeta.title}
              <span className="case-subtitle">{caseMeta.subtitle}</span>
            </h1>
