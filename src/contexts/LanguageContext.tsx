import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Hero
    "hero.title.line1": "Decidir sem usar o",
    "hero.title.line2": "Controle Tecnológico",
    "hero.title.highlight": "é operar no escuro",
    "hero.subtitle.part1": "Em pilhas e barragens de rejeitos, o CT não existe para \"validar depois\".",
    "hero.subtitle.part2": "Ele existe para dizer",
    "hero.subtitle.whenAdjust": "quando ajustar",
    "hero.subtitle.and": "e",
    "hero.subtitle.whenStop": "quando parar",
    "hero.subtitle.part3": "— enquanto ainda é barato e seguro.",
    "hero.scroll": "Role para explorar",

    // Context slide
    "context.title": "Contexto da Obra",
    "context.subtitle": "Cronograma apertado. Execução avançando. Ensaios sendo feitos — mas a decisão acontecendo por prazo e custo, não pela leitura técnica.",
    "context.card1.title": "Alteamento contínuo",
    "context.card1.text": "Pilha de rejeitos em fase de alteamento contínuo, com meta de avanço vertical de 2,5m por mês. Material fino (silte argiloso), sensível à variação de umidade.",
    "context.card2.title": "Condições críticas",
    "context.card2.text": "Período chuvoso com precipitação acumulada acima da média. Umidade natural do material variando entre 14% e 17%. Janela de compactação reduzida.",
    "context.card3.title": "Pressão de prazo",
    "context.card3.text": "Contrato prevê penalidades por atraso. Equipe de execução pressionada para manter ritmo. Controle Tecnológico visto como \"obstáculo\" ao invés de ferramenta.",
    "context.figure1.label": "Figura 01",
    "context.figure1.caption": "Frente de serviço durante alteamento. Onde a decisão realmente acontece.",

    // Data slide
    "data.title": "Os Dados Estavam Lá",
    "data.subtitle": "O CT coletou, tratou e entregou os resultados corretamente. O problema não foi falta de informação — foi falta de leitura decisória.",
    "data.trend.title": "Tendência de Umidade",
    "data.trend.optimal": "Umidade ótima: 14,0% | Tolerância: ±0,5%",
    "data.trend.insight": "O problema não é o valor isolado — é a curva ascendente que ninguém parou para analisar.",
    "data.stopThink.question": "Se todos os ensaios foram aprovados, por que a decisão falhou?",
    "data.stopThink.answer": "Porque aprovação de ensaio não é o mesmo que leitura de tendência. O ensaio olha para o ponto; o controle tecnológico efetivo olha para a curva. Uma sequência de valores \"dentro do limite\" pode esconder uma tendência de desvio que, se não corrigida, leva a problemas acumulativos.",

    // Decision flow slide
    "flow.title": "O Fluxo de Decisão",
    "flow.subtitle": "Em estruturas críticas, cada dado deve percorrer um caminho claro até virar ação. Quando esse fluxo é quebrado, o risco se acumula silenciosamente.",
    "flow.step1.title": "Dado",
    "flow.step1.text": "Umidade, compactação, dispersão dos resultados",
    "flow.step2.title": "Interpretação",
    "flow.step2.text": "Análise de tendência e contexto da estrutura",
    "flow.step3.title": "Decisão",
    "flow.step3.text": "Ajustar processo, parar ou prosseguir",
    "flow.step4.title": "Impacto",
    "flow.step4.text": "Custo evitado, risco controlado, prazo real",
    "flow.figure2.label": "Figura 02",
    "flow.figure2.caption": "Fluxo típico onde o CT é ignorado: dado → (arquivo) → decisão por prazo → risco assumido.",
    "flow.note": "A seta entre \"Dado\" e \"Decisão\" é cortada. O CT vira documentação retroativa, não ferramenta de gestão.",
    "flow.note.label": "Falha típica:",

    // Failure slide
    "failure.title": "Onde o Sistema Falhou",
    "failure.subtitle.part1": "O problema não foi o ensaio. Foi a ausência de um",
    "failure.subtitle.highlight": "mecanismo de decisão",
    "failure.subtitle.part2": "baseado em gatilhos. Sem esse mecanismo, o dado vira \"arquivo\" e não vira ação.",
    "failure.causes.title": "Causas Identificadas",
    "failure.causes.1": "Decisão tomada antes da leitura técnica completa",
    "failure.causes.2": "CT usado apenas para validar o que já estava executado",
    "failure.causes.3": "Tendência de umidade crescente não acionou gatilho de parada",
    "failure.causes.4": "Energia de compactação aumentada artificialmente para \"forçar\" aprovação",
    "failure.causes.5": "Ausência de critérios claros de quando reduzir ritmo",
    "failure.figure3.label": "Figura 03",
    "failure.figure3.caption": "O dado existia. A leitura decisória não.",

    // Impact slide
    "impact.title": "O Impacto Real",
    "impact.subtitle": "Quando o CT não orienta a decisão, o impacto aparece em três frentes: custo, risco e confiabilidade. Veja a evolução do problema ao longo do tempo.",
    "impact.kpi1.title": "Retrabalho / Reforço",
    "impact.kpi1.value": "+12%",
    "impact.kpi1.help": "Do orçamento original consumido em correções que poderiam ter sido evitadas com ajuste preventivo.",
    "impact.kpi2.title": "Investimento em CT",
    "impact.kpi2.value": "0,7%",
    "impact.kpi2.help": "O CT custa menos de 1% do orçamento. O erro de não usá-lo como gatilho custa 10x mais.",
    "impact.kpi3.title": "Prazo Impactado",
    "impact.kpi3.value": "+25 dias",
    "impact.kpi3.help": "Atraso acumulado devido a retrabalho, mobilização extra e revalidação de processos.",

    // Correct decision slide
    "decision.title": "A Decisão Que Deveria Ter Sido Tomada",
    "decision.subtitle": "Em obra crítica, \"seguir\" sem ler o dado é apostar às cegas. A decisão segura é simples — e difícil de aplicar sem cultura técnica.",
    "decision.principle.label": "Princípio fundamental:",
    "decision.principle.text": "CT não valida decisão — ele",
    "decision.principle.highlight": "define quando decidir",
    "decision.principle.end": ". A obra que integra o CT ao fluxo de execução reduz retrabalho, controla risco e mantém credibilidade técnica.",
    "decision.figure4.label": "Figura 04",
    "decision.figure4.caption": "Monitoramento contínuo: detectar desvios milimétricos antes que virem problemas estruturais.",
    "decision.triggers.title": "Gatilhos Recomendados",
    "decision.triggers.1": "Umidade 0,5% acima do ótimo por 2 dias → reduzir ritmo",
    "decision.triggers.2": "Dispersão de GC > 2% → reavaliar processo",
    "decision.triggers.3": "Tendência crescente em 3 leituras → parar e ajustar",

    // Footer slide
    "footer.quote": "\"Em pilhas e barragens, um controle tecnológico atuante não é opcional — é base de decisão segura e responsável.\"",
    "footer.signature": "Diego R. Jesus — Análise técnica aplicada (mineração / CT)",

    // Mini Dashboard
    "dashboard.risk.label": "Risco Operacional",
    "dashboard.risk.value": "Alto",
    "dashboard.risk.change": "sem monitoramento",
    "dashboard.cost.label": "Custo Correção",
    "dashboard.cost.value": "R$ 500k",
    "dashboard.cost.change": "retrabalho estimado",
    "dashboard.time.label": "Prazo Impacto",
    "dashboard.time.value": "30 dias",
    "dashboard.time.change": "atraso provável",
    "dashboard.reliability.label": "Confiabilidade",
    "dashboard.reliability.value": "65%",
    "dashboard.reliability.change": "abaixo do ideal",

    // Comparison Cards
    "comparison.negative.title": "Decisão Apressada",
    "comparison.negative.1": "Decisão baseada em prazo e pressão",
    "comparison.negative.2": "CT consultado apenas para validar o que já foi feito",
    "comparison.negative.3": "Tendência de desvio ignorada ou minimizada",
    "comparison.negative.4": "Correção posterior com custo elevado",
    "comparison.negative.5": "Risco acumulativo não quantificado",
    "comparison.positive.title": "Decisão Bem Analisada",
    "comparison.positive.1": "Decisão orientada por gatilhos técnicos",
    "comparison.positive.2": "CT integrado ao fluxo de execução",
    "comparison.positive.3": "Tendência analisada em tempo real",
    "comparison.positive.4": "Ajuste preventivo com custo controlado",
    "comparison.positive.5": "Risco monitorado e documentado",

    // Checklist
    "checklist.item1.title": "Paralisar ou reduzir ritmo",
    "checklist.item1.description": "Ao primeiro sinal de tendência de desvio, diminuir a velocidade de execução para permitir análise adequada.",
    "checklist.item2.title": "Ajustar processo imediatamente",
    "checklist.item2.description": "Corrigir umidade, energia de compactação ou espessura de camada antes que o desvio se acumule.",
    "checklist.item3.title": "Reavaliar condições de frente",
    "checklist.item3.description": "Verificar se as condições climáticas, de material e de equipamento são compatíveis com o processo.",
    "checklist.item4.title": "Retomar com monitoramento reforçado",
    "checklist.item4.description": "Só prosseguir quando CT confirmar estabilização, com frequência de ensaio aumentada.",

    // StopAndThink
    "stopThink.label": "Pare e Pense",
    "stopThink.showAnswer": "Ver resposta",
    "stopThink.hideAnswer": "Ocultar resposta",

    // Timeline
    "timeline.day1.date": "Dia 1",
    "timeline.day1.title": "Primeiros sinais ignorados",
    "timeline.day1.text": "Umidade medida em 14,5%, ligeiramente acima do ótimo (14,0%). Ensaio aprova, mas a tendência não é avaliada. Obra segue ritmo normal.",
    "timeline.day7.date": "Dia 7",
    "timeline.day7.title": "Tendência se confirma",
    "timeline.day7.text": "Umidade acumula em 15,2% na média. Dispersão aumenta. Compactação ainda dentro do limite, mas com margem reduzida. Nenhum gatilho acionado.",
    "timeline.day30.date": "Dia 30",
    "timeline.day30.title": "Problema materializado",
    "timeline.day30.text": "Camadas apresentam comportamento irregular. Retrabalho necessário em 3 trechos. Custo de correção estimado em R$ 480k. Prazo impactado em 25 dias úteis.",
  },
  en: {
    // Hero
    "hero.title.line1": "Deciding without using",
    "hero.title.line2": "Technological Control",
    "hero.title.highlight": "is operating in the dark",
    "hero.subtitle.part1": "In tailings piles and dams, TC doesn't exist to \"validate later\".",
    "hero.subtitle.part2": "It exists to tell you",
    "hero.subtitle.whenAdjust": "when to adjust",
    "hero.subtitle.and": "and",
    "hero.subtitle.whenStop": "when to stop",
    "hero.subtitle.part3": "— while it's still cheap and safe.",
    "hero.scroll": "Scroll to explore",

    // Context slide
    "context.title": "Project Context",
    "context.subtitle": "Tight schedule. Execution advancing. Tests being done — but decisions made by deadline and cost, not by technical reading.",
    "context.card1.title": "Continuous raising",
    "context.card1.text": "Tailings pile in continuous raising phase, with a target of 2.5m vertical advance per month. Fine material (clayey silt), sensitive to moisture variation.",
    "context.card2.title": "Critical conditions",
    "context.card2.text": "Rainy season with above-average accumulated precipitation. Natural material moisture varying between 14% and 17%. Reduced compaction window.",
    "context.card3.title": "Schedule pressure",
    "context.card3.text": "Contract provides for delay penalties. Execution team pressured to maintain pace. Technological Control seen as an \"obstacle\" rather than a tool.",
    "context.figure1.label": "Figure 01",
    "context.figure1.caption": "Work front during raising. Where the decision actually happens.",

    // Data slide
    "data.title": "The Data Was There",
    "data.subtitle": "TC collected, processed, and delivered the results correctly. The problem wasn't lack of information — it was lack of decision-oriented reading.",
    "data.trend.title": "Moisture Trend",
    "data.trend.optimal": "Optimal moisture: 14.0% | Tolerance: ±0.5%",
    "data.trend.insight": "The problem isn't the isolated value — it's the ascending curve that no one stopped to analyze.",
    "data.stopThink.question": "If all tests were approved, why did the decision fail?",
    "data.stopThink.answer": "Because test approval is not the same as trend reading. The test looks at the point; effective technological control looks at the curve. A sequence of values \"within limits\" can hide a deviation trend that, if not corrected, leads to cumulative problems.",

    // Decision flow slide
    "flow.title": "The Decision Flow",
    "flow.subtitle": "In critical structures, each data point must follow a clear path to become action. When this flow is broken, risk accumulates silently.",
    "flow.step1.title": "Data",
    "flow.step1.text": "Moisture, compaction, result dispersion",
    "flow.step2.title": "Interpretation",
    "flow.step2.text": "Trend analysis and structural context",
    "flow.step3.title": "Decision",
    "flow.step3.text": "Adjust process, stop, or proceed",
    "flow.step4.title": "Impact",
    "flow.step4.text": "Avoided cost, controlled risk, real deadline",
    "flow.figure2.label": "Figure 02",
    "flow.figure2.caption": "Typical flow where TC is ignored: data → (archive) → deadline-based decision → assumed risk.",
    "flow.note": "The arrow between \"Data\" and \"Decision\" is cut. TC becomes retroactive documentation, not a management tool.",
    "flow.note.label": "Typical failure:",

    // Failure slide
    "failure.title": "Where the System Failed",
    "failure.subtitle.part1": "The problem wasn't the test. It was the absence of a",
    "failure.subtitle.highlight": "decision mechanism",
    "failure.subtitle.part2": "based on triggers. Without this mechanism, data becomes \"archive\" and doesn't become action.",
    "failure.causes.title": "Identified Causes",
    "failure.causes.1": "Decision made before complete technical reading",
    "failure.causes.2": "TC used only to validate what was already executed",
    "failure.causes.3": "Rising moisture trend didn't trigger a stop",
    "failure.causes.4": "Compaction energy artificially increased to \"force\" approval",
    "failure.causes.5": "Lack of clear criteria for when to reduce pace",
    "failure.figure3.label": "Figure 03",
    "failure.figure3.caption": "The data existed. The decision-oriented reading didn't.",

    // Impact slide
    "impact.title": "The Real Impact",
    "impact.subtitle": "When TC doesn't guide the decision, impact appears on three fronts: cost, risk, and reliability. See the problem's evolution over time.",
    "impact.kpi1.title": "Rework / Reinforcement",
    "impact.kpi1.value": "+12%",
    "impact.kpi1.help": "Of original budget consumed in corrections that could have been avoided with preventive adjustment.",
    "impact.kpi2.title": "TC Investment",
    "impact.kpi2.value": "0.7%",
    "impact.kpi2.help": "TC costs less than 1% of the budget. The mistake of not using it as a trigger costs 10x more.",
    "impact.kpi3.title": "Impacted Deadline",
    "impact.kpi3.value": "+25 days",
    "impact.kpi3.help": "Accumulated delay due to rework, extra mobilization, and process revalidation.",

    // Correct decision slide
    "decision.title": "The Decision That Should Have Been Made",
    "decision.subtitle": "In critical work, \"proceeding\" without reading the data is betting blindly. The safe decision is simple — and hard to apply without technical culture.",
    "decision.principle.label": "Fundamental principle:",
    "decision.principle.text": "TC doesn't validate decisions — it",
    "decision.principle.highlight": "defines when to decide",
    "decision.principle.end": ". The project that integrates TC into the execution flow reduces rework, controls risk, and maintains technical credibility.",
    "decision.figure4.label": "Figure 04",
    "decision.figure4.caption": "Continuous monitoring: detecting millimetric deviations before they become structural problems.",
    "decision.triggers.title": "Recommended Triggers",
    "decision.triggers.1": "Moisture 0.5% above optimal for 2 days → reduce pace",
    "decision.triggers.2": "GC dispersion > 2% → reassess process",
    "decision.triggers.3": "Rising trend in 3 readings → stop and adjust",

    // Footer slide
    "footer.quote": "\"In tailings piles and dams, an active technological control is not optional — it's the foundation for safe and responsible decision-making.\"",
    "footer.signature": "Diego R. Jesus — Applied technical analysis (mining / TC)",

    // Mini Dashboard
    "dashboard.risk.label": "Operational Risk",
    "dashboard.risk.value": "High",
    "dashboard.risk.change": "no monitoring",
    "dashboard.cost.label": "Correction Cost",
    "dashboard.cost.value": "$100k",
    "dashboard.cost.change": "estimated rework",
    "dashboard.time.label": "Time Impact",
    "dashboard.time.value": "30 days",
    "dashboard.time.change": "likely delay",
    "dashboard.reliability.label": "Reliability",
    "dashboard.reliability.value": "65%",
    "dashboard.reliability.change": "below ideal",

    // Comparison Cards
    "comparison.negative.title": "Rushed Decision",
    "comparison.negative.1": "Decision based on deadline and pressure",
    "comparison.negative.2": "TC consulted only to validate what was already done",
    "comparison.negative.3": "Deviation trend ignored or minimized",
    "comparison.negative.4": "Late correction with high cost",
    "comparison.negative.5": "Cumulative risk not quantified",
    "comparison.positive.title": "Well-Analyzed Decision",
    "comparison.positive.1": "Decision guided by technical triggers",
    "comparison.positive.2": "TC integrated into execution flow",
    "comparison.positive.3": "Trend analyzed in real time",
    "comparison.positive.4": "Preventive adjustment with controlled cost",
    "comparison.positive.5": "Risk monitored and documented",

    // Checklist
    "checklist.item1.title": "Stop or reduce pace",
    "checklist.item1.description": "At the first sign of deviation trend, slow down execution to allow proper analysis.",
    "checklist.item2.title": "Adjust process immediately",
    "checklist.item2.description": "Correct moisture, compaction energy, or layer thickness before deviation accumulates.",
    "checklist.item3.title": "Reassess front conditions",
    "checklist.item3.description": "Verify if climate, material, and equipment conditions are compatible with the process.",
    "checklist.item4.title": "Resume with reinforced monitoring",
    "checklist.item4.description": "Only proceed when TC confirms stabilization, with increased test frequency.",

    // StopAndThink
    "stopThink.label": "Stop and Think",
    "stopThink.showAnswer": "Show answer",
    "stopThink.hideAnswer": "Hide answer",

    // Timeline
    "timeline.day1.date": "Day 1",
    "timeline.day1.title": "First signs ignored",
    "timeline.day1.text": "Moisture measured at 14.5%, slightly above optimal (14.0%). Test approves, but trend is not evaluated. Work continues at normal pace.",
    "timeline.day7.date": "Day 7",
    "timeline.day7.title": "Trend confirmed",
    "timeline.day7.text": "Moisture accumulates at 15.2% average. Dispersion increases. Compaction still within limits, but with reduced margin. No trigger activated.",
    "timeline.day30.date": "Day 30",
    "timeline.day30.title": "Problem materialized",
    "timeline.day30.text": "Layers show irregular behavior. Rework required in 3 sections. Estimated correction cost of $96k. Schedule impacted by 25 business days.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
