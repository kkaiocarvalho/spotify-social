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
//import { Music } from "lucide-react"
import { Link } from 'react-router-dom'
import IconSpotifySocial from '@/assets/icon'
import GaiaIcon from '@/assets/gaiaIcon'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  password: z.string().min(8, {
    message: "A senha deve ter pelo menos 8 caracteres.",
  }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem.",
  path: ["confirmPassword"],
})

export default function CadastroPage() {
  const [signupError, setSignupError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Aqui você implementaria a lógica de cadastro
    console.log('Cadastro com:', values)
    // Simulando um erro de cadastro para demonstração
    setSignupError("Este email já está em uso. Por favor, tente outro.")
  }

  const handleSpotifySignup = () => {
    // Aqui você implementaria a lógica de cadastro com o Spotify
    console.log('Cadastro com Spotify')
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-none bg-zinc-800 text-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
          <GaiaIcon/>
            <text>aia</text>
            <text className='font-thin'>Music</text>
          </CardTitle>
          <CardDescription className="text-zinc-400 text-center">
            Crie uma atmosfera envolvente com música no seu espaço
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">Nome</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Seu nome" 
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">Confirmar Senha</FormLabel>
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
              <Button type="submit" className="w-full bg-[#ff0fa6] hover:bg-[#ff0fa7d2] text-black font-bold">
                Criar Conta
              </Button>
            </form>
          </Form>
          {signupError && (
            <Alert variant="destructive" className="mt-4 bg-red-900 border-red-800">
              <AlertDescription>{signupError}</AlertDescription>
            </Alert>
          )}
          <div className="mt-4">
            <Separator className="bg-zinc-700" />
            <p className="text-center text-xs text-zinc-500 my-4 uppercase">Ou cadastre-se com</p>
          </div>
          <Button 
            variant="outline" 
            className="w-full bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
            onClick={handleSpotifySignup}
          >
            <IconSpotifySocial />
            Cadastrar com Spotify
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-zinc-500 w-full">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-[#ff0fa6] hover:underline">
              Entrar
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}