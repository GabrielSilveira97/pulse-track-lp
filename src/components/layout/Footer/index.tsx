const FooterSectionComponent = () => {
    return (
        <footer className="grid grid-cols-3 md:grid-cols-5 px-4 md:px-36 py-10 border-t-[0.5px] border-gray-700">
            <h1>logo</h1>
            <ul className="flex flex-col gap-2 text-muted-foreground text-sm">
                <h1 className="pb-3 font-semibold text-white">Produto</h1>
                <li><a href="">Visão geral</a></li>
            </ul>
            <ul className="flex flex-col gap-2 text-muted-foreground text-sm">
                <h1 className="pb-3 font-semibold text-white">Recursos</h1>
                <li>Dashboard</li>
                <li>Relatórios</li>
            </ul>
            <ul className="flex flex-col gap-2 text-muted-foreground text-sm">
                <h1 className="pb-3 font-semibold text-white">Planos</h1>
                <li>Essencial</li>
                <li>Equilíbrio</li>
                <li>Performance</li>
            </ul>
            <ul className="flex flex-col gap-2 text-muted-foreground text-sm">
                <h1 className="pb-3 font-semibold text-white">Contato</h1>
                <li>Suporte</li>
                <li>Vendas</li>
            </ul>
        </footer>
    )
}


export default FooterSectionComponent;