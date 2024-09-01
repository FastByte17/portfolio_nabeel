import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { useData } from '../utils/data.js'



export default function Landing() {
    const { mainTech, socialsDetails, aboutDescription } = useData()

    return (
        <section className='flex sm:flex-row flex-col'>
            <article className='bg-teal-900 basis-1/2 flex-col justify-center items-center p-4 md:p-8 lg:12'>
                <div className='flex lg:flex-row flex-col items-center justify-center p-2 text-md'>
                    <Image
                        src={'/nabeel_cv_pic.png'}
                        alt="Picture of the author"
                        width={200}
                        height={400}
                        blurDataURL='loading'
                        placeholder="blur"
                        className='cursor-pointer scale-90 hover:scale-100 ease-in- duration-500 mx-auto'
                    />
                    <p>{aboutDescription.desc}</p>
                </div>
                <article className="flex space-x-6 w-fit p-2 mt-4 bg-black border rounded mx-auto">
                    {socialsDetails.map((social, index) => (
                        <a
                            href={social.src}
                            target="_blank"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white hover:-translate-y-2 focus:-translate-y-2 relative top-0 transition-transform duration-300"
                            key={index}
                            rel="noreferrer">
                            {social.icon("h-8 w-8 hover:text-white")}
                            <span className="sr-only">{social.type}</span>
                        </a>
                    ))}
                </article>
            </article>
            <article className='bg-teal-800 basis-1/2 text-white flex flex-col justify-center items-center p-4 md:p-8 lg:12 gap-2'>
                <h1 className='text-2xl md:text-4xl'>{'Nabeel Hussain'}</h1>
                <span className='text-md md:text-2xl'>{'I am skilled in the following:'}</span>
                <span className='text-4xl font-bold'>
                    <Typewriter
                        options={{
                            strings: mainTech,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
            </article>
        </section>
    )
}
