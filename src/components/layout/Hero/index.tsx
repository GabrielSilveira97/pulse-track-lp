import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"

const HeroSectionComponent = () => {
    return (
        <section className="flex flex-col justify-center px-4 md:px-36 py-10 md:py-26">
            <div className="flex flex-col gap-6 text-center md:text-start">
                <div className="flex flex-col gap-1">
                    <BlurFade delay={0.25} inView direction="up" blur="10px">
                        <h2 className="md:text-7xl font-semibold tracking-tighter text-4xl">
                            Controle seus hábitos.
                        </h2>
                    </BlurFade>
                    <BlurFade delay={0.50} inView direction="up" blur="10px" >
                        <h2 className="md:text-7xl font-semibold tracking-tighter text-4xl">
                            Eleve sua performance.
                        </h2>
                    </BlurFade>
                </div>
                <BlurFade delay={0.75} inView direction="up" blur="10px" className="">
                    <span className="tracking-tighter text-pretty text-md md:text-lg">
                        Visualize seus padrões de sono, foco e produtividade em um só lugar<br/> e receba insights claros para evoluir todos os dias, sem burnout.
                    </span>
                </BlurFade>
                <BlurFade delay={1} inView direction="up" blur="10px" className="flex md:justify-start justify-center gap-4">
                    <Button variant="secondary">Começar agora</Button>
                    <Button variant="default">Ver como funciona</Button>
                </BlurFade>
            </div>
        </section>
    )
}


export default HeroSectionComponent