import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { useData } from '../utils/data.js'



export default function Landing() {
    const { mainTech, socialsDetails } = useData()

    return (
        <section className='flex sm:flex-row flex-col'>
            <article className='bg-white basis-1/2 flex-col justify-center items-center p-12'>
                <Image
                    src={'/nabeel_cv_pic.png'}
                    alt="Picture of the author"
                    width={400}
                    height={600}
                    blurDataURL='loading'
                    placeholder="blur"
                    className='cursor-pointer scale-90 hover:scale-100 ease-in- duration-500 mx-auto'
                />
                <article className="flex space-x-6 w-fit p-2 mt-4 bg-black border rounded mx-auto">
                    {socialsDetails.map((socail, index) => (
                        <a
                            href={socail.src}
                            target="_blank"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white hover:-translate-y-2 focus:-translate-y-2 relative top-0 transition-transform duration-300"
                            key={index}
                            rel="noreferrer">
                            {socail.icon("h-8 w-8 hover:text-white")}
                            <span className="sr-only">{socail.type}</span>
                        </a>
                    ))}
                </article>
            </article>
            <article className='bg-black basis-1/2 text-white text-center flex flex-col justify-center items-center p-12'>
                <h1 className='text-4xl'>{'Nabeel Hussain'}</h1>
                <span className='text-2xl'>{'I am skilled in'} {''}
                    <div className="inline-block text-white font-bold">
                        <Typewriter
                            options={{
                                strings: mainTech,
                                autoStart: true,
                                loop: true,

                            }}
                        />
                    </div>
                </span>
            </article>
        </section>
    )
}
