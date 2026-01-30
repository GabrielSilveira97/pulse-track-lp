import { useState } from "react"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"


const sponsors = [
    {
        name: "Company A",
        logoUrl: "/sponsors/company-a-logo.png",
    },
    {
        name: "Company B",
        logoUrl: "/sponsors/company-b-logo.png",
    },
    {
        name: "Company C",
        logoUrl: "/sponsors/company-c-logo.png",
    },
    {
        name: "Company D",
        logoUrl: "/sponsors/company-d-logo.png",
    },
    {
        name: "Company E",
        logoUrl: "/sponsors/company-e-logo.png",
    },
    {
        name: "Company F",
        logoUrl: "/sponsors/company-f-logo.png",
    },
]




const SponsorSectionComponent = () => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="flex flex-col justify-center px-4 md:px-36 py-10 md:py-20">
            <div className="flex flex-col gap-1 text-center text-xl font-semibold">
                <h1>Empresas que confiam no PulseTrack</h1>
                <h1 >Times inovadores usam o PulseTrack para trabalhar melhor todos os dias.</h1>
            </div>
            <div
                className="group relative grid items-center justify-center grid-cols-3 text-center py-10 gap-8 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`col-span-3 grid grid-cols-3 gap-8 transition-all duration-200 ${isHovered ? "blur-sm" : ""}`}>
                    {sponsors.map((sponsor, index) => {
                        return (
                            <h1 key={index}>{sponsor.name}</h1>
                        )
                    })}
                </div>
                <AnimatePresence>
                    {isHovered && (
                        <motion.button
                            key="sponsor-cta"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{
                                duration: 0.2
                            }}
                            className="absolute cursor-pointer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex z-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
                        >
                            Ver todas as empresas
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}


export default SponsorSectionComponent