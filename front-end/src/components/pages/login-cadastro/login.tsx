import { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Music } from "lucide-react"
import { Link } from 'react-router-dom'
import IconSpotifySocial from '@/assets/icon'

const formSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  password: z.string().min(8, {
    message: "A senha deve ter pelo menos 8 caracteres.",
  }),
})

export default function LoginPage() {
  const [loginError, setLoginError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Aqui você implementaria a lógica de login
    console.log('Login com:', values)
    // Simulando um erro de login para demonstração
    setLoginError("Credenciais inválidas. Por favor, tente novamente.")
  }

  const handleSpotifyLogin = () => {
    // Aqui você implementaria a lógica de login com o Spotify
    console.log('Login com Spotify')
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-900 text-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
            <Music className="mr-2 text-green-500" />
            Spotify Social
          </CardTitle>
          <CardDescription className="text-zinc-400 text-center">
            Entre para conectar-se com outros fãs de música
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="seu@email.com" 
                        {...field} 
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">Senha</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        {...field} 
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-bold">
                Entrar
              </Button>
            </form>
          </Form>
          {loginError && (
            <Alert variant="destructive" className="mt-4 bg-red-900 border-red-800">
              <AlertDescription>{loginError}</AlertDescription>
            </Alert>
          )}
          <div className="mt-4">
            <Separator className="bg-zinc-700" />
            <p className="text-center text-xs text-zinc-500 my-4 uppercase">Ou continue com</p>
          </div>
          <Button 
            variant="outline" 
            className="w-full bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
            onClick={handleSpotifyLogin}
          >
            <IconSpotifySocial />
            Entrar com Spotify
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-zinc-500 w-full">
            Não tem uma conta?{' '}
            <Link to="/cadastro" className="text-green-500 hover:underline">
              Criar conta
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}