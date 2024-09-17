/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V5IVnJ1N8TX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { useData } from "../utils/data";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experiences() {
    const { experiences } = useData();
    const cardsRef = useRef([]);
    const headingRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        const cards = cardsRef.current;
        const heading = headingRef.current;
        const subtitle = subtitleRef.current;

        const animateText = (element, totalDuration = 1.5) => {
            const chars = element.innerText.split('');
            element.innerHTML = chars.map(char => `<span>${char}</span>`).join('');

            const staggerDuration = totalDuration / chars.length;

            return gsap.from(element.children, {
                opacity: 0,
                y: 50,
                stagger: staggerDuration,
                duration: 0.5,
                ease: "power4.out",
            });
        };

        // Create a timeline for synchronized animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heading,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        // Add both animations to the timeline
        tl.add(animateText(heading))
            .add(animateText(subtitle), "<"); // The "<" makes this animation start at the same time as the previous one

        // The existing card animation remains unchanged
        cards.forEach((card, index) => {
            gsap.set(card, {
                opacity: 0,
                x: -50 // Start position, slightly to the left
            });

            gsap.to(card, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }, []);

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white bg-teal-800">
            <div className="space-y-8">
                <div>
                    <h2 ref={headingRef} className="text-4xl font-bold tracking-tight">Work Experience</h2>
                    <p ref={subtitleRef} className="mt-2">Explore my professional journey and the skills I've developed.</p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {experiences.map((experience, i) =>
                        <Card key={i} className="text-white bg-teal-900 shadow-xl hover:shadow-2xl transition-shadow duration-300" ref={el => cardsRef.current[i] = el}>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg font-semibold">{experience.title}</h3>
                                    <div className="text-sm text-right">
                                        <div>{experience.startDate}</div>
                                        <div>{experience.endDate}</div>
                                    </div>
                                </div>
                                <p className="mb-4">{experience.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {experience.technologies.map((tech, i) =>
                                        <Badge key={i} className="bg-blue-500">{tech}</Badge>
                                    )}
                                </div>
                                <div className="text-sm">
                                    <div>{experience.companyName}</div>
                                    <div>{experience.location}</div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    )
}