import { useState } from "react";
import ToolBar from "./ToolBar";



export default function NavBar() {
    const [hamburger, setHamburger] = useState(true);

    return (
        <nav className="area-header bg-teal-800  md:block md:justify-between  md:flex-nowrap  z-50 backdrop-blur-md opacity-90 transition-all delay-100 gap-2 p-2">

            {/*Hamburgher Icon for mobile*/}
            <button
                className="w-10 h-10 relative flex  md:hidden p-2 mr-4 text-sm text-white rounded-lg bg-[#578d74]-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:bg-[#578d74]-700 dark:focus:ring-gray-600"
                onClick={() => setHamburger((prev) => !prev)}>
                <span className="sr-only">Open main menu</span>
                <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${!hamburger ? "rotate-45" : "-translate-y-1.5"
                            }`}></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${!hamburger && "opacity-0"
                            }`}></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${!hamburger ? "-rotate-45" : "translate-y-1.5"
                            }`}></span>
                </div>
            </button>

            {/*Navigation Items*/}
            <div
                className={`${hamburger ? "hidden w-full md:block md:w-auto" : "w-full md:block md:w-auto"
                    }`}>
                <ul className="flex w-full flex-col items-center justify-between  space-y-2 mt-2 md:mr-4 md:space-y-0 md:flex-row md:justify-between md:space-x-8 md:mt-0 p-2">
                    <h2 className="text-6xl">Portfolio</h2>
                    <button
                        className="relative inline-flex items-center justify-center overflow-hidden rounded-lg dark:bg-gr bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500  focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <a
                            href={'/resume.pdf'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-5 py-2 transition-all ease-in duration-75 text-lg font-medium rounded-md hover:bg-slate-600 dark:hover:bg-cyan-900 bg-slate-400 hover:text-black dark:hover:text-white dark:bg-cyan-700 group-hover:bg-opacity-0">
                            {'Resume'}
                        </a>
                    </button>
                </ul>
            </div>
        </nav>
    )
}
