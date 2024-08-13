'use client'
import { Element } from "react-scroll";
import LandingComponent from "../components/Landing";

export default function Landing() {


    return (
        <Element name="landing" className={`border border-red-500 row-auto flex-grow`}>
            <LandingComponent />
        </Element>
    );
}