import React from 'react'
import Link from "next/link";

export const Nav = () => {
    return (
        <nav className='md:bg-nav bg-center bg-no-repeat z-20 p-9'>
            <div >
                <ul className='flex items-center justify-center xl:gap-x-[50px] gap-x-[32px] ph:gap-x-[24px] px-14'>
                    <li>
                        <Link href='#order'>
                            order
                        </Link>
                    </li>
                    <li>
                        <Link href='#about'>
                            about
                        </Link>
                    </li>
                    <li>
                        <Link href='#result'>
                            result
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
