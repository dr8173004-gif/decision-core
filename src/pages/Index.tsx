import { useEffect } from "react";

import hero from "@/assets/hero-barragem-analise.jpg";
import frente from "@/assets/frente-servico-compactacao.jpg";
import lab from "@/assets/laboratorio-ensaios.jpg";
import diagrama from "@/assets/diagrama-rabiscado.jpg";
import monitoramento from "@/assets/instrumentacao-monitoramento.jpg";

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
    <div className={`kpi kpi-${tone}`}>
      <div className="kpi-top">
        <div className="kpi-title">{title}</div>
      </div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-help">{help}</div>
    </div>
  );
}

function TrendMini() {
  const data = [
    { d: "D1", v: 62 },
    { d: "D2", v: 66 },
    { d: "D3", v: 71 },
    { d: "D4", v: 78 },
  ];
  const max = Math.max(...data.map((x) => x.v));

  return (
    <div className="trend">
      <div className="trend-head">
        <div className="trend-title">Tendência ignorada (exemplo didático)</div>
        <div className="trend-sub">o problema não é o valor isolado — é a curva</div>
      </div>

      <div className="trend-bars">
        {data.map((x) => (
          <div key={x.d} className="trend-row">
            <div className="trend-left">{x.d}</div>
            <div className="trend-track">
              <div className="trend-fill" style={{ width: `${(x.v / max) * 100}%` }} />
            </div>
            <div className="trend-right">{x.v}</div>
          </div>
        ))}
      </div>

      <div className="trend-foot">
        Leitura correta: tendência + contexto da estrutura + decisão em tempo de obra.
      </div>
    </div>
  );
}

