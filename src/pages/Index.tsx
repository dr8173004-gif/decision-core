import heroImage from "@/assets/hero-tailings-dam.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Gauge,
  Droplets,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  AlertTriangle,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/**
 * A página principal agora é um dashboard imersivo para análise de caso.
 * Inclui: hero com imagem, resumo, métricas-chave, gráfico de barras,
 * diagnóstico, recomendações e próximos passos.
 */
const Index = () => {
  const containerRef = useScrollReveal();

  // Dados de exemplo (substitua pelos seus dados reais)
  const targetMoisture = 14.0;
  const readings = [
    { day: "D1", value: 13.8 },
    { day: "D2", value: 14.1 },
    { day: "D3", value: 14.5 },
    { day: "D4", value: 14.9 },
  ];

  const initial = readings[0].value;
  const final = readings[readings.length - 1].value;
  const delta = final - initial;
  const trendPct = ((delta / initial) * 100).toFixed(1);

  // Determina tamanho máximo das barras para que sejam proporcionais
  const maxValue = Math.max(
    targetMoisture * 1.3,
    ...readings.map((r) => r.value),
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen text-foreground bg-background"
    >
      {/* HERO com sobreposição escura */}
      <header className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Vista aérea da barragem ou área de rejeitos"
          className="h-full w-full object-cover"
        />
        <div className="fade-bottom" />
        <div className="absolute inset-0 flex items-end p-6 md:p-10">
          <div className="max-w-3xl space-y-4">
            <Badge variant="secondary" className="rounded-md px-3 py-1">
              Análise de Caso
            </Badge>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Quando <span className="text-gradient">“passar no ensaio”</span> não basta
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-prose">
              Um estudo sobre o papel da tendência de umidade em avanços
              de alteamento: mesmo quando os valores atendem à meta, o comportamento da
              curva pode indicar risco.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 md:px-10 py-10 space-y-14">
        {/* Resumo do Caso */}
        <section className="reveal">
          <Card className="floating-card">
            <CardHeader>
              <CardTitle className="text-lg md:text-2xl">
                Resumo do Caso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm md:text-base text-muted-foreground">
              <p>
                Este relatório analisa um ciclo de alteamento em material
                fino, onde a umidade controlada é crucial. As leituras
                diárias ficaram próximas da meta de {targetMoisture.toFixed(1)}%, porém a
                sequência revelou uma tendência crescente.
              </p>
              <p>
                O objetivo é interpretar esses dados de forma sistemática, entender o que a
                tendência significa em termos de risco e propor ações
                práticas antes que surjam problemas de instabilidade.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Métricas principais */}
        <section className="reveal">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {/* Meta */}
            <Card className="floating-card p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Meta de umidade</span>
                <Gauge className="h-4 w-4 text-primary" />
              </div>
              <div className="text-2xl font-semibold">
                {targetMoisture.toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">Valor ótimo (projeto)</p>
            </Card>

            {/* Umidade inicial */}
            <Card className="floating-card p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Umidade inicial</span>
                <Droplets className="h-4 w-4 text-primary" />
              </div>
              <div className="text-2xl font-semibold">
                {initial.toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">Medida em {readings[0].day}</p>
            </Card>

            {/* Umidade final */}
            <Card className="floating-card p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Umidade final</span>
                <Droplets className="h-4 w-4 text-primary" />
              </div>
              <div className="text-2xl font-semibold">
                {final.toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">
                Medida em {readings[readings.length - 1].day}
              </p>
            </Card>

            {/* Tendência */}
            <Card className="floating-card p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tendência</span>
                {delta >= 0 ? (
                  <ArrowUpRight className="h-4 w-4 text-destructive" />
                ) : (
                  <ArrowDownLeft className="h-4 w-4 text-secondary" />
                )}
              </div>
              <div
                className={`text-2xl font-semibold ${
                  delta >= 0 ? "text-destructive" : "text-secondary"
                }`}
              >
                {(delta >= 0 ? "+" : "") + delta.toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">
                Variação {readings[0].day}→{readings[readings.length - 1].day} ({trendPct}%)
              </p>
            </Card>
          </div>
        </section>

        {/* Indicadores gráficos */}
        <section className="reveal">
          <Card className="floating-card">
            <CardHeader>
              <CardTitle className="text-lg md:text-2xl">
                Indicadores de Umidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {readings.map((reading) => {
                const diff = reading.value - targetMoisture;
                let barColor;
                if (Math.abs(diff) <= 0.2) {
                  barColor = "bg-primary";
                } else if (diff > 0) {
                  barColor = "bg-destructive";
                } else {
                  barColor = "bg-secondary";
                }
                const widthPercent = (reading.value / maxValue) * 100;
                return (
                  <div key={reading.day} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{reading.day}</span>
                      <span className="text-sm">{reading.value.toFixed(1)}%</span>
                    </div>
                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        style={{ width: `${widthPercent}%` }}
                        className={`h-full ${barColor} rounded-full transition-all`}
                      />
                    </div>
                  </div>
                );
              })}
              <p className="text-xs text-muted-foreground flex items-start gap-1">
                <TrendingUp className="h-4 w-4" />
                Tendência crescente indica risco potencial mesmo dentro da tolerância.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Diagnóstico */}
        <section className="reveal">
          <Card className="floating-card">
            <CardHeader>
              <CardTitle className="text-lg md:text-2xl">
                Diagnóstico Técnico
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm md:text-base text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  A umidade subiu de {initial.toFixed(1)}% para {final.toFixed(1)}%
                  ({(delta >= 0 ? "+" : "") + delta.toFixed(1)}% ou {trendPct}%).
                </li>
                <li>
                  Mesmo com leituras próximas da meta de {targetMoisture.toFixed(1)}%, a
                  tendência ascendente sugere acúmulo de água no sistema.
                </li>
                <li>
                  Materiais finos apresentam redução de resistência e aumento de
                  deformabilidade quando a umidade se aproxima ou excede a ótima.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Recomendações */}
        <section className="reveal">
          <Card className="floating-card">
            <CardHeader>
              <CardTitle className="text-lg md:text-2xl">
                Recomendações e Mitigação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm md:text-base text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Ajustar o condicionamento do material: promover secagem ou
                  adicionar umidade controlada conforme necessário.
                </li>
                <li>
                  Reduzir o ritmo de lançamento e compactação enquanto a tendência
                  se mantiver crescente.
                </li>
                <li>
                  Revisar drenagem e fontes de água (chuva, infiltração) que
                  possam estar elevando a umidade dia a dia.
                </li>
                <li>
                  Definir um limiar crítico (ex.: +0,5% acima da meta) que
                  desencadeie parada imediata para avaliação.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Próximos Passos */}
        <section className="reveal">
          <Card className="floating-card">
            <CardHeader>
              <CardTitle className="text-lg md:text-2xl">Próximos Passos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm md:text-base text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Replicar esta análise semanalmente, registrando tendências e
                  comparando com metas atualizadas.
                </li>
                <li>
                  Criar dashboards para acompanhamento em tempo real,
                  facilitando a tomada de decisão pela equipe no campo.
                </li>
                <li>
                  Capacitar operadores e engenheiros para interpretar não apenas
                  o valor pontual, mas a variação contínua.
                </li>
                <li>
                  Documentar causas e correções quando tendências desfavoráveis
                  forem observadas, alimentando um banco de lições aprendidas.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
