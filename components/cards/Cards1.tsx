import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button, ButtonGroup } from "@nextui-org/button";
function Cards1() {
	return (
		<Card
			isFooterBlurred
			radius="lg"
			className="border-none w-fit"
		>
			<Image
				alt="Woman listing to music"
				className="object-cover"
				height={200}
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
				width={200}
			/>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<p className="text-tiny text-white/80">Google</p>
				<Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
					GO1
				</Button>
			</CardFooter>
		</Card>
	)
}

export default Cards1