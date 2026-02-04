import DialogCard from "@/components/common/DialogCard";
import { ArrowRight } from "lucide-react";


const dialogs = [
  {
    title: "Entenda seus hábitos",
    dialog: {
      title: "Dados claros, sem complicação",
      description:
        "O PulseTrack analisa dados de sono, foco, atividade física e pausas para revelar padrões do seu comportamento diário. Com essas informações organizadas de forma clara, você entende como cada hábito influencia diretamente sua produtividade, energia e bem-estar ao longo do dia."
    },
    img: "/dialog-1.png"
  },
  {
    title: "Receba recomendações inteligentes",
    dialog: {
      title: "Sugestões que fazem sentido para você",
      description:
        "A partir do seu comportamento real, o PulseTrack gera recomendações personalizadas e fáceis de aplicar na rotina. As sugestões são baseadas em dados concretos e ajudam você a melhorar o desempenho, reduzir o cansaço mental e manter o equilíbrio entre produtividade e saúde."
    },
    img: "/dialog-2.png"
  },
  {
    title: "Evolua com consistência",
    dialog: {
      title: "Pequenos ajustes, grandes resultados",
      description:
        "Com o acompanhamento contínuo da sua evolução, o PulseTrack permite visualizar seu progresso ao longo do tempo. Pequenos ajustes diários se transformam em hábitos consistentes, ajudando você a construir uma rotina mais produtiva, saudável e sustentável sem mudanças bruscas."
    },
    img: "/dialog-3.png"
  }
];




const ResourcesSection = () => {
    return(
        <section className="flex flex-col justify-center gap-14 items-center px-4 md:px-36 py-10 md:py-16">
            <div className="grid md:grid-cols-2 gap-7    items-center">
                <h1 className="text-4xl md:text-5xl font-semibold text-center md:text-start">
                    Transforme dados em hábitos
                </h1>
                <h2 className="text-sm font-semibold text-muted-foreground">
O PulseTrack analisa sono, foco, atividade física e pausas para revelar padrões do seu dia a dia. Com insights claros e recomendações práticas, você entende o que impacta sua produtividade e bem-estar, ajusta sua rotina com mais consciência e constrói hábitos mais saudáveis ao longo do tempo.<a className="text-white cursor-pointer flex items-end pt-1 gap-1 hover:gap-2 transition-all">Faça a mudança <ArrowRight className="size-4"/></a></h2>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                {dialogs.map((dialog, index) => {
                    return (
                        <DialogCard key={index} title={dialog.title} img={dialog.img} title2={dialog.dialog.title} description={dialog.dialog.description}/>
                    )
                })}
            </div>
        </section>
    )
}


export default ResourcesSection