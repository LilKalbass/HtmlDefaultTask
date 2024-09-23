import React from 'react';
import Image from 'next/image';

export const About = () => {
    return (
        <section id="about" className="bg-about bg-no-repeat xl:py-[100px]">
            <div className="max-w-[1140px] mx-auto">
                <div className="flex items-center justify-center flex-col">
                    <h2
                        className="text-[52px] mb-[60px] text-center leading-[60px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-aboutGr1 via-aboutGr2 to-aboutGr3"
                    >
                        From the manufacturer
                    </h2>
                    <div className="flex flex-wrap gap-6 items-stretch justify-center">
                        <div className="flex flex-col items-center px-[16px] bg-aboutCardBg shadow-2xl ph:mx-4 mx-0 rounded-3xl pb-[16px] w-full sm:w-[320px] min-h-[500px]">
                            <div className="flex-grow flex items-center justify-center py-4 ">
                                <Image
                                    src="/assets/AboutImages/AboutItem1.webp"
                                    alt="aboutItem1_img"
                                    width={212}
                                    height={212}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center bg-aboutCardTextBg rounded-2xl pt-[14px] pb-[26px] w-full flex-grow">
                                <h4 className="text-[22px] text-white leading-[26px] font-bold pb-[20px]">
                                    Keep Calm and Carry On
                                </h4>
                                <p className="text-center px-4">
                                    Are you searching for a better way to ease your pet’s separation anxiety or stress? Calming chews help relieve pet stress without corn, wheat or artificial ingredients.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center px-[16px] bg-aboutCardBg shadow-2xl ph:mx-4 mx-0 rounded-3xl pb-[16px] w-full sm:w-[320px] min-h-[500px]">
                            <div className="flex-grow flex items-center justify-center py-4">
                                <Image
                                    src="/assets/AboutImages/AboutItem2.webp"
                                    alt="aboutItem2_img"
                                    width={164}
                                    height={164}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center bg-aboutCardTextBg rounded-2xl pt-[14px] pb-[26px] w-full flex-grow">
                                <h4 className="text-[22px] text-white leading-[26px] font-bold pb-[20px]">
                                    Keep Calm and Carry On
                                </h4>
                                <p className="text-center px-4">
                                    Pet Naturals of Vermont’s research-backed formula makes it safe to double or triple the amount in times of added stress.
                                </p>
                            </div>
                        </div>
                        <div className="flex xl:mb-0 ph:mb-4 flex-col items-center px-[16px] bg-aboutCardBg shadow-2xl ph:mx-4 mx-0 rounded-3xl pb-[16px] w-full sm:w-[320px] min-h-[500px]">
                            <div className="flex-grow flex items-center justify-center py-4">
                                <Image
                                    src="/assets/AboutImages/AboutItem3.webp"
                                    alt="aboutItem3_img"
                                    width={186}
                                    height={186}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center bg-aboutCardTextBg rounded-2xl pt-[14px] pb-[26px] w-full flex-grow">
                                <h4 className="text-[22px] text-white leading-[26px] font-bold pb-[20px]">
                                    Keep Calm and Carry On
                                </h4>
                                <p className="text-center px-4">
                                    Don’t let its satisfying chicken liver flavor fool you. Technically, Calming isn’t a treat but it sure tastes like one. Reward your best buddy with a Calming chew.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
