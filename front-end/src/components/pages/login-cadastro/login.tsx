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
import { Link } from 'react-router-dom'
import IconSpotifySocial from '@/assets/icon'
import GaiaIcon from '@/assets/gaiaIcon'

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
    console.log('Login com:', values)
    setLoginError("Credenciais inválidas. Por favor, tente novamente.")
  }

  const handleSpotifyLogin = () => {
    console.log('Login com Spotify')
  }

  return (
    <div className="flex items-center justify-center p-4">  
      <Card className="w-full max-w-md border-none bg-card">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center mb-2">
            <GaiaIcon/>
          </CardTitle>
          <CardDescription className="text-muted-foreground text-center">
            Crie uma atmosfera envolvente com música no seu espaço
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="seu@email.com" 
                        {...field} 
                        className="bg-input border-input text-foreground placeholder:text-muted-foreground"
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
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        {...field} 
                        className="bg-input border-input text-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                Entrar
              </Button>
            </form>
          </Form>
          {loginError && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{loginError}</AlertDescription>
            </Alert>
          )}
          <div className="mt-4">
            <Separator className="bg-border" />
            <p className="text-center text-xs text-muted-foreground my-4 uppercase">Ou continue com</p>
          </div>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleSpotifyLogin}
          >
            <IconSpotifySocial />
            Entrar com Spotify
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-muted-foreground w-full">
            Não tem uma conta?{' '}
            <Link to="/cadastro" className="text-primary hover:underline">
              Criar conta
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}