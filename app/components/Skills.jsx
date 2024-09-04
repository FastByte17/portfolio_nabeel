import React from 'react'
import { useData } from '../utils/data.js'


export default function SkillsComponent() {
    const { technologies } = useData()

    return (
        <section className='bg-teal-800 text-white text-center py-12'>
            <h1 className="text-6xl p-4">Skills</h1>
            <div className='mx-4 grid grid-cols-auto-fit gap-2 p-12'>
                {technologies.map((tech, i) => <span className='p-0' key={i}>{tech.icon('5')}</span>)}
            </div>
        </section>
    )
}
