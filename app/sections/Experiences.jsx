'use client'
import ExperiencesComponent from '../components/Experiences'
import { Element } from "react-scroll";

export default function Experiences() {
    return (
        <Element name="experiences">
            <ExperiencesComponent />
        </Element>
    );
}