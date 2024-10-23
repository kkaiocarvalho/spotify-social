import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const handleSwitchChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch 
        id="theme-mode" 
        checked={theme === "dark"}
        onCheckedChange={handleSwitchChange}
        className="data-[state=checked]:bg-gray-500 data-[state=unchecked]:bg-yellow-500"
      />
      <div>
        {theme === "dark" ? (
          <Moon className="h-[1.2rem] w-[1.2rem] text-gray-500" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
        )}
      </div>
    </div>
    /* <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
        Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
          System
          </DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
          */
        )
      }
      