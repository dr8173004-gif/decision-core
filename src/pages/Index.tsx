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

  const caseMeta = {
    title: "Cenário 4 — Decisão técnica sem suporte do CT",
    subtitle:
      "Pilhas e barragens de mineração | quando o CT vira “carimbo” e não sistema de decisão",
    kicker: ["Análise de Caso", "Mineração", "Controle Tecnológico", "Pilhas & Barragens"],
  };

  const stats = useMemo(() => {
    const retrabalhoPct = 10;
    const ctPctMin = 0.5;
    const ctPctMax = 1.0;

    const riskScore = 78;
    const commScore = 22;

    return { retrabalhoPct, ctPctMin, ctPctMax, riskScore, commScore };
  }, []);

  const trend: Reading[] = [
    { label: "D1", value: 62 },
    { label: "D2", value: 66 },
    { label: "D3", value: 71 },
    { label: "D4", value: 78 },
  ];

  const maxTrend = Math.max(...trend.map((d) => d.value));

  return (
    <article ref={ref} className="case-wrap">
      <header className="case-hero">
        <div className="case-hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="case-hero-overlay" />

        <svg
          className="case-scribbles"
          viewBox="0 0 1200 420"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M60,80 C220,40 360,130 520,100 C690,70 760,20 940,65 C1040,90 1120,70 1160,55" />
          <path d="M120,260 C280,210 420,330 610,290 C770,255 900,200 1080,230" />
          <path d="M900,120 l80,-30 l-25,75" />
          <path d="M260,320 l70,-35 l-20,70" />
        </svg>

        <div className="case-container">
          <div className="reveal">
            <div className="case-kickers">
              {caseMeta.kicker.map((t) => (
                <span key={t} className="tag-mining">
                  {t}
                </span>
              ))}
            </div>

            <h1 className="case-title">
              {caseMeta.title}
              <span className="case-subtitle">{caseMeta.subtitle}</span>
            </h1>

            <p className="case-lead">
              Em obras críticas como pilhas e barragens, decidir sem usar o controle tecnológico
              como sistema de decisão é apostar às cegas. Abaixo está minha leitura do cenário,
              com conexões diretas entre falha → risco → custo → decisão correta.
            </p>

            <section className="dash-grid reveal reveal-delay-1">
              <div className="dash-card">
                <div className="dash-top">
                  <span className="dash-label">Risco (score)</span>
                  <ShieldAlert size={18} />
                </div>
                <div className="dash-value">
                  {stats.riskScore}
                  <span className="dash-suf">/100</span>
                </div>
                <div className="meter">
                  <div className="meter-bar" style={{ width: `${stats.riskScore}%` }} />
                </div>
                <div className="dash-note">
                  Aumenta quando decisão ignora CT + tendência não é interpretada.
                </div>
              </div>

              <div className="dash-card">
                <div className="dash-top">
                  <span className="dash-label">Custo do retrabalho</span>
                  <TrendingUp size={18} />
                </div>
                <div className="dash-value">
                  {stats.retrabalhoPct}
                  <span className="dash-suf">%</span>
                </div>
                <div className="dash-note">
                  Retrabalhos/reforços podem superar <b>10%</b> do orçamento.
                </div>
              </div>

              <div className="dash-card">
                <div className="dash-top">
                  <span className="dash-label">Investimento típico em CT</span>
                  <Activity size={18} />
                </div>
                <div className="dash-value">
                  {stats.ctPctMin.toFixed(1)}–{stats.ctPctMax.toFixed(1)}
                  <span className="dash-suf">%</span>
                </div>
                <div className="dash-note">
                  Ordem de grandeza: <b>0,5–1%</b>. Barato comparado ao custo de correção.
                </div>
              </div>

              <div className="dash-card">
                <div className="dash-top">
                  <span className="dash-label">Comunicação técnica</span>
                  <Link2 size={18} />
                </div>
                <div className="dash-value">
                  {stats.commScore}
                  <span className="dash-suf">/100</span>
                </div>
                <div className="meter">
                  <div className="meter-bar meter-bar-warn" style={{ width: `${stats.commScore}%` }} />
                </div>
                <div className="dash-note">CT só funciona quando entra na decisão, não no “pós”.</div>
              </div>
            </section>
          </div>
        </div>
      </header>

      <main className="case-body">
        <div className="case-container">
          <section className="case-section reveal">
            <h2 className="h2">Apresentação do caso</h2>

            <div className="note-paper">
              <p>
                Em uma pilha ou barragem de rejeitos, a obra avança com cronograma apertado.
                Ensaios de compactação e caracterização do material estão sendo feitos, mas a
                pressão para seguir o cronograma leva a decisões rápidas baseadas apenas em prazo
                e custo.
              </p>

              <div className="margin-scribble">
                <span className="scribble-arrow">↗</span>
                <span className="scribble-text">
                  Decisão orientada por prazo costuma ignorar tendência e contexto real.
                </span>
              </div>
            </div>
          </section>

          <section className="case-section reveal reveal-delay-1">
            <h2 className="h2">O que o CT fez corretamente</h2>

            <div className="split">
              <div className="card-mining">
                <ul className="list">
                  <li>Coletou amostras e executou ensaios laboratoriais e de campo.</li>
                  <li>Tratou estatisticamente os resultados e documentou.</li>
                  <li>Entregou laudos e parâmetros para aceitar/rejeitar serviços (IBRAOP).</li>
                </ul>
              </div>

              <div className="callout callout-ok">
                <div className="callout-title">
                  <ClipboardCheck size={18} />
                  <strong>Importante</strong>
                </div>
                <p>
                  Não foi falta de ensaio. O CT gerou informação. O problema foi a gestão tratar a
                  informação como formalidade, não como gatilho de decisão.
                </p>
              </div>
            </div>
          </section>

          <section className="case-section reveal">
            <h2 className="h2">Onde o sistema falhou</h2>

            <div className="link-map">
              <div className="node node-bad">
                <div className="node-title">
                  <AlertTriangle size={18} /> Falha 1
                </div>
                <div className="node-text">
                  Líderes ignoraram os dados na hora de decidir; consultaram o CT depois para “validar”
                  o que já estava feito.
                </div>
              </div>

              <div className="connector">
                <span className="connector-line" />
                <span className="connector-arrow">➜</span>
                <span className="connector-label">vira “carimbo”</span>
              </div>

              <div className="node node-warn">
                <div className="node-title">
                  <Wrench size={18} /> Falha 2
                </div>
                <div className="node-text">
                  Comunicação técnica inefetiva: CT só é adequado quando comunica resultados para tomada de decisão.
                </div>
              </div>

              <div className="connector">
                <span className="connector-line" />
                <span className="connector-arrow">➜</span>
                <span className="connector-label">desvio passa</span>
              </div>

              <div className="node node-bad">
                <div className="node-title">
                  <AlertTriangle size={18} /> Falha 3
                </div>
                <div className="node-text">
                  Pequenos desvios passaram porque ninguém conectou valores dos ensaios com a condição real da pilha/barragem.
                </div>
              </div>
            </div>

            <div className="mini-trend">
              <div className="mini-trend-head">
                <span className="mini-title">Exemplo de tendência ignorada</span>
                <span className="mini-sub">sinal fraco que vira problema caro</span>
              </div>

              <div className="mini-bars">
                {trend.map((d) => (
                  <div key={d.label} className="mini-bar">
                    <div className="mini-bar-top">
                      <span>{d.label}</span>
                      <span>{d.value}</span>
                    </div>
                    <div className="mini-track">
                      <div className="mini-fill" style={{ width: `${(d.value / maxTrend) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mini-foot">
                *Não é sobre um valor isolado. É sobre <b>tendência</b> + <b>contexto</b> + <b>decisão</b>.
              </p>
            </div>
          </section>

          <section className="case-section reveal">
            <h2 className="h2">Consequência prática</h2>

            <div className="impact-grid">
              <div className="impact">
                <div className="impact-title">
                  <TrendingUp size={18} /> Risco assumido sem perceber
                </div>
                <p>Quando o CT entra depois, o risco já foi “comprado” no campo.</p>
              </div>

              <div className="impact">
                <div className="impact-title">
                  <AlertTriangle size={18} /> Impactos graves
                </div>
                <p>Falhas podem liberar grande volume de rejeitos, com impacto ambiental e social enorme.</p>
              </div>

              <div className="impact">
                <div className="impact-title">
                  <Activity size={18} /> Custo explode
                </div>
                <p>
                  Retrabalho/reforço pode passar de <b>10%</b> do orçamento, enquanto CT é <b>0,5–1%</b>.
                </p>
              </div>
            </div>
          </section>

          <section className="case-section reveal">
            <h2 className="h2">Leitura técnica correta</h2>

            <div className="steps">
              <div className="step">
                <ArrowRight />
                <div>
                  <div className="step-title">CT como sistema de decisão</div>
                  <div className="step-text">
                    Indica se execução está dentro dos parâmetros e quando ajustes simples (umidade, compactação, espaçamento)
                    são necessários.
                  </div>
                </div>
              </div>

              <div className="step">
                <ArrowRight />
                <div>
                  <div className="step-title">Integrar dados à frente</div>
                  <div className="step-text">
                    Indicadores de qualidade orientam planejamento e decisões durante a execução — não depois.
                  </div>
                </div>
              </div>

              <div className="step">
                <ArrowRight />
                <div>
                  <div className="step-title">Monitoramento contínuo</div>
                  <div className="step-text">
                    Instrumentação detecta deslocamentos milimétricos e permite ações preventivas.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="case-section reveal">
            <h2 className="h2">Decisão que deveria ter sido tomada</h2>

            <div className="callout callout-solution">
              <div className="callout-title">
                <PauseCircle size={18} />
                <strong>Sequência de decisão segura</strong>
              </div>

              <ol className="olist">
                <li>Paralisar ou diminuir o ritmo temporariamente para interpretar os resultados.</li>
                <li>
                  Ajustar o processo assim que os ensaios indicarem tendência de desvio (umidade fora do ideal, compactação insuficiente).
                </li>
                <li>Só retomar o avanço quando o CT confirmar atendimento aos critérios de segurança e estabilidade.</li>
              </ol>
            </div>
          </section>

          <footer className="case-footer reveal">
            <h3 className="h3">Fechamento</h3>
            <p>
              Decidir sem usar o sistema de controle tecnológico é apostar às cegas: aceitar riscos de instabilidade que crescem
              silenciosamente. Em obras críticas como pilhas e barragens, um CT atuante não é opcional — é a base para decisões
              seguras e responsáveis.
            </p>

            <div className="signature">
              <span className="sig-dot" />
              <span>Diego R. Jesus — análise aplicada (mineração, geotecnia e controle tecnológico)</span>
            </div>
          </footer>
        </div>
      </main>
    </article>
  );
}
