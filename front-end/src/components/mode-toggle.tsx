import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { Switch } from "@/components/ui/switch"
import { set } from "react-hook-form"
import { useState } from "react"


export function ModeToggle() {
  const { setTheme, theme } = useTheme() // Define the 'theme' variable
  const [isOn, setIsOn] = useState(false)

  const handleSwitchChange = (checked: boolean) => {
    setIsOn(checked)
    if (checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
<div className="flex items-center space-x-2">
  <Switch id="theme-mode" checked={isOn} onCheckedChange={handleSwitchChange} />
  <div>
  {theme === "dark" ?  <Moon className=" h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />: <Sun className= " h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />}
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
      