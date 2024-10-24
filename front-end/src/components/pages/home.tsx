import { useTheme } from "@/components/theme-provider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "../ui/input";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {icons, SearchIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  

export default function HomePage() {
	const { theme } = useTheme();

	// Aqui esta os dados que seram listados de uma API não sabe se é POST ou GET
	const top20 = [
		{
			nome: "Linkin Park",
			url: "https://lastfm.freetls.fastly.net/i/u/300x300/01aa4556b6916185ecd890dad8a42f47.jpg",
		},
		{
			nome: "Morada",
			url: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1pRrAk-default.jpg",
		},
		{
			nome: "Leonardo",
			url: "https://yt3.googleusercontent.com/dWJssjbHkqrl4utQz7XGKld5n9gfAxoeIi6j1KFPjLc7DJULvBYIyrGHIg1jsCcaiEVl6X6Cdg=s900-c-k-c0x00ffffff-no-rj",
		},
		{
			nome: "Artic Monkeys",
			url: "https://m.media-amazon.com/images/I/71-Y-3usHkL._UF894,1000_QL80_.jpg",
		},
		{
			nome: "Imagine Dragons",
			url: "https://akamai.sscdn.co/uploadfile/letras/albuns/5/9/d/d/577561571234069.jpg",
		},
		{
			nome: "Mamonas Assasinas",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUib0yTb8KEQYrgturWFA2rF2INpJ1IHylZQ&s",
		},
		{
			nome: "Bruno Mars",
			url: "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
		},
		{
			nome: "50cent",
			url: "https://i.scdn.co/image/dd031b9c5d1b6eba4a691cd89c954255aae787f2",
		},
		{
			nome: "Eminem",
			url: "https://midias.correiobraziliense.com.br/_midias/jpg/2024/09/23/800x600/1_o_que_eminem_escreveu_sobre_p__diddy_em_novo_album-40168737.jpg?20240923133148?20240923133148",
		},
		{
			nome: "Ariana Grande",
			url: "https://i.scdn.co/image/ab67616d0000b273c3af0c2355c24ed7023cd394",
		},
		{
			nome: "Michael Jackson",
			url: "https://br.web.img3.acsta.net/pictures/210/152/21015281_20130625213155152.jpg",
		},
		{
			nome: "Gustavo Lima",
			url: "https://cdns-images.dzcdn.net/images/artist/c9a6f79f4dd4377db809f8b8d772f8e8/1900x1900-000000-80-0-0.jpg",
		},
		{
			nome: "Player Tauz",
			url: "https://i1.sndcdn.com/avatars-000625941075-nff3um-t240x240.jpg",
		},
		{
			nome: "Robero Carlos",
			url: "https://i.scdn.co/image/818f9ce3057354c119192da2b670781c30f87a7d",
		},
		{
			nome: "INTERWORLD",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrXuXBLRJkkX5MsUy8DJmZ1bh_cwldpcAGA&s",
		},
		{
			nome: "Billie Eilish",
			url: "https://i.scdn.co/image/ab67616d00001e022a038d3bf875d23e4aeaa84e",
		},
	];

	// const search = [
	//     "Slipknot",
	//     "É ele",
	//     "Minha vida"
	// ];

    const playlists = [
        {
            "nome": "Gospel",
            "musicas": [
                "Agnus Dei - Michael W. Smith",
                "Ele É Exaltado - Aline Barros",
                "Ninguém Explica Deus - Preto no Branco"
            ]
        },
        {
            "nome": "Sertanejo",
            "musicas": [
                "Evidências - Chitãozinho & Xororó",
                "Ai Se Eu Te Pego - Michel Teló",
                "Deus Me Livre - Leonardo"
            ]
        },
        {
            "nome": "Rock",
            "musicas": [
                "In the End - Linkin Park",
                "Bohemian Rhapsody - Queen",
                "Smells Like Teen Spirit - Nirvana"
            ]
        }
    ];
    

	return (
		<div className="flex items-center justify-center px-10">
			<Tabs className="w-full h-[500px]">
				<TabsList
					className={`${theme === "dark" ? "bg-[#18181b]" : "bg-[#f1f1f2]"} text-center w-full`}
				>
					<TabsTrigger
						value="top20"
						className={`${theme === "dark" ? "bg-[#18181b]" : "bg-[#f1f1f2]"} w-full`}
					>
						Top 20
					</TabsTrigger>
					<TabsTrigger value="pesquisa" className="w-full">
						Buscar Música
					</TabsTrigger>
					<TabsTrigger value="playlist" className="w-full">
						Playlists
					</TabsTrigger>
				</TabsList>
				<TabsContent value="top20">
					<Card>
						<CardHeader>
							<CardTitle className="text-center">Top 20 Músicas</CardTitle>
						</CardHeader>
						<CardDescription>
							<div className="flex flex-wrap justify-between items-center gap-8 m-4 ">
								{top20.map((item) => (
									<Avatar
										key={item.nome}
										className="flex flex-col items-center justify-center gap-2 w-1/5"
									>
										<AvatarImage
											src={item.url}
											alt={item.nome}
											className="h-20 w-20 rounded-lg"
										/>
										<span className="text-center w-[150px] truncate">
											{item.nome}
										</span>
									</Avatar>
								))}
							</div>
						</CardDescription>
					</Card>
				</TabsContent>
				<TabsContent value="pesquisa">
					<Card>
						<CardContent>
							<CardHeader>
								<CardTitle className="text-center">Buscar Música</CardTitle>
							</CardHeader>
							<CardDescription className="flex justify-center items-center px-10 gap-2 ">
                                   
                                <SearchIcon className="h-6 w-6 text-muted-foreground" />
								<Input
									type="text"
									placeholder="Buscar música"
									className="w-full"
								/>
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
                    {/*{playlists.map((item, index) => (<div key={index}>{item}</div>))}*/}
                    {
                        playlists.map((item, index) => (
                            <Accordion key={index} type="multiple">
                                <AccordionItem value={item.nome}> 
                                    <AccordionTrigger>{item.nome}</AccordionTrigger>
                                    <AccordionContent>
                                    <div className="flex flex-col justify-start">{item.musicas.map((musica, musicaIndex) => <div className="bg-gray-300 p-1 m-2" key={musicaIndex}>{musica}</div>)}</div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))
                    }
                    </CardDescription>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
