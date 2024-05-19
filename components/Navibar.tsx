
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
function Navibar() {
    return (
        <>
            <Card className='bg-zinc-900 my-2'>
                <CardBody>
                <div className="flex justify-evenly text-white py-6 text-2xl font-semibold" >
                <div>Home</div>
                <div>About</div>
                <div>Main</div>
            </div>
                </CardBody>
            </Card>
            
        </>
    )
}

export default Navibar