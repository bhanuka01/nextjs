import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from 'next/link';

interface MyComponentProps {
	message: string;
	url: string;
	image: string;
}
function cards2({ message, url, image }: MyComponentProps) {
	return (

		<Card
			isFooterBlurred
			radius="lg"
			className="outline-2 border-none flex justify-between  place-items-center bg-zinc-900/60 py-4"
		>
			<Image
				alt="Woman listing to music"
				className="object-cover backdrop-blur-sm"
				height={100}
				src={image}
				width={100}
			/><Link href={url} target='_blank'>
			<CardFooter className="justify-between  before:bg-white/10 border-white/20 border-1 overflow-hidden py-1  before:rounded-xl rounded-small   shadow-small   ">
				<p className=" text-white/80 font-poppins font-bold text-base">{message}</p>
				
			</CardFooter></Link>
		</Card>

	)
}

export default cards2