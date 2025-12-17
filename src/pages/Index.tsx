import { 
  FileText, 
  Search, 
  AlertTriangle, 
  BarChart3, 
  CheckCircle,
  Database,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Activity,
  X
} from "lucide-react";
import heroImage from "@/assets/hero-tailings-dam.jpg";
import { Section, SectionHeader } from "@/components/Section";
import { Step, StepFlow } from "@/components/StepFlow";
import { ContextCard, TechnicalCard } from "@/components/TechnicalCard";
import { DataTable } from "@/components/DataTable";
import { AlertBox } from "@/components/AlertBox";
import { InsightList } from "@/components/InsightCard";
import { ImpactIndicator, ImpactChart } from "@/components/ImpactIndicator";
import { Checklist } from "@/components/Checklist";
import { ScenarioNav } from "@/components/ScenarioNav";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* BLOCO 0 — CAPA / INTRODUÇÃO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Vista aérea de barragem de rejeitos de mineração" 
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0" 
            style={{ background: "linear-gradient(180deg, hsl(222 47% 6% / 0.75) 0%, hsl(222 47% 6% / 0.95) 100%)" }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-6 animate-fade-in">
              Análise técnica aplicada
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
              Controle Tecnológico como{" "}
              <span className="text-gradient">Sistema de Decisão</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Análise de cenários aplicados a pilhas e barragens de rejeito na mineração
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Estudos simulados baseados em situações reais de obra, com foco em leitura técnica, 
              identificação de falhas sistêmicas e tomada de decisão.
            </p>

            {/* Scroll indicator */}
            <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a 
                href="#metodologia" 
                className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-xs uppercase tracking-wider">Iniciar análise</span>
                <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 1 — COMO FUNCIONA A ANÁLISE */}
      <Section id="metodologia" className="border-t border-border">
        <SectionHeader 
          label="Metodologia"
          title="Como funciona a análise"
          description="Cada cenário apresentado neste projeto segue um método fixo de análise técnica, semelhante à investigação de patologias em obras geotécnicas."
        />

        <StepFlow>
          <Step 
            number={1}
            icon={FileText}
            title="Contexto da obra"
            description="Caracterização da estrutura, fase construtiva e condições operacionais."
          />
          <Step 
            number={2}
            icon={Database}
            title="Dados do controle tecnológico"
            description="Resultados de ensaios, medições e indicadores de qualidade."
          />
          <Step 
            number={3}
            icon={Search}
            title="Identificação do problema"
            description="Análise crítica das falhas sistêmicas e pontos de vulnerabilidade."
          />
          <Step 
            number={4}
            icon={AlertTriangle}
            title="Análise dos impactos"
            description="Consequências operacionais, custos e riscos associados."
          />
          <Step 
            number={5}
            icon={CheckCircle}
            title="Decisão correta e medidas preventivas"
            description="Ações que deveriam ter sido tomadas para evitar o problema."
          />
        </StepFlow>
      </Section>

      {/* BLOCO 2 — INÍCIO DO CENÁRIO (IMERSÃO) */}
      <Section className="bg-secondary/30">
        <div className="flex items-center gap-3 mb-8">
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Cenário 4
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <SectionHeader 
          title="Decisão técnica sem suporte do Controle Tecnológico"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <ContextCard 
            items={[
              { label: "Estrutura", value: "Pilha/Barragem de rejeitos" },
              { label: "Fase", value: "Alteamento contínuo" },
              { label: "Material", value: "Rejeito fino, sensível à umidade" },
              { label: "Condição operacional", value: "Pressão por avanço" },
            ]}
          />
          
          <TechnicalCard className="flex flex-col justify-center">
            <div className="flex items-center gap-3 text-warning mb-4">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Situação crítica</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cronograma apertado e pressão por avanço rápido. Decisões sendo tomadas 
              sem esperar a consolidação dos resultados do controle tecnológico.
            </p>
          </TechnicalCard>
        </div>
      </Section>

      {/* BLOCO 3 — DADOS OBSERVADOS (INVESTIGAÇÃO) */}
      <Section>
        <SectionHeader 
          label="Investigação"
          title="Dados observados"
          description="Análise dos resultados do controle tecnológico no período avaliado."
        />

        <div className="space-y-6">
          <DataTable 
            headers={["Parâmetro", "Valor"]}
            rows={[
              ["Umidade ótima de projeto", "14,0 %"],
              ["Umidade medida (D1–D4)", "13,8 → 14,9 %"],
              ["Grau de compactação mínimo", "≥ 95 %"],
              ["Grau de compactação medido", "95,2 – 96,8 %"],
            ]}
          />

          <TechnicalCard>
            <p className="text-sm text-muted-foreground mb-4">
              Todos os resultados estavam formalmente dentro dos critérios de aceitação.
            </p>
            <AlertBox variant="warning">
              <strong>Resultados aceitáveis não significam decisão segura.</strong>
              <br />
              <span className="text-muted-foreground">
                A aprovação formal de ensaios não garante que o comportamento do material 
                esteja alinhado com as premissas de projeto a longo prazo.
              </span>
            </AlertBox>
          </TechnicalCard>
        </div>
      </Section>

      {/* BLOCO 4 — ANÁLISE DO PROBLEMA (PATOLOGIA) */}
      <Section className="bg-secondary/30">
        <SectionHeader 
          label="Patologia"
          title="Onde o sistema falhou"
        />

        <div className="grid gap-4">
          {[
            { icon: Clock, text: "Decisão tomada antes da leitura técnica completa" },
            { icon: Shield, text: "Controle tecnológico usado apenas como validação posterior" },
            { icon: TrendingUp, text: "Ausência de análise de tendência nos dados" },
            { icon: Activity, text: "Falta de integração entre dado e decisão operacional" },
          ].map((item, i) => (
            <div key={i} className="technical-card flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center shrink-0">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BLOCO 5 — IMPACTO OPERACIONAL (CONSEQUÊNCIA) */}
      <Section>
        <SectionHeader 
          label="Consequência"
          title="Impacto operacional"
        />

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <ImpactIndicator 
            label="Custo"
            value="Elevado"
            trend="up"
            variant="danger"
          />
          <ImpactIndicator 
            label="Prazo"
            value="Atrasado"
            trend="up"
            variant="warning"
          />
          <ImpactIndicator 
            label="Risco"
            value="Aumentado"
            trend="up"
            variant="danger"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <TechnicalCard>
              <ul className="space-y-3">
                {[
                  "Retrabalho em camadas recentes",
                  "Redução de produtividade",
                  "Correções com custo elevado",
                  "Aumento de risco operacional",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TechnicalCard>

            <AlertBox variant="info">
              Em estruturas de rejeito, o impacto raramente aparece na hora.
              <br />
              <strong className="text-foreground">Ele cresce em silêncio.</strong>
            </AlertBox>
          </div>

          <ImpactChart />
        </div>
      </Section>

      {/* BLOCO 6 — LEITURA TÉCNICA CORRETA */}
      <Section className="bg-secondary/30">
        <SectionHeader 
          label="Fundamentos"
          title="Leitura técnica adequada"
          description="Princípios que deveriam ter orientado a interpretação dos dados."
        />

        <InsightList 
          insights={[
            "Tendência é mais importante que valor isolado. Um dado dentro do limite, mas em crescimento constante, exige atenção.",
            "Compactação forçada mascara comportamento do material. O grau de compactação pode estar dentro do especificado, mas o material pode não responder como esperado.",
            "Controle tecnológico deve orientar o momento da decisão, não apenas validar decisões já tomadas.",
          ]}
        />
      </Section>

      {/* BLOCO 7 — DECISÃO CORRETA */}
      <Section>
        <SectionHeader 
          label="Resolução"
          title="Decisão que deveria ter sido tomada"
        />

        <Checklist 
          items={[
            "Reduzir ritmo de lançamento até estabilização dos indicadores",
            "Ajustar umidade do material antes da compactação",
            "Reavaliar frente ativa com base na tendência dos dados",
            "Retomar avanço apenas após confirmação técnica de estabilização",
          ]}
        />

        <div className="mt-10 p-6 rounded-lg border-2 border-primary/30 bg-primary/5">
          <p className="text-center text-sm md:text-base leading-relaxed">
            <span className="text-muted-foreground">Ensaios aprovam camadas.</span>
            <br />
            <strong className="text-lg md:text-xl text-foreground">
              Controle tecnológico protege decisões.
            </strong>
          </p>
        </div>
      </Section>

      {/* BLOCO 8 — NAVEGAÇÃO ENTRE CENÁRIOS */}
      <Section className="bg-secondary/30 border-t border-border">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            Sistema em expansão
          </span>
          <h3 className="text-xl font-bold mt-2">Explore outros cenários</h3>
        </div>

        <ScenarioNav 
          currentScenario={4}
          totalScenarios={6}
        />

        <p className="text-center text-xs text-muted-foreground mt-8">
          Novos cenários são adicionados periodicamente com base em situações reais de obra.
        </p>
      </Section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <p className="text-center text-xs text-muted-foreground">
            Plataforma de análise técnica aplicada ao controle tecnológico em mineração.
            <br />
            Cenários baseados em situações simuladas para fins educacionais.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
