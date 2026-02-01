import { Button } from "@/components/ui/button"



export interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
}

const PricingCard = ({ title, price, features } : PricingCardProps) => {
    return (
        <div className="border rounded-lg p-6 shadow-lg flex flex-col justify-between h-full">
            <div className="text-center md:text-start">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-2xl font-bold mb-6">{price}</p>
            </div>
            <ul className="mb-6 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="mb-2 text-sm">• {feature}</li>
                ))}
            </ul>
            <Button className="w-full mt-auto" variant='secondary'>Choose Plan</Button>
        </div>
    )
}

export default PricingCard