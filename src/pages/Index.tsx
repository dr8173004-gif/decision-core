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
            Tendência de Umidade
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Umidade ótima: 14,0% | Tolerância: ±0,5%
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
        <strong className="text-primary">Insight:</strong> O problema não é o valor isolado — é a curva ascendente que ninguém parou para analisar.
      </div>
    </div>
  );
}

export default function Index() {
  const [dashboardVisible, setDashboardVisible] = useState(false);

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

      {/* ========== SLIDE 1: HERO ========== */}
      <section className="slide slide-hero">
        <div className="slide-content reveal">
          <h1 className="title-hero mb-6">
            Decidir sem usar o<br />
            Controle Tecnológico<br />
            <span className="text-primary">é operar no escuro</span>
          </h1>

          <p className="subtitle mx-auto mb-12">
            Em pilhas e barragens de rejeitos, o CT não existe para "validar depois".
            Ele existe para dizer <strong className="text-accent-foreground">quando ajustar</strong> e{" "}
            <strong className="text-accent-foreground">quando parar</strong> — enquanto ainda é barato e seguro.
          </p>

          <div className="scroll-indicator text-muted-foreground">
            <span className="text-xs uppercase tracking-widest font-medium">Role para explorar</span>
            <ArrowDown size={20} />
          </div>
        </div>
      </section>

      {/* ========== SLIDE 2: CONTEXTO ========== */}
      <section className="slide">
        <div className="slide-content">
          <div className="reveal">
            <h2 className="title-section">Contexto da Obra</h2>
            <p className="subtitle mb-8">
              Cronograma apertado. Execução avançando. Ensaios sendo feitos — mas a decisão acontecendo por prazo e custo, não pela leitura técnica.
            </p>
          </div>

          <div className="grid-2">
            <div className="reveal reveal-delay-1">
              <div className="glass-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="text-primary" size={20} />
                  </div>
                  <span className="font-bold">Alteamento contínuo</span>
                </div>
                <p className="text-body">
                  Pilha de rejeitos em fase de alteamento contínuo, com meta de avanço vertical de 2,5m por mês. Material fino (silte argiloso), sensível à variação de umidade.
                </p>
              </div>

              <div className="glass-card mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center">
                    <Droplets className="text-secondary" size={20} />
                  </div>
                  <span className="font-bold">Condições críticas</span>
                </div>
                <p className="text-body">
                  Período chuvoso com precipitação acumulada acima da média. Umidade natural do material variando entre 14% e 17%. Janela de compactação reduzida.
                </p>
              </div>

              <div className="glass-card mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
                    <Timer className="text-warning" size={20} />
                  </div>
                  <span className="font-bold">Pressão de prazo</span>
                </div>
                <p className="text-body">
                  Contrato prevê penalidades por atraso. Equipe de execução pressionada para manter ritmo. Controle Tecnológico visto como "obstáculo" ao invés de ferramenta.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="figure-container">
                <img src={frente} alt="Frente de serviço e compactação" />
                <div className="figure-caption">
                  <span className="figure-label">Figura 01</span>
                  Frente de serviço durante alteamento. Onde a decisão realmente acontece.
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
            <h2 className="title-section">Os Dados Estavam Lá</h2>
            <p className="subtitle mb-8">
              O CT coletou, tratou e entregou os resultados corretamente. O problema não foi falta de informação — foi falta de leitura decisória.
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
              question="Se todos os ensaios foram aprovados, por que a decisão falhou?"
              answer="Porque aprovação de ensaio não é o mesmo que leitura de tendência. O ensaio olha para o ponto; o controle tecnológico efetivo olha para a curva. Uma sequência de valores 'dentro do limite' pode esconder uma tendência de desvio que, se não corrigida, leva a problemas acumulativos."
            />
          </div>
        </div>
      </section>

      {/* ========== SLIDE 4: FLUXO DE DECISÃO ========== */}
      <section className="slide">
        <div className="slide-content">
          <div className="reveal">
            <h2 className="title-section">O Fluxo de Decisão</h2>
            <p className="subtitle mb-8">
              Em estruturas críticas, cada dado deve percorrer um caminho claro até virar ação. Quando esse fluxo é quebrado, o risco se acumula silenciosamente.
            </p>
          </div>

          <div className="reveal reveal-delay-1 mb-8">
            <DecisionFlow />
          </div>

          <div className="reveal reveal-delay-2">
            <div className="figure-container">
              <img src={diagrama} alt="Diagrama de fluxo de decisão" />
              <div className="figure-caption">
                <span className="figure-label">Figura 02</span>
                Fluxo típico onde o CT é ignorado: dado → (arquivo) → decisão por prazo → risco assumido.
              </div>
            </div>
          </div>

          <div className="note-box reveal reveal-delay-3">
            <strong>Falha típica:</strong> A seta entre "Dado" e "Decisão" é cortada. O CT vira documentação retroativa, não ferramenta de gestão.
          </div>
        </div>
      </section>

      {/* ========== SLIDE 5: ONDE FALHOU ========== */}
      <section className="slide">
        <div className="slide-content">
          <div className="reveal">
            <h2 className="title-section">Onde o Sistema Falhou</h2>
            <p className="subtitle mb-8">
              O problema não foi o ensaio. Foi a ausência de um <strong className="text-primary">mecanismo de decisão</strong> baseado em gatilhos. Sem esse mecanismo, o dado vira "arquivo" e não vira ação.
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <ComparisonCards />
          </div>

          <div className="grid-2 mt-8">
            <div className="reveal reveal-delay-2">
              <div className="glass-card glass-card-highlight">
                <h3 className="font-bold text-lg mb-4">Causas Identificadas</h3>
                <ul className="list-styled">
                  <li>Decisão tomada antes da leitura técnica completa</li>
                  <li>CT usado apenas para validar o que já estava executado</li>
                  <li>Tendência de umidade crescente não acionou gatilho de parada</li>
                  <li>Energia de compactação aumentada artificialmente para "forçar" aprovação</li>
                  <li>Ausência de critérios claros de quando reduzir ritmo</li>
                </ul>
              </div>
            </div>

            <div className="reveal reveal-delay-3">
              <div className="figure-container">
                <img src={lab} alt="Laboratório e ensaios" />
                <div className="figure-caption">
                  <span className="figure-label">Figura 03</span>
                  O dado existia. A leitura decisória não.
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
            <h2 className="title-section">O Impacto Real</h2>
            <p className="subtitle mb-8">
              Quando o CT não orienta a decisão, o impacto aparece em três frentes: custo, risco e confiabilidade. Veja a evolução do problema ao longo do tempo.
            </p>
          </div>

          <div className="reveal reveal-delay-1 mb-8">
            <CaseTimeline />
          </div>

          <div className="reveal reveal-delay-2">
            <div className="kpi-grid">
              <KPI
                tone="copper"
                title="Retrabalho / Reforço"
                value="+12%"
                help="Do orçamento original consumido em correções que poderiam ter sido evitadas com ajuste preventivo."
              />
              <KPI
                tone="steel"
                title="Investimento em CT"
                value="0,7%"
                help="O CT custa menos de 1% do orçamento. O erro de não usá-lo como gatilho custa 10x mais."
              />
              <KPI
                tone="graphite"
                title="Prazo Impactado"
                value="+25 dias"
                help="Atraso acumulado devido a retrabalho, mobilização extra e revalidação de processos."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== SLIDE 7: DECISÃO CORRETA ========== */}
      <section className="slide">
        <div className="slide-content">
          <div className="reveal">
            <h2 className="title-section">A Decisão Que Deveria Ter Sido Tomada</h2>
            <p className="subtitle mb-8">
              Em obra crítica, "seguir" sem ler o dado é apostar às cegas. A decisão segura é simples — e difícil de aplicar sem cultura técnica.
            </p>
          </div>

          <div className="grid-2">
            <div className="reveal reveal-delay-1">
              <DecisionChecklist />

              <div className="note-box mt-6">
                <strong>Princípio fundamental:</strong> CT não valida decisão — ele <em>define quando decidir</em>. A obra que integra o CT ao fluxo de execução reduz retrabalho, controla risco e mantém credibilidade técnica.
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="figure-container">
                <img src={monitoramento} alt="Instrumentação e monitoramento" />
                <div className="figure-caption">
                  <span className="figure-label">Figura 04</span>
                  Monitoramento contínuo: detectar desvios milimétricos antes que virem problemas estruturais.
                </div>
              </div>

              <div className="glass-card glass-card-steel mt-4">
                <h4 className="font-bold mb-3">Gatilhos Recomendados</h4>
                <ul className="list-styled text-sm">
                  <li>Umidade 0,5% acima do ótimo por 2 dias → reduzir ritmo</li>
                  <li>Dispersão de GC {">"} 2% → reavaliar processo</li>
                  <li>Tendência crescente em 3 leituras → parar e ajustar</li>
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
            "Em pilhas e barragens, um controle tecnológico atuante não é opcional — é base de decisão segura e responsável."
          </blockquote>

          <p className="footer-signature">
            Diego R. Jesus — Análise técnica aplicada (mineração / CT)
          </p>
        </div>
      </section>
    </article>
  );
}
