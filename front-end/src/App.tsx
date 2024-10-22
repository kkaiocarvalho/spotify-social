import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import { Outlet } from 'react-router-dom'

function App() { 
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <header className="p-4 flex justify-end">
          <ModeToggle />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App