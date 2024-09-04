'use client'
import { Element } from "react-scroll";
import ProjectsComponent from '../components/Projects'

export default function Projects() {
    return (
        <Element name="projects">
            <ProjectsComponent />
        </Element>
    );
}