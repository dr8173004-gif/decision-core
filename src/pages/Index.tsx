import heroImage from "@/assets/hero-tailings-dam.jpg";
import { AlertTriangle, ArrowRight, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Index() {
  const ref = useScrollReveal();

  return (
    <article
      ref={ref}
      className="min-h-screen text-foreground"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.78), rgba(0,0,0,.85)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-14">

        {/* TÍTULO */}
        <header className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Decisão técnica sem suporte do Controle Tecnológico  
            <span className="block text-gradient mt-2">
              o risco silencioso em pilhas e barragens de mineração
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg">
            Análise de caso sobre como decisões tomadas sem integração com o
            Controle Tecnológico podem levar à aceitação inconsciente de riscos
            críticos em estruturas de rejeitos.
          </p>
        </header>

        {/* CONTEXTO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contexto</h2>

          <p>
            Em pilhas ou barragens de rejeitos, a execução frequentemente ocorre
            sob forte pressão de cronograma. Ensaios de compactação e
            caracterização do material são realizados, porém as decisões
            operacionais acabam sendo guiadas prioritariamente por prazo e
            custo.
          </p>

          <p>
            Nesse cenário, o Controle Tecnológico existe formalmente, mas não
            atua como sistema de decisão. Ele passa a ser consultado apenas de
            forma reativa, quando o avanço já ocorreu.
          </p>
        </section>

        {/* O QUE O CT FEZ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            O que o Controle Tecnológico fez corretamente
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Coletou amostras representativas.</li>
            <li>Executou ensaios laboratoriais e de campo.</li>
            <li>Tratou estatisticamente os resultados.</li>
            <li>
              Emissão de laudos e parâmetros para aceitação ou rejeição,
              conforme diretrizes do IBRAOP.
            </li>
          </ul>

          <p className="text-muted-foreground">
            Do ponto de vista normativo e procedimental, o CT cumpriu seu papel.
          </p>
        </section>

        {/* ONDE FALHOU */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Onde o sistema falhou</h2>

          <div className="border-l-4 border-destructive pl-4 space-y-3">
            <p>
              Os dados do Controle Tecnológico não foram utilizados no momento
              da decisão.
            </p>

            <p>
              Lideranças consultaram o CT apenas posteriormente, buscando
              “validar” decisões já tomadas em campo.
            </p>

            <p>
              Pequenos desvios passaram despercebidos porque ninguém relacionou
              os resultados dos ensaios com a condição real da pilha ou
              barragem.
            </p>
          </div>

          <p className="text-muted-foreground">
            A própria literatura técnica destaca que o controle tecnológico só é
            efetivo quando seus resultados são utilizados ativamente na tomada
            de decisão.
          </p>
        </section>

        {/* CONSEQUÊNCIA */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Consequência prática</h2>

          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-destructive mt-1" />
              <p>
                Risco assumido sem percepção consciente.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <TrendingUp className="text-destructive mt-1" />
              <p>
                Estudos indicam que a ausência de controle tecnológico efetivo é
                uma das principais causas de acidentes em barragens, como
                Mariana e Brumadinho.
              </p>
            </div>
          </div>

          <p>
            Além do risco estrutural, a correção posterior tende a ser muito
            mais onerosa: reforços e retrabalhos podem superar 10 % do orçamento,
            enquanto o custo do CT gira em torno de 0,5–1 %.
          </p>
        </section>

        {/* LEITURA CORRETA */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Leitura técnica correta</h2>

          <ul className="space-y-3">
            <li className="flex gap-2">
              <ArrowRight /> Usar o Controle Tecnológico como sistema de decisão,
              não apenas como verificador.
            </li>
            <li className="flex gap-2">
              <ArrowRight /> Integrar dados de qualidade à frente de serviço e ao
              planejamento.
            </li>
            <li className="flex gap-2">
              <ArrowRight /> Adotar monitoramento contínuo para ações preventivas.
            </li>
          </ul>
        </section>

        {/* DECISÃO CORRETA */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Decisão que deveria ter sido tomada
          </h2>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Reduzir ou paralisar temporariamente o avanço.</li>
            <li>
              Interpretar tendências (umidade, compactação, comportamento).
            </li>
            <li>
              Ajustar o processo imediatamente ao primeiro sinal de desvio.
            </li>
            <li>
              Retomar apenas após confirmação técnica do CT.
            </li>
          </ol>
        </section>

        {/* FECHAMENTO */}
        <footer className="pt-10 border-t border-border">
          <p className="text-lg font-medium">
            Decidir sem utilizar o sistema de controle tecnológico é decidir às
            cegas.
          </p>

          <p className="text-muted-foreground mt-2">
            Em estruturas críticas como pilhas e barragens, o CT não é opcional —
            é a base para decisões seguras, responsáveis e sustentáveis.
          </p>
        </footer>

      </div>
    </article>
  );
}
