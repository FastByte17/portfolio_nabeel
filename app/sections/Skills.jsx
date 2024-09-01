'use client'
import { Element } from "react-scroll";
import SkillsComponent from "../components/Skills";

export default function Skills() {
    return (
        <Element name="skills" className={`border border-red-500 flex-grow`}>
            <SkillsComponent />
        </Element>
    );
}