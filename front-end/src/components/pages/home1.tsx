import { useTheme } from "@/components/theme-provider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "../ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {icons, SearchIcon } from "lucide-react";

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
			nome: "Linkin Park",
			url: "https://lastfm.freetls.fastly.net/i/u/300x300/01aa4556b6916185ecd890dad8a42f47.jpg",
		},
	];

	// const search = [
	//     "Slipknot",
	//     "É ele",
	//     "Minha vida"
	// ];

	const playlists = [
        {
            icon: icons.AArrowDown,
            nome: "Músicas para relaxar",
        },
        {
            icon: icons.AArrowDown,
            nome: "Músicas para relaxar",
        },
        {
            icon: icons.AArrowDown,
            nome: "Músicas para relaxar",
        },
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
										<span className="text-center w-[80px] truncate">
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
								{playlists.map((item, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<div key={index}>{item.nome}</div>
								))}
							</CardDescription>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}