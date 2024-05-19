
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Link from 'next/link';

function Navibar() {
    return (
        <>
            <Card className='bg-zinc-900 my-2'>
                <CardBody>
                <div className="flex justify-evenly text-white py-6 text-2xl font-semibold" >
                <Link href="/"><div>Home</div></Link>
                <div>About</div>
                <Link href="/about"><div>Main</div></Link>
            </div>
                </CardBody>
            </Card>
            
        </>
    )
}

export default Navibar