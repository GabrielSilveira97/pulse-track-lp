import { PixelImage } from "@/components/ui/pixel-image"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

const BannerSectionComponent = () => {
    return(
        <section className="flex flex-col md:flex-row-reverse gap-10 px-4 md:px-36 py-10 md:py-16 justify-between items-center">
            <div className="flex flex-col gap-7 text-center md:text-start">
                <h1 className="text-3xl md:text-5xl font-semibold">Produtividade guiada por dados reais</h1>
                <h2>
                    Transforme informações do seu dia a dia em decisões mais inteligentes. O PulseTrack analisa seus hábitos e entrega insights práticos para manter foco, energia e consistência.
                </h2>
                <InteractiveHoverButton className="max-w-64">Explorar funcionalidades</InteractiveHoverButton>
            </div>
            <div>
                <PixelImage src="/banner-1.png" grid="8x8" />
            </div> 
        </section>
    )
}


export default BannerSectionComponent