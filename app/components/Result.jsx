import React from 'react'
import Image from "next/image";

export const Result = () => {
    return (
        <section id='result' className='bg-result bg-no-repeat xl:pt-[100px] ph:pt-[20px] xl:pb-[200px] pb-16'>
            <div className='max-w-[1140px] mx-auto'>
                <div className='flex flex-col justify-center'>
                    <div className='xl:pb-[60px]'>
                        <h2 className='xl:text-[52px] md:text-[32px] ph:text-[24px] sm:leading-[40px] text-center font-bold leading-[60px] text-resultHeader'>Best Uses for Calming Chews</h2>
                    </div>
                    <div className='flex items-center justify-between flex-col xl:flex-row'>
                        <div className='flex order-2 flex-col max-w-[760px] md:text-[18px] ph:text-[14px] leading-[24px] text-timerText xl:gap-y-6 gap-y-1 xl:p-[40px] p-[16px] ph:p-[12px] frame-with-triangle'>
                            <p>
                                Car rides. Vet visits. Thunderstorms. Boarding. Parties. These are just a handful of times when Calming chews may come in handy. Does your dog hate to be left home alone? Does your cat love hiding under the bed? Serve up a Calming chew to help soothe your furry pal’s anxiety and make your life easier, too!
                            </p>
                            <p>
                                For Best Results:
                            </p>
                            <p>
                                We recommend administering Calming chews 30 minutes prior to a stressful event. The 30-minute activation period gives you a chance to increase dosage if you’re not seeing expected results. Calming is safe for unique stress inducing events and for long-term use to help manage everyday stress.
                            </p>
                        </div>
                        <div className='order-1'>
                           <Image src="/assets/ResultImages/ResultImg.webp" alt='resultImg' height={300} width={300}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
