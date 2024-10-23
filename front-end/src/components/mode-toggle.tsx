import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Switch } from "@/components/ui/switch"


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
        )
      }
      