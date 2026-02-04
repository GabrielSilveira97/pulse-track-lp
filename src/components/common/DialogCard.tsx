import { PlusIcon } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog"



export type DialogCardProps = {
    img : string,
    title: string,
    title2: string,
    description : string
}


const DialogCard = ({img, title, title2, description} : DialogCardProps) => {
    return(
        <Dialog>
            <DialogTrigger className="cursor-pointer bg-muted-foreground/10 hover:bg-muted-foreground/20 transition-all rounded-3xl">
                <div className="flex flex-col gap-4">
                    <img src={img} alt={title} className="bg-cover" />
                    <div className="flex justify-between items-center py-1 px-5">
                        <h1 className="text-xl font-semibold">{title}</h1>
                        <PlusIcon className="size-5"/>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="overflow-y-auto max-h-[90vh] no-scrollbar ">
                <img src={img} alt={title} className="bg-cover" />
                <DialogTitle className="text-2xl font-semibold">{title2}</DialogTitle>
                <DialogDescription className="text-lg">
                    {description}
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

export default DialogCard