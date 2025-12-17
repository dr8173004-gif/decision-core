import hero from "@/assets/hero-barragem-analise.jpg";
import frente from "@/assets/frente-servico-compactacao.jpg";
import lab from "@/assets/laboratorio-ensaios.jpg";
import diagrama from "@/assets/diagrama-rabiscado.jpg";
import monitoramento from "@/assets/instrumentacao-monitoramento.jpg";

export default function Index() {
  return (
    <article className="analysis-root">
      {/* FUNDO FIXO */}
      <div
        className="background-fixed"
        style={{ backgroundImage: `url(${hero})` }}
      />

      {/* COLUNA CENTRAL */}
      <main className="analysis-sheet">
        {/* ABERTURA */}
        <section className="block opening">
          <h1>
            Decidir sem Controle Tecnológico <br />
            é operar no escuro
          </h1>

          <p className="lead">
            Em pilhas e barragens de rejeitos, decisões tomadas sem utilizar o
            controle tecnológico como sistema de decisão não eliminam o risco —
            apenas o tornam invisível.
          </p>
        </section>

        {/* CONTEXTO DE CAMPO */}
        <section className="block with-image">
          <div className="text">
            <h2>O que estava acontecendo em campo</h2>
            <p>
              A obra avançava sob forte pressão de cronograma. Ensaios de
              compactação e caracterização do material estavam sendo realizados,
              mas as decisões operacionais priorizavam prazo e custo.
            </p>
            <p>
              O controle tecnológico existia formalmente, porém não atuava como
              elemento central da decisão. A execução avançava antes da leitura
              técnica completa dos dados.
            </p>
          </div>

          <img src={frente} alt="Frente de serviço e compactação" />
        </section>

        {/* CT FEZ CERTO */}
        <section className="block with-image reverse">
          <img src={lab} alt="Ensaios laboratoriais" />

          <div className="text">
            <h2>O que o Controle Tecnológico fez corretamente</h2>
            <ul>
              <li>Coleta adequada de amostras</li>
              <li>Execução de ensaios laboratoriais e de campo</li>
              <li>Tratamento estatístico dos resultados</li>
              <li>
                Emissão de laudos e parâmetros conforme diretrizes do IBRAOP
              </li>
            </ul>

            <p className="note">
              Do ponto de vista técnico, o controle tecnológico cumpriu seu
              papel. O problema não foi a ausência de dados, mas a forma como
              eles foram ignorados no processo decisório.
            </p>
          </div>
        </section>

        {/* MAPA DE FALHA */}
        <section className="block center">
          <h2>Onde o sistema falhou</h2>

          <img
            src={diagrama}
            alt="Diagrama de decisão técnica rabiscado"
            className="diagram"
          />

          <p>
            Os dados do controle tecnológico passaram a ser consultados apenas
            depois da execução, buscando validar decisões já tomadas. Pequenos
            desvios deixaram de ser interpretados como tendência e passaram a
            ser tratados como valores isolados.
          </p>

          <p className="note">
            Quando o CT não participa da decisão, ele deixa de ser controle e se
            torna apenas um carimbo técnico.
          </p>
        </section>

        {/* DASHBOARD ANALÍTICO */}
        <section className="block">
          <h2>O impacto dessa decisão</h2>

          <p>
            Ignorar o controle tecnológico não gera impacto imediato. O efeito
            aparece de forma acumulativa, atingindo custo, risco e
            confiabilidade da obra.
          </p>

          <div className="dashboard">
            <div className="metric">
              <span className="value">+10%</span>
              <span className="label">Custo potencial de retrabalho</span>
              <p>
                Correções e reforços executados após a obra avançar tendem a
                custar mais de 10% do orçamento total.
              </p>
            </div>

            <div className="metric">
              <span className="value">0,5–1%</span>
              <span className="label">Investimento típico em CT</span>
              <p>
                O custo do controle tecnológico é baixo quando comparado ao
                impacto financeiro da correção tardia.
              </p>
            </div>

            <div className="metric">
              <span className="value">Risco oculto</span>
              <span className="label">Desvios não interpretados</span>
              <p>
                Pequenos desvios, quando não analisados como tendência, se
                acumulam até gerar instabilidade.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section className="block with-image">
          <div className="text">
            <h2>Decisão técnica correta</h2>

            <ol>
              <li>Reduzir ou paralisar temporariamente o avanço</li>
              <li>
                Interpretar tendências de ensaio e condição real da estrutura
              </li>
              <li>
                Ajustar o processo ao primeiro sinal de desvio identificado
              </li>
              <li>
                Retomar a execução apenas com validação do controle tecnológico
              </li>
            </ol>

            <p className="note">
              Em estruturas críticas, o controle tecnológico não valida decisões
              — ele define quando decidir.
            </p>
          </div>

          <img
            src={monitoramento}
            alt="Instrumentação e monitoramento geotécnico"
          />
        </section>

        {/* FECHAMENTO */}
        <footer className="block closing">
          <p>
            Em pilhas e barragens de rejeitos, um controle tecnológico atuante
            não é opcional. Ele é a base para decisões seguras, responsáveis e
            tecnicamente sustentáveis.
          </p>

          <span className="signature">
            Diego R. Jesus — Análise técnica aplicada em mineração
          </span>
        </footer>
      </main>
    </article>
  );
}
