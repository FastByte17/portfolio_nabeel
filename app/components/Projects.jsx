import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useData } from '../utils/data.js'
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsComponent() {
    const { listOfProjects } = useData();
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const heading = headingRef.current;
        const chars = heading.innerText.split('');

        // Clear the heading and replace with spans
        heading.innerHTML = chars.map(char => `<span>${char}</span>`).join('');

        gsap.from(heading.children, {
            opacity: 0,
            y: 50,
            stagger: 0.08,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: heading,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        // Animation for project cards
        cardsRef.current.forEach((card) => {
            if (card) {
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        scale: 0.01, // Start with a very small scale
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom", // Trigger as soon as the top of the card enters the viewport
                            end: "bottom top",   // End animation when the bottom of the card leaves the viewport
                            toggleActions: "play reverse play reverse"
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <section className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-teal-800 text-white">
            <div ref={headingRef} className="text-4xl font-bold tracking-tight mb-8">Projects</div>
            <div className="grid grid-cols-1 gap-6">
                {listOfProjects.map((project, i) =>
                    <Card key={i} className="text-white bg-teal-900 shadow-xl hover:shadow-2xl transition-shadow duration-300" ref={el => cardsRef.current[i] = el}>
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <div className="flex gap-2">
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <FiGithub className="h-5 w-5 hover:text-white" />
                                    </a>
                                    {project.websiteLink && <a href={project.websiteLink} target="_blank" rel="noreferrer">
                                        <FiExternalLink className="h-5 w-5 hover:text-white" />
                                    </a>}
                                </div>
                            </div>
                            <p className="mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) =>
                                    <Badge key={i} className="bg-blue-500">{tech}</Badge>
                                )}
                            </div>
                            <Image className="object-cover w-full rounded" width={400} height={400} src={project.image.src} alt={project.image.alt} />
                        </CardContent>
                    </Card>
                )}
            </div>
        </section>
    )
}
