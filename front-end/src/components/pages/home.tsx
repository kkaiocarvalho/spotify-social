import { useTheme } from '@/components/theme-provider'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from '../ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function HomePage() {
    const { theme } = useTheme();

// Aqui esta os dados que seram listados de uma API não sabe se é POST ou GET
    const top20 = [
        "Link Park",
        "Morada",
        "Leonardo"
    ];

    // const search = [
    //     "Slipknot",
    //     "É ele",
    //     "Minha vida"
    // ];
    
    const playlists = [
        "Gospel",
        "Sertanejo",
        "Rock"
    ];


  return (
    <div className="flex items-center justify-center px-10">
      <Tabs className="w-full h-[500px]">
        <TabsList className={`${theme === 'dark' ? 'bg-[#18181b]' : 'bg-[#f1f1f2]'} text-center w-full`}>
          <TabsTrigger value="top20" className={`${theme === 'dark' ? 'bg-[#18181b]' : 'bg-[#f1f1f2]'} w-full`}>Top 20</TabsTrigger>
          <TabsTrigger value="pesquisa" className="w-full">Buscar Música</TabsTrigger>
          <TabsTrigger value="playlist" className='w-full'>Playlists</TabsTrigger>
        </TabsList>
        <TabsContent value="top20">
            <Card>
                <CardContent>
                    <CardHeader>
                        <CardTitle className='text-center'>Top 20 Músicas</CardTitle>
                    </CardHeader>
                    <CardDescription>
            {/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
            {top20.map((item, index) => (<div className='items-center justify-center flex' key={index}>{item}</div>))}
                    </CardDescription>
                </CardContent>
            </Card>

        </TabsContent>
        <TabsContent value="pesquisa">
            <Card>
                <CardContent>
                    <CardHeader>
                        <CardTitle className='text-center'>Buscar Música</CardTitle>
                    </CardHeader>
                    <CardDescription className='flex justify-center items-center px-10'>
                        <Input type="text" placeholder="Buscar música" className='w-full'/>
                    </CardDescription>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="playlist">
            <Card>
                <CardContent>
                    <CardHeader>
                        <CardTitle>Playlists</CardTitle>
                    </CardHeader>
                    <CardDescription>
                    {/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
                    {playlists.map((item, index) => (<div key={index}>{item}</div>))}
                    </CardDescription>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}