export default function Index() {
  useEffect(() => {
    const blocks = Array.from(document.querySelectorAll(".block"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    blocks.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);

  return (
    <article className="page">
      {/* Fundo fixo */}
      <div className="bg" style={{ backgroundImage: `url(${hero})` }} />
      <div className="bgOverlay" />

      {/* Coluna central */}
      <main className="sheet">
        {/* Abertura */}
        <header className="hero block">
          <div className="heroTitle">
            Decidir sem usar o Controle Tecnológico
            <span className="heroTitle2">é operar no escuro</span>
          </div>

          <p className="heroLead">
            Em pilhas e barragens de rejeitos, o CT não existe para “validar depois”.
            Ele existe para dizer <b>quando ajustar</b> e <b>quando parar</b> — enquanto ainda é barato e seguro.
          </p>

          <div className="scribble">
            <div className="scribbleLine" />
            <div className="scribbleText">CT como sistema de decisão, não como carimbo.</div>
          </div>
        </header>

        {/* Contexto de campo */}
        <section className="block">
          <div className="blockHead">
            <h2>Contexto</h2>
            <p>
              Cronograma apertado. Execução avançando. Ensaios sendo feitos — mas a decisão acontecendo por prazo e custo,
              não pela leitura técnica.
            </p>
          </div>

          <figure className="figure">
            <img src={frente} alt="Frente de serviço e compactação" />
            <figcaption>
              Onde a decisão realmente acontece: na frente de serviço. Se o CT não entra aqui, ele vira burocracia.
            </figcaption>
          </figure>
        </section>

        {/* CT fez certo */}
        <section className="block">
          <div className="blockHead">
            <h2>O que o CT fez corretamente</h2>
            <p>Aqui é importante: não foi “falta de ensaio”. O CT gerou informação. O sistema falhou na decisão.</p>
          </div>

          <div className="grid2">
            <div className="paper">
              <ul className="list">
                <li>Coletou amostras e executou ensaios laboratoriais e de campo.</li>
                <li>Tratou estatisticamente os resultados e documentou.</li>
                <li>Entregou laudos e parâmetros conforme diretrizes do IBRAOP.</li>
              </ul>

              <div className="note">
                Se a liderança consulta o CT só depois, ela não está controlando: está tentando justificar.
              </div>
            </div>

            <figure className="figure small">
              <img src={lab} alt="Laboratório e ensaios" />
              <figcaption>O dado existia. A leitura decisória não.</figcaption>
            </figure>
          </div>
        </section>

        {/* Onde falhou */}
        <section className="block">
          <div className="blockHead">
            <h2>Onde o sistema falhou</h2>
            <p>
              Os líderes ignoraram os dados na hora de decidir e buscaram o CT depois para “validar” o que já estava feito.
              Pequenos desvios passaram despercebidos porque ninguém conectou os números à condição real da estrutura.
            </p>
          </div>

          <figure className="figure">
            <img src={diagrama} alt="Diagrama rabiscado de decisão" />
            <figcaption>
              Falha típica: ensaio → dado → (ignorado) → decisão → risco assumido. A seta que falta é a decisão orientada pelo CT.
            </figcaption>
          </figure>

          <TrendMini />
        </section>

        {/* NOVO: Análise de causa */}
        <section className="block">
          <div className="blockHead">
            <h2>Análise de causa</h2>
            <p>
              O problema não foi o ensaio. Foi a ausência de um <b>mecanismo de decisão</b> baseado em gatilhos.
              Sem esse mecanismo, o dado vira “arquivo” e não vira ação.
            </p>
          </div>

          <div className="causeGrid">
            <div className="causeCard">
              <div className="causeTag">CAUSA</div>
              <div className="causeTitle">Decisão por cronograma</div>
              <div className="causeText">
                Prioriza avanço contínuo. CT entra tarde, apenas para confirmar o que já foi executado.
              </div>
            </div>

            <div className="causeArrow">→</div>

            <div className="causeCard">
              <div className="causeTag">EFEITO</div>
              <div className="causeTitle">Tendência vira “valor isolado”</div>
              <div className="causeText">
                Umidade fora do ideal, compactação insuficiente ou dispersão crescente deixam de ser sinal de alerta
                e passam como “variação aceitável”.
              </div>
            </div>

            <div className="causeArrow">→</div>

            <div className="causeCard">
              <div className="causeTag">CONSEQUÊNCIA</div>
              <div className="causeTitle">Risco acumulativo + correção cara</div>
              <div className="causeText">
                O ajuste que era simples na hora vira retrabalho, reforço, atraso e perda de confiabilidade.
              </div>
            </div>
          </div>

          <div className="callout">
            <div className="calloutTitle">Regra prática</div>
            <div className="calloutText">
              Em estruturas críticas, o CT precisa ter “poder de freio”: se a tendência indica desvio,
              a obra diminui ritmo até reestabilizar o processo.
            </div>
          </div>
        </section>

        {/* Dashboards em código */}
        <section className="block">
          <div className="blockHead">
            <h2>Consequência prática</h2>
            <p>
              Quando o CT não orienta a decisão, o impacto aparece em três frentes: custo, risco e confiabilidade.
              Agora sim os números entram — com contexto.
            </p>
          </div>

          <div className="kpiGrid">
            <KPI
              tone="copper"
              title="Retrabalho / reforço"
              value="+10% do orçamento"
              help="Correção posterior costuma ser mais cara que ajustar no momento do desvio."
            />
            <KPI
              tone="steel"
              title="Investimento típico em CT"
              value="0,5–1%"
              help="CT é barato. O erro é não usá-lo como gatilho de decisão durante a execução."
            />
            <KPI
              tone="graphite"
              title="Risco oculto"
              value="acumulativo"
              help="Desvios pequenos, sem leitura de tendência, se acumulam até virar instabilidade."
            />
          </div>

          <div className="compare">
            <div className="compareRow">
              <div className="compareCol">
                <div className="compareTitle">SEM CT na decisão</div>
                <ul className="miniList">
                  <li>decisão por prazo</li>
                  <li>CT consultado depois</li>
                  <li>tendência ignorada</li>
                  <li>correção cara</li>
                </ul>
              </div>

              <div className="compareMid">→</div>

              <div className="compareCol">
                <div className="compareTitle">COM CT na decisão</div>
                <ul className="miniList">
                  <li>gatilhos de ajuste</li>
                  <li>leitura em tempo real</li>
                  <li>tendência + contexto</li>
                  <li>prevenção</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NOVO: Plano 72h */}
        <section className="block">
          <div className="blockHead">
            <h2>Plano de decisão (72 horas)</h2>
            <p>
              Isso dá cara de apresentação de engenharia: simples, executável e alinhado com obra.
            </p>
          </div>

          <div className="timeline">
            <div className="tlItem">
              <div className="tlDot" />
              <div className="tlBody">
                <div className="tlTitle">0–6h — reduzir ritmo e travar decisão</div>
                <div className="tlText">
                  Paralisar parcialmente a frente crítica. Consolidar resultados, checar dispersão e confirmar condições reais do material.
                </div>
              </div>
            </div>

            <div className="tlItem">
              <div className="tlDot" />
              <div className="tlBody">
                <div className="tlTitle">6–24h — ajustar processo e revalidar</div>
                <div className="tlText">
                  Ajuste de umidade, energia/controle de compactação, espessura de camada e sequência. Repetir ensaios-alvo para confirmar correção.
                </div>
              </div>
            </div>

            <div className="tlItem">
              <div className="tlDot" />
              <div className="tlBody">
                <div className="tlTitle">24–72h — retomar com monitoramento</div>
                <div className="tlText">
                  Retomar apenas com tendência estabilizada e registro formal. Integrar instrumentação e gatilhos (alerta → ação) durante a execução.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decisão correta (mantida) */}
        <section className="block">
          <div className="blockHead">
            <h2>Decisão que deveria ter sido tomada</h2>
            <p>
              Em obra crítica, “seguir” sem ler o dado é apostar às cegas. A decisão segura é simples — e difícil de aplicar sem cultura técnica.
            </p>
          </div>

          <div className="grid2">
            <div className="paper">
              <ol className="steps">
                <li>Paralisar ou diminuir o ritmo temporariamente para interpretar os resultados.</li>
                <li>Ajustar o processo ao primeiro sinal de tendência de desvio (umidade, compactação, espaçamento).</li>
                <li>Retomar só quando o CT confirmar atendimento aos critérios de segurança e estabilidade.</li>
              </ol>

              <div className="closingLine">
                CT não valida decisão — ele <b>define quando decidir</b>.
              </div>
            </div>

            <figure className="figure small">
              <img src={monitoramento} alt="Instrumentação e monitoramento" />
              <figcaption>
                Monitoramento contínuo (instrumentação) para detectar deslocamentos milimétricos e agir antes da falha.
              </figcaption>
            </figure>
          </div>
        </section>

        <footer className="footer block">
          <div className="footerText">
            Em pilhas e barragens, um controle tecnológico atuante não é opcional — é base de decisão segura e responsável.
          </div>
          <div className="sig">Diego R. Jesus — análise técnica aplicada (mineração / CT)</div>
        </footer>
      </main>
    </article>
  );
}
