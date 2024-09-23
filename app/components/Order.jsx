'use client'

import React, { useEffect, useState } from 'react';
import { FaPaw } from "react-icons/fa";
import Image from "next/image";
import dayjs from 'dayjs';
import InputMask from 'react-input-mask';
export const Order = () => {
    const [phone, setPhone] = useState('');
    const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const today = dayjs().format('DD.MM.YYYY');
        setCurrentDate(today);
    }, []);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };


    return (
        <section id='order' className='bg-order bg-opacity-80 bg-no-repeat pt-[154px] pb-[100px]'>
            <div className='max-w-[1140px] mx-auto'>
                <h1>Pet Naturals of Vermont, <br/> Calming, For Cats</h1>
                <div className='flex justify-center  gap-x-[420px]  pt-2 xl:flex-row flex-col items-center gap-y-4 xl:gap-y-0'>
                    <div className='flex flex-col gap-y-[60px] items-center xl:items-start'>
                        <p className='max-w-[440px] text-[26px] leading-[34px] font-bold text-whiteProduct '>
                            Your cat deserves the best pet supplement the world has to offer.
                            That's what's in the package.
                        </p>
                        <div className='flex flex-col bg-blue  rounded-2xl p-[35px] gap-y-[20px] max-w-[320px] text-whiteProduct'>
                            <div className='flex items-center gap-x-[18px]'>
                                <FaPaw className='text-2xl text-black'/>
                                <p>
                                    Features a patented calming blend
                                </p>
                            </div>
                            <div className='flex items-center gap-x-[18px]'>
                                <FaPaw className='text-2xl text-black'/>
                                <p>
                                    Doesn’t contain herbal ingredients
                                </p>
                            </div>
                            <div className='flex items-center gap-x-[18px]'>
                                <FaPaw className='text-2xl text-black'/>
                                <p>
                                    Helps manage everyday stress
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:absolute hidden xl:flex'>
                        <Image src='/assets/ProductImages/ProductImg.webp' alt='product_img' width={710} height={410} className='z-10'/>
                    </div>
                    <div className='flex flex-col'>
                        <div className=''>
                            <div className='flex flex-col items-center bg-blue p-[24px] rounded-t-2xl'>
                                <h2 className='uppercase text-timerText font-bold text-[34px] leading-[40px]'>time left</h2>
                                <div className='text-timerCount font-bold text-[36px] leading-[42px]'>
                                    {formatTime(timeLeft)}
                                </div>
                                <div className='flex gap-x-4 font-bold items-center'>
                                    <p className='line-through text-priceOld text-[30px] leading-[36px]'>
                                        120uah
                                    </p>
                                    <p className='text-timerText text-[36px] leading-[42px]'>
                                        60uah
                                    </p>
                                </div>
                            </div>
                            <div className='bg-orderForm flex flex-col justify-center px-[24px] pb-[20px] rounded-b-2xl'>
                                <form className='pt-[20px]'>
                                    <div className='flex flex-col items-center justify-center gap-y-5'>
                                        <div className= 'flex text-greyOrder justify-center items-center gap-x-3 bg-orderInputBg rounded-3xl py-[14px]'>
                                            <FaPaw className='text-xl ml-[18px]'/>
                                            <input
                                                className='bg-orderInputBg rounded-3xl'
                                                placeholder = "Name"
                                                type = "text"
                                                name = "_name"
                                            />
                                        </div>
                                        <div className= 'flex text-greyOrder items-center gap-x-3 rounded-3xl bg-orderInputBg py-[14px]'>
                                            <FaPaw className='text-xl ml-[18px]'/>
                                            <InputMask
                                                mask="+38(099)999-99-99"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            >
                                                {(inputProps) => <input {...inputProps} type="tel" placeholder="+38(0__)___-__-__" className='bg-orderInputBg rounded-3xl' />}
                                            </InputMask>
                                        </div>
                                        <button className='uppercase bg-orderButton px-[64px] py-2 font-bold text-[30px] leading-[36px] text-white rounded-3xl'>
                                            order
                                        </button>
                                    </div>
                                    <div className='pt-[30px] xl:pb-[20px]'>
                                        <p className='text-center text-[18px] leading-[22px]'>
                                            Order date: {currentDate}
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
