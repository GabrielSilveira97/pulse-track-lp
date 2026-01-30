import HeroSectionComponent from "./components/layout/Hero"
import NavbarComponent from "./components/layout/Navbar"
import { AppSidebar } from "./components/layout/Sidebar"
import SponsorSectionComponent from "./components/layout/Sponsors"
import { SidebarProvider } from "./components/ui/sidebar"
import { ThemeProvider } from "./lib/providers/ThemeProvider"


const App = () => {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar/>
        <header className="sticky top-0 z-10">
          <NavbarComponent/>
        </header>
        <main>
          <HeroSectionComponent/>
          <SponsorSectionComponent/>
        </main>
        </SidebarProvider>
    </ThemeProvider>
    
  )
}

export default App
