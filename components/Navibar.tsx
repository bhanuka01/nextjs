
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Link from 'next/link';
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
function Navibar() {
    return (
        <>
            <Card className='bg-zinc-900/50 my-2 outline-2'>
                <CardBody>
                    <div className="flex justify-between text-white py-2 text-2xl font-semibold mx-9" >
                        <div className='flex justify-start gap-6'>
                            <Link href="/"><div>Home</div></Link>

                            <div>Main</div>

                        </div>
                        {/* <Link href="/about"><div>About</div></Link> */}
                        <Link href="/about"><Avatar isBordered color="danger" src="https://avatars.githubusercontent.com/u/113027082?v=4" /></Link>
                    </div>
                </CardBody>
            </Card>

        </>
    )
}

export default Navibar