'use client'
import skyImg from '@/assets/designsky.png'
import Image from 'next/image'
import { motion } from "motion/react"

const Contact = () => {
    return (
        <div className="mx-auto max-w-[1440px] mb-6 lg:mb-56">
            {/* Upper image and heading */}
            {/* <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={skyImg}
                        width={200}
                        height={200}
                        alt='Sky Image'
                        className='w-[338] sm:w-[600px] md:w-[790px] lg:w-[1000px] xl:w-[1240px] md:h-[60px] lg:h-[148px] absolute right-5 top-0'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='w-[325]  sm:w-[610px]  md:w-[799px] lg:w-[930px] xl:w-[1258px] h-[54px] lg:h-[144px] rounded-[10px] lg:rounded-[20px] bg-primary flex items-center justify-center z-10 absolute top-6 lg:top-10 right-10 lg:right-16'
                >
                    <h1 className='text-2xl lg:text-[75px] text-olive font-anton'>Contact Me For:</h1>
                </motion.div>
            </div> */}
            <div className='px-7 md:px-10 xl:px-0'>
                <div
                    className="w-full md:w-full mx-auto lg:w-full h-[90px] md:h-[128px] lg:h-[228px] bg-cover bg-center flex items-center justify-center rounded-[20px] px-5 xl:px-0"
                    style={{ backgroundImage: `url(${skyImg.src})` }} // Set the sky image as background
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-full md:w-[840px] lg:w-[920px] xl:w-[1200px] h-[54px] lg:h-[144px] rounded-[10px] lg:rounded-[20px] bg-primary flex items-center justify-center mx-auto"
                    >
                        <h1 className="text-[20px] md:text-xl lg:text-5xl xl:text-[75px] text-olive font-anton text-center uppercase">
                            Contact Me For:
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className='pt-5 md:pt-16 lg:pt-[100px] px-9 md:px-9 lg:px-0  flex flex-col md:flex-row gap-0 md:gap-28 lg:gap-12 place-content-center'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className=''>
                        <div className='space-y-[3px] mb-[20px] lg:mb-[38px]'>
                            <h1 className='font-anton text-secondary text-[30px] lg:text-[40px] leading-tight lg:leading-none'>UX & UI Design</h1>
                            <p className='font-abel text-sm text-olive max-w-[304px]'>User Experience (UX) Design for digital platforms
                                User Research and Usability Testing
                                Wireframing, Prototyping, and Interaction Design
                                Mobile and Web App Design
                                Service Design and Journey Mapping
                                UX Writing and Microcopy Strateg</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='space-y-[3px] mb-[20px] lg:mb-[38px]'>
                            <h1 className='font-anton text-secondary text-[30px] lg:text-[40px] leading-tight lg:leading-none'>Media and Entertainment</h1>
                            <p className='font-abel text-sm text-olive max-w-[304px]'>Film Concept Development and Creative Consulting
                                Set Design for Film, TV, or Live Productions
                                Music Video Direction and Visual Concepting
                                Hosting Creative Panels, TV, or Web Series</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='space-y-[3px] mb-[20px] lg:mb-[38px]'>
                            <h1 className='font-anton text-secondary text-[30px] lg:text-[40px] leading-tight lg:leading-none'>Consulting and Leadership</h1>
                            <p className='font-abel text-sm text-olive max-w-[304px]'>Design Thinking and Innovation Workshops
                                Mentorship for Creative and UX Professionals
                                Accessibility, Inclusion, and Digital Transformation Consulting</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='relative'>
                    <div className='space-y-[3px] mb-[20px] lg:mb-[38px]'>
                        <h1 className='font-anton text-secondary text-[30px] lg:text-[40px] leading-tight lg:leading-none'>Experimental Art & Installations</h1>
                        <p className='font-abel text-sm text-olive max-w-[200px]'>
                            Immersive Art Installations
                            Interactive Exhibition Design
                            Fashion and Art Showcase Curation
                            Public Art Projects
                            Experiential Marketing Activations
                        </p>
                    </div>
                    <div className=''>
                        <div className='space-y-[3px] mb-[38px]'>
                            <h1 className='font-anton text-secondary text-[30px] lg:text-[40px] leading-tight lg:leading-none'>Creative Strategy</h1>
                            <p className='font-abel text-sm text-olive max-w-[301px]'>
                                Brand Identity Development
                                Campaign Storytelling and Creative Direction
                                Content Strategy for Digital and Social Platforms
                                Art Direction and Visual Concepting
                                Event Branding and Creative Consulting</p>
                        </div>

                    </div>
                    {/* <div className='w-[312px] h-[353px] bg-[#D9D9D9] hidden lg:block absolute top-28 left-[350px]'>

                    </div> */}
                </motion.div>
            </div>
        </div>
    )
}

export default Contact