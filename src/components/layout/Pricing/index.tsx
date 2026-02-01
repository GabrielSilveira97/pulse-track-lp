import PricingCard from "@/components/common/PricingCard"


export const prices = [
    {
      id: "essencial",
      title: "Essencial",
      description: "Controle seus hábitos e ganhe clareza no dia a dia",
      price: "R$ 24,90",
      billing: "monthly",
      highlighted: false,
      features: [
        "Monitoramento de sono, foco e atividade física",
        "Check-in diário de hábitos",
        "Relatórios semanais de produtividade",
        "Recomendações básicas de bem-estar",
        "Histórico de dados de 14 dias",
      ],
      limits: {
        routines: 5,
        devices: 1,
      },
    },
    {
      id: "equilibrio",
      title: "Equilíbrio",
      description: "Mais foco, menos estresse e decisões guiadas por dados",
      price: "R$ 49,90",
      billing: "monthly",
      highlighted: true,
      features: [
        "Tudo do plano Essencial",
        "Análises inteligentes de padrões de hábitos",
        "Recomendações personalizadas por IA",
        "Alertas de pausa, foco e descanso",
        "Integração com wearables (Apple Health / Google Fit)",
        "Histórico de dados de 90 dias",
      ],
      limits: {
        routines: "unlimited",
        devices: 3,
      },
    },
    {
      id: "performance",
      title: "Performance",
      description: "Produtividade sustentável no mais alto nível",
      price: "R$ 89,90",
      billing: "monthly",
      highlighted: false,
      features: [
        "Tudo do plano Equilíbrio",
        "Plano de produtividade adaptativo",
        "Análise de burnout e carga cognitiva",
        "Relatórios mensais avançados",
        "Suporte prioritário",
        "Histórico completo de dados",
      ],
      limits: {
        routines: "unlimited",
        devices: "unlimited",
      },
    },
  ];
  


const PricingSectionComponent = () => {

    return (
        <section className="flex flex-col items-center justify-center gap-2 px-4 md:px-36 py-10">
            <h2 className="text-3xl md:text-5xl font-semibold">Planos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
                {prices.map((plan, index) => (
                    <PricingCard key={index} title={plan.title} price={plan.price} features={plan.features} />
                ))}
            </div>
        </section>
    )
}


export default PricingSectionComponent