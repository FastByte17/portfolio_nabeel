'use client'
import { Element } from "react-scroll";
import LandingComponent from "../components/Landing";

export default function Landing() {


    return (
        <Element name="landing" className={`row-auto flex-grow`}>
            <LandingComponent />
        </Element>
    );
}