const timelineItems = [
  {
    date: "Dia 1",
    title: "Primeiros sinais ignorados",
    text: "Umidade medida em 14,5%, ligeiramente acima do ótimo (14,0%). Ensaio aprova, mas a tendência não é avaliada. Obra segue ritmo normal.",
  },
  {
    date: "Dia 7",
    title: "Tendência se confirma",
    text: "Umidade acumula em 15,2% na média. Dispersão aumenta. Compactação ainda dentro do limite, mas com margem reduzida. Nenhum gatilho acionado.",
  },
  {
    date: "Dia 30",
    title: "Problema materializado",
    text: "Camadas apresentam comportamento irregular. Retrabalho necessário em 3 trechos. Custo de correção estimado em R$ 480k. Prazo impactado em 25 dias úteis.",
  },
];

export function CaseTimeline() {
  return (
    <div className="timeline">
      {timelineItems.map((item, i) => (
        <div key={i} className="timeline-item reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
          <div className={`timeline-dot ${i === timelineItems.length - 1 ? "" : "pulse"}`} />
          <div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-text">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
