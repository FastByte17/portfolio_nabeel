import React from 'react'
import Image from 'next/image'
import { useData } from '../utils/data.js'
import { FiGithub, FiExternalLink } from "react-icons/fi";



export default function ProjectsComponent() {
    const { listOfProjects } = useData()

    return (
        <section className="flex flex-col justify-center items-center px-4 py-4 bg-teal-800 text-white text-center">
            <div className="text-6xl p-4">Projects</div>
            <div className="flex flex-col gap-4 p-4">
                {listOfProjects.map((project) =>
                    <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:max-w-2xl p-2">
                        <div className="flex flex-wrap items-center gap-4">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight">{project.title}</h5>
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <FiGithub className="h-5 w-5 hover:text-white dark:hover:text-gray-900" />
                            </a>
                            {project.websiteLink && <a href={project.websiteLink} target="_blank" rel="noreferrer">
                                <FiExternalLink className="h-5 w-5 hover:text-white dark:hover:text-gray-900" />
                            </a>}
                        </div>
                        <p>{project.description}</p>
                        <div className="project__used">
                            {project.technologies.map((tech) =>
                                <span className="inline-block text-xs font-bold text-[$blue] border ml-0 mr-2 my-2 px-4 py-0.5 rounded-2 border-solid border-blue-500 first-of-type:ml-0">{tech}</span>
                            )}
                        </div>
                        <Image className="object-cover w-full" width={400} height={400} src={project.image.src} alt={project.image.alt} />
                    </div>
                )}
            </div>
        </section>
    )
}
