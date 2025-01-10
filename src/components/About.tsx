import React from 'react';
import Image from 'next/image';
import placehold from '@/assets/images/placeholder.svg';

const About = () => {
    return (
        <div id='about' className="relative z-0 bg-[url('/assets/about-bg.svg')] bg-center bg-cover bg-no-repeat min-h-screen w-full -mt-12 pt-[90px] md:pt-[130px]">
            <div className="absolute inset-0 bg-[#A85059] bg-opacity-80 z-10"></div>
            <div className="relative z-10 flex flex-col min-h-screen px-6 lg:px-16 pt-24">
                <h1 className="lg:text-[75px] text-[45px] text-[#FF9737] text-center lg:text-left font-yerk">About</h1>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-8">
                    <div className="font-mono text-center lg:text-left text-[#FF9737] text-[24px] lg:text-[40px] lg:w-2/3">
                        <p>
                            DEVSOC’25 ignites the tech scene with a blaze of innovation, where yesterday&apos;s hurdles are today&apos;s playground.
                            In its fourth edition, this boundary-pushing hackathon transcends limits, merging AI and the metaverse to
                            confront real-world chaos head-on. With diverse minds colliding, we&apos;re not just coding; we&apos;re crafting solutions
                            that scream revolution. Join the fray as we smash barriers and redefine what&apos;s possible.
                        </p>
                    </div>
                    <div className="flex justify-center lg:w-1/3">
                        <div className="p-4 rounded-md shadow-lg pt-7">
                            <Image
                                src={placehold}
                                height={400}
                                width={500}
                                alt="placeholder"
                                className="rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
