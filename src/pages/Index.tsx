import heroImage from "@/assets/hero-tailings-dam.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Droplets,
  Gauge,
  Timer,
  ClipboardList,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/**
 * Página principal como um estudo de caso técnico.
 */
const Index = () => {
  const containerRef = useScrollReveal();
  // Dados de exemplo: ajuste conforme seu caso real.
  const targetMoisture = 14.0;
  const readings = [
    { day: "D1", value: 13.8 },
    { day: "D2", value: 14.1 },
    { day: "D3", value: 14.5 },
    { day: "D4", value: 14.9 },
  ];
  const delta = (
    readings[readings.length - 1].value - readings[0].value
  ).toFixed(1);

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* HERO */}
      <header className="relative">
        <div className="relative h-[46vh] md:h-[56vh] w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Estrutura de rejeito / pilha/barragem"
            className="h-full w-full object-cover fade-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/55 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-6 -mt-16 md:-mt-20 relative">
          <Card className="floating-card">
            <CardHeader className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Estudo de Caso</Badge>
                <Badge variant="outline">Controle Tecnológico</Badge>
                <Badge variant="outline">Rejeitos / Material fino</Badge>
              </div>
              <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
                Quando <span className="text-gradient">“passar no ensaio”</span> não é suficiente
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Um caso simples, mas comum: os valores finais aprovam — a tendência derruba a decisão.
                (Formato de aula: cenário → dados → leitura → decisão.)
              </p>
            </CardHeader>
          </Card>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 md:py-14 space-y-10">
        {/* Objetivo */}
        <section className="reveal">
          <div className="flex items-center gap-2 mb-3">
            <ClipboardList className="h-5 w-5" />
            <h2 className="text-xl md:text-2xl font-semibold">Objetivo desta aula</h2>
          </div>
          <Card className="floating-card">
            <CardContent className="pt-6 space-y-3 text-sm md:text-base">
              <p>
                Ensinar a ler controle tecnológico como <b>sistema de decisão</b>, e não como “carimbo de aprovação”.
              </p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Separar: valor pontual vs. tendência</li>
                <li>Entender risco em estruturas sensíveis à umidade</li>
                <li>Definir regra prática para travar/ajustar avanço</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contexto */}
        <section className="reveal reveal-delay-1">
          <div className="flex items-center gap-2 mb-3">
            <Timer className="h-5 w-5" />
            <h2 className="text-xl md:text-2xl font-semibold">Cenário (campo)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="floating-card">
              <CardHeader>
                <CardTitle className="text-base">Condições</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Alteamento / avanço contínuo</p>
                <p>• Material fino, sensível à variação de umidade</p>
                <p>• Pressão por cronograma e produção</p>
              </CardContent>
            </Card>
            <Card className="floating-card">
              <CardHeader>
                <CardTitle className="text-base">Ponto de atenção</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• “Aprovado” não significa “estável”</p>
                <p>• Umidade crescendo dia a dia costuma anteceder problemas</p>
                <p>• A decisão correta depende da leitura do conjunto</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dados */}
        <section className="reveal reveal-delay-2">
          <div className="flex items-center gap-2 mb-3">
            <Gauge className="h-5 w-5" />
            <h2 className="text-xl md:text-2xl font-semibold">Dados (o que foi medido)</h2>
          </div>
          <Card className="floating-card">
            <CardContent className="pt-6 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary">Umidade ótima (projeto): {targetMoisture.toFixed(1)}%</Badge>
                <Badge variant="outline">Tendência (D1→D4): +{delta}%</Badge>
              </div>
              <Separator />
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dia</TableHead>
                    <TableHead>Umidade medida</TableHead>
                    <TableHead>Leitura rápida</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {readings.map((r) => {
                    const diff = r.value - targetMoisture;
                    const status =
                      Math.abs(diff) <= 0.2
                        ? "Dentro (ok)"
                        : diff > 0
                        ? "Acima (atenção)"
                        : "Abaixo (atenção)";
                    return (
                      <TableRow key={r.day}>
                        <TableCell className="font-medium">{r.day}</TableCell>
                        <TableCell>{r.value.toFixed(1)}%</TableCell>
                        <TableCell className="text-muted-foreground">{status}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <div className="text-sm text-muted-foreground flex items-start gap-2">
                <Droplets className="h-4 w-4 mt-0.5" />
                <p>
                  <b>Nota:</b> o “valor do dia” pode até estar próximo do alvo, mas a <b>subida contínua</b> costuma ser ignorada.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interpretação */}
        <section className="reveal reveal-delay-3">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5" />
            <h2 className="text-xl md:text-2xl font-semibold">Interpretação (onde a decisão erra)</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="floating-card">
              <CardHeader>
                <CardTitle className="text-base">Erro clássico</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                “Passou no ensaio” vira justificativa pra avançar — sem olhar tendência.
              </CardContent>
            </Card>
            <Card className="floating-card">
              <CardHeader>
                <CardTitle className="text-base">O que foi ignorado</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Crescimento de umidade ao longo dos dias (13,8 → 14,9).
              </CardContent>
            </Card>
            <Card className="floating-card">
              <CardHeader>
                <CardTitle className="text-base">Por que é perigoso</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Em material fino, umidade alta muda comportamento e pode “mascarar” risco mesmo com compactação ok.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Decisão recomendada */}
        <section className="reveal reveal-delay-4">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="h-5 w-5" />
            <h2 className="text-xl md:text-2xl font-semibold">Decisão técnica recomendada</h2>
          </div>
          <Card className="floating-card">
            <CardContent className="pt-6 space-y-3 text-sm md:text-base">
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Reduzir ritmo de lançamento / espalhamento</li>
                <li>Ajustar umidade (condicionamento do material)</li>
                <li>Reavaliar frente ativa e janela de execução</li>
                <li>Avançar somente com tendência controlada</li>
              </ul>
              <Separator />
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <AlertTriangle className="h-4 w-4 mt-0.5" />
                <p>
                  Regra prática: <b>tendência piorando</b> + <b>estrutura sensível</b> = a decisão deve travar antes do “evento”.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Checklist */}
        <section className="reveal reveal-delay-5">
          <div className="flex items-center gap-2 mb-3">
            <ClipboardList className="h-5 w-5" />
            <h2 className="text-xl md:text-2xl font-semibold">Checklist (pra aplicar em qualquer obra)</h2>
          </div>
          <Card className="floating-card">
            <CardContent className="pt-6 text-sm text-muted-foreground space-y-2">
              <p>✅ Tenho valor alvo e tolerância definidos?</p>
              <p>✅ Olhei tendência (3–5 dias), não só o último número?</p>
              <p>✅ O material é sensível à umidade? (fino / rejeito / argiloso)</p>
              <p>✅ A decisão de avanço depende de tendência + contexto?</p>
              <p>✅ Tenho plano de ação quando tendência piora?</p>
            </CardContent>
          </Card>
        </section>

        {/* Takeaway */}
        <section className="reveal">
          <Card className="floating-card">
            <CardContent className="pt-6">
              <p className="text-base md:text-lg">
                Ensaios aprovam camadas. <b>Controle tecnológico protege decisões.</b>
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
