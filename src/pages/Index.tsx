import { AlertTriangle, ArrowDown, TrendingUp, X, Check, Droplets, Gauge, Timer, DollarSign, AlertCircle } from "lucide-react";
import heroImage from "@/assets/hero-tailings-dam.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const containerRef = useScrollReveal();

  return (
    <main ref={containerRef} className="min-h-screen bg-background">
      {/* ATO 1 — IMERSÃO */}
      <section className="relative min-h-screen flex flex-col justify-end">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Barragem de rejeitos em operação" 
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0" 
            style={{ background: "var(--gradient-hero)" }}
          />
        </div>

        {/* Minimal content */}
        <div className="relative z-10 px-6 pb-24 md:pb-32 max-w-2xl">
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-foreground/90 mb-3">
            <span className="text-foreground font-medium">Controle tecnológico protege decisões.</span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-light">
            O que acontece quando ele não é usado como sistema?
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-pulse-slow">
          <ArrowDown className="w-5 h-5" />
        </div>
      </section>

      {/* ATO 2 — CONTEXTO */}
      <section className="scene bg-background">
        <div className="max-w-lg mx-auto space-y-4">
          <div className="reveal">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Contexto</span>
          </div>
          
          <div className="floating-card reveal reveal-delay-1">
            <h2 className="text-lg font-semibold mb-6 text-foreground">Contexto da obra</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded bg-secondary flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Alteamento contínuo</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Pilha/barragem de rejeitos</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded bg-secondary flex items-center justify-center shrink-0">
                  <Droplets className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Material fino</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Sensível à variação de umidade</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded bg-secondary flex items-center justify-center shrink-0">
                  <Timer className="w-4 h-4 text-warning" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Pressão por avanço</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Cronograma apertado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATO 3 — DADOS */}
      <section className="scene bg-secondary/20">
        <div className="max-w-lg mx-auto space-y-4">
          <div className="reveal">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Dados de campo</span>
          </div>

          {/* Umidade ótima */}
          <div className="data-card reveal reveal-delay-1">
            <div className="flex items-center gap-3 mb-1">
              <Gauge className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Umidade ótima de projeto</span>
            </div>
            <p className="text-2xl font-semibold text-foreground">14,0%</p>
          </div>

          {/* Timeline de umidade */}
          <div className="data-card reveal reveal-delay-2">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Umidade medida</span>
            </div>
            
            <div className="flex items-center justify-between gap-2">
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">13,8%</p>
                <p className="text-[10px] text-muted-foreground mt-1">D1</p>
              </div>
              <div className="timeline-connector" />
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">14,1%</p>
                <p className="text-[10px] text-muted-foreground mt-1">D2</p>
              </div>
              <div className="timeline-connector" />
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">14,5%</p>
                <p className="text-[10px] text-muted-foreground mt-1">D3</p>
              </div>
              <div className="timeline-connector" />
              <div className="text-center">
                <p className="text-sm font-semibold text-warning">14,9%</p>
                <p className="text-[10px] text-muted-foreground mt-1">D4</p>
              </div>
            </div>
          </div>

          {/* Compactação */}
          <div className="data-card reveal reveal-delay-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">Grau de compactação</span>
                </div>
                <p className="text-xl font-semibold text-foreground">≥ 95%</p>
              </div>
              <div className="px-3 py-1.5 bg-accent/20 rounded text-xs font-medium text-accent">
                Aprovado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATO 4 — QUEBRA */}
      <section className="scene bg-background">
        <div className="max-w-lg mx-auto">
          <div className="alert-card reveal text-center py-10">
            <AlertTriangle className="w-10 h-10 text-warning mx-auto mb-6" />
            <p className="text-lg font-medium text-foreground mb-2">
              Todos os ensaios passaram.
            </p>
            <p className="text-lg text-muted-foreground">
              Mesmo assim, a decisão falhou.
            </p>
          </div>

          <div className="mt-8 reveal reveal-delay-1">
            <div className="flex items-center gap-3 justify-center text-sm text-warning">
              <AlertCircle className="w-4 h-4" />
              <span>A tendência foi ignorada, não o valor final.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ATO 5 — ANÁLISE DE CAUSA */}
      <section className="scene bg-secondary/20">
        <div className="max-w-lg mx-auto space-y-4">
          <div className="reveal">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Análise de causa</span>
          </div>

          <div className="cause-card reveal reveal-delay-1">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Decisão tomada antes da leitura técnica</p>
                <p className="text-xs text-muted-foreground mt-1">Avanço autorizado sem análise de tendência</p>
              </div>
            </div>
          </div>

          <div className="cause-card reveal reveal-delay-2">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">CT usado como validação</p>
                <p className="text-xs text-muted-foreground mt-1">Controle tecnológico apenas confirmou decisões já tomadas</p>
              </div>
            </div>
          </div>

          <div className="cause-card reveal reveal-delay-3">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Tendência ignorada</p>
                <p className="text-xs text-muted-foreground mt-1">Crescimento de 13,8% → 14,9% desconsiderado</p>
              </div>
            </div>
          </div>

          <div className="cause-card reveal reveal-delay-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Compactação mascarou comportamento</p>
                <p className="text-xs text-muted-foreground mt-1">Grau aprovado não significa material estável</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATO 6 — IMPACTO */}
      <section className="scene bg-background">
        <div className="max-w-lg mx-auto space-y-6">
          <div className="reveal">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Impacto</span>
          </div>

          <div className="floating-card reveal reveal-delay-1">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-4 h-4 text-destructive" />
                  <span className="text-sm text-muted-foreground">Correção tardia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="w-full h-full bg-destructive rounded-full" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-destructive" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Ajuste preventivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="w-6 h-full bg-accent rounded-full" />
                  </div>
                  <span className="text-xs text-accent font-medium">mínimo</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center reveal reveal-delay-2 px-4">
            Em estruturas de rejeito, o impacto raramente aparece na hora.
            <br />
            <span className="text-foreground font-medium">Ele cresce em silêncio.</span>
          </p>
        </div>
      </section>

      {/* ATO 7 — DECISÃO CORRETA */}
      <section className="scene bg-secondary/20">
        <div className="max-w-lg mx-auto space-y-4">
          <div className="reveal">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Decisão correta</span>
          </div>

          <div className="decision-card reveal reveal-delay-1">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-accent" />
              </div>
              <span className="text-sm text-foreground">Reduzir ritmo de lançamento</span>
            </div>
          </div>

          <div className="decision-card reveal reveal-delay-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-accent" />
              </div>
              <span className="text-sm text-foreground">Ajustar umidade do material</span>
            </div>
          </div>

          <div className="decision-card reveal reveal-delay-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-accent" />
              </div>
              <span className="text-sm text-foreground">Reavaliar frente ativa</span>
            </div>
          </div>

          <div className="decision-card reveal reveal-delay-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-accent" />
              </div>
              <span className="text-sm text-foreground">Avançar somente com estabilidade</span>
            </div>
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="scene bg-background min-h-[60vh]">
        <div className="max-w-lg mx-auto text-center reveal">
          <p className="text-base text-muted-foreground mb-2">
            Ensaios aprovam camadas.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            Controle tecnológico protege decisões.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;