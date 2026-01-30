import { Button } from "@/components/ui/button"
import { NavbarButtons} from "./menu"
import NavigationMenuComponent from "./NavigationMenu"
import { SidebarTrigger } from "@/components/ui/sidebar"

const NavbarComponent = () => {
    return (
        <nav className="flex items-center justify-between px-5 md:px-36 py-3 border-b-[0.5px] bg-background shadow-2xl">
            <h1>Logo</h1>
            <NavigationMenuComponent/>
            <ul className="flex items-center gap-3 md:gap-2">
                {NavbarButtons.map((button, index) => {
                    return(
                        <li key={index}>
                            <a href={button.href}>
                                <Button variant={button.title === "Sign Up" ? "secondary" : "default"}>{button.title}</Button>
                            </a>
                        </li>
                    )
                })}
                <li>
                    <SidebarTrigger className="md:hidden"/>
                </li>
            </ul>
        </nav>
    )
}


export default NavbarComponent