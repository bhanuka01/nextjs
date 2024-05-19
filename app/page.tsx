import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import Cards2 from "@/components/cards/cards2";
import Cards1 from "@/components/cards/Cards1";

const list = [
	{
		title: "Google",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
		link1: "https://www.google.com/",
	},
	{
		title: "YouTube",
		img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/youtube-music-030422314-1x1_1.jpg?VersionId=gl6p.k50ZJZk0PEbMwQhE7e7fJ3pxuJL",
		link1: "https://www.youtube.com/",
	},
	{
		"title": "Notion",
		"img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png",
		"link1": "https://www.notion.so/"
	},
	{
		"title": "Coda",
		"img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Coda_logo.svg/1024px-Coda_logo.svg.png",
		"link1": "https://coda.io/"
	},
	{
		"title": "Google Gemini",
		"img": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/2023-05_GoogleGemini_inline1.width-1000.format-webp.webp",
		"link1": "https://www.google.com/search?q=Google+Gemini"
	},
	{
		"title": "ChatGPT",
		"img": "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
		"link1": "https://chat.openai.com/"
	},
	{
		"title": "Amie",
		"img": "https://www.amie.so/icons/icon-192x192.png?v=1",
		"link1": "https://www.amie.so/"
	}

]
export default function Home() {
	return (
		<>
			<h1 className="text-white">Bhanuka1</h1>

			{/* <div className="flex flex-row gap-2">
				
				<Cards2 message="Google" url="https://www.google.com/" image={image} />
				<Cards2 message="YouTube" url="https://www.youtube.com/" image={image1} />
				<Cards2 message="Google" url="https://www.google.com/" image={image} />
			</div> */}

			<div className="gap-4  flex flex-row ">
				{list.map((item, index) => (
					<Cards2 key={index} message={item.title} url={item.link1} image={item.img} />


				))}</div>


		</>


	);
}
