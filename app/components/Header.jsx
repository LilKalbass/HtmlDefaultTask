import React from 'react'
import Image from "next/image";
import {Nav} from "@/app/components/Nav";
import Link from "next/link";

export const Header = () => {
    return (
        <header className='absolute z-10 w-full xl:py-8 py-6 ph:py-4'>
            <div className='max-w-[1140px] mx-auto'>
                <div className='flex items-center xl:justify-between justify-center'>
                    <div className='xl:bg-logo bg-no-repeat'>
                        <Link href='/'>
                            <Image src='/assets/HeaderImages/Logo.webp' alt='logo_img' width={330} height={114} className='py-3 px-5 hidden xl:flex'/>
                        </Link>
                    </div>
                    <div>
                        <Nav/>
                    </div>
                </div>
            </div>
        </header>
    )
}
