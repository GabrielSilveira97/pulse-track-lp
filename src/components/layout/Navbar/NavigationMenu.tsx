import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { NavbarMenu } from "./menu"



const NavigationMenuComponent = () => {
    return(
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                {NavbarMenu.map((menu, index) => {
                    return(
                        <NavigationMenuItem key={index}>
                            <NavigationMenuTrigger className="text-white/70">{menu.title}</NavigationMenuTrigger>
                            <NavigationMenuContent className="w-96">
                                {menu.links.map((link, index) => {
                                    return(
                                        <NavigationMenuLink key={index} href={link.href}>{link.title}</NavigationMenuLink>
                                    )
                                })}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}


export default NavigationMenuComponent





