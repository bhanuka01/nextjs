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
			className="border-none   place-items-center bg-zinc-900 "
		>
			<Image
				alt="Woman listing to music"
				className="object-cover "
				height={150}
				src={image}
				width={150}
			/><Link href={url} target='_blank'>
			<CardFooter className="justify-between  before:bg-white/10 border-white/20 border-1 overflow-hidden py-1  before:rounded-xl rounded-small   shadow-small   ">
				<p className="text-tiny text-white/80 font-poppins font-bold">{message}</p>
				{/* <Link href={url} target='_blank'><Button className="font-poppins font-bold text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" >
					GO
				</Button></Link> */}
			</CardFooter></Link>
		</Card>

	)
}

export default cards2