import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import IconSpotifySocial from '@/assets/icon'
import GaiaIconForDark from '@/assets/gaiaIconForDark'
import { useTheme } from '@/components/theme-provider'
import GaiaIconForLight from '@/assets/gaiaIconForLight'
import BackgroundImage  from "@/components/imageBackground"

export default function LoginPage() {
  const [, ] = useState<string | null>(null);
  const { theme } = useTheme();

  const handleSpotifyLogin = () => {
    console.log('Login com Spotify')
  }

  return (
    <div className="flex items-center justify-center h-[500px]">
      <Card className="w-full max-w-md border-none bg-card z-10">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center mb-2">
            {theme === 'dark'? <GaiaIconForDark/> : <GaiaIconForLight/>}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-center">
            Crie uma atmosfera envolvente com música no seu espaço
          </CardDescription>
        </CardHeader>
        <BackgroundImage />
        <CardContent>
          {/*
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
            <p className="text-center text-xs text-muted-foreground my-4 uppercase">Continue com</p>
          </div>*/}
          <Button 
            variant="outline" 
            className="w-full hover:bg-[#FF0FA6] text-[#FF0FA6] border-[#FF0FA6] hover:text-white font-bold transition duration-700"
            onClick={handleSpotifyLogin}
            
          >
            <IconSpotifySocial />
            Entrar com Spotify
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-muted-foreground w-full">
            Não tem uma conta? {' '}
            <a href="https://accounts.spotify.com/pt-BR/login" className={`${theme === 'light' ? 'text-[#FF0FA6]' : 'text-white hover:text-[#FF0FA6]'} text-center text-sm w-full underline`}>Crie uma conta</a>
            {/*<Link to="/cadastro" className="text-primary hover:underline">
              Criar conta
            </Link>*/}
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}