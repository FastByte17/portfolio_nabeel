import React, { useEffect, useRef } from 'react';
import { useData } from '../utils/data.js'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function SkillsComponent() {
    const { technologies } = useData()
    const skillsRef = useRef(null);

    useEffect(() => {
        const skillElements = skillsRef.current.children;

        // Randomize initial positions
        gsap.set(skillElements, {
            opacity: 0,
            x: () => gsap.utils.random(-100, 100),
            y: () => gsap.utils.random(-50, 50),
        });

        // Create the scroll animation
        gsap.to(skillElements, {
            opacity: 1,
            x: 0,
            y: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: skillsRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
        });
    }, []);

    return (
        <section className='bg-teal-800 text-white text-center py-12 skills-section'>
            <h2 className="text-4xl font-bold tracking-tight">Skills</h2>
            <div ref={skillsRef} className='mx-4 grid grid-cols-auto-fit gap-2 p-12 skills-container'>
                {technologies.map((tech, i) => <span className='p-0 skill-item' key={i}>{tech.icon('5')}</span>)}
            </div>
        </section>
    )
}