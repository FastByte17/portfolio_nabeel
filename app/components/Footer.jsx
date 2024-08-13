import React from "react";
import { useData } from "../utils/data.js";
import { Link } from "react-scroll";

const Footer = () => {
    const { contactDetails, socialsDetails } = useData();
    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 border-t area-footer w-full text-black">
            <div className="flex flex-col items-start md:flex-row md:justify-between">
                <div className="flex flex-col gap-4 mb-6 md:mb-0">
                    <Link to={"hero"} smooth duration={500} className="flex items-center cursor-pointer">
                        <img src="/letter-n.png" className="mr-3 h-12 1-12" alt="website Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Nabeel Hussien
                        </span>
                    </Link>
                    <p className="flex-wrap max-w-sm text-gray-600 dark:text-gray-400">{"Thank you for checking out my portfolio. For any business inquiries please feel free to contact me via email or linkedin."}</p>
                </div>
                <div className="grid grid-cols-1">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            {"Contact Info"}
                        </h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            {contactDetails.map((contact, index) => (
                                <li className="flex flex-col mb-4" key={index}>
                                    <div className="flex items-center gap-4">
                                        {contact.icon} <div>{contact.value}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-between border-t border-t-gray-700 py-4 mt-4">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    {"@ 2024 Designed & Built by Nabeel Hussain"}{" "}
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    {socialsDetails.map((socail, index) => (
                        <a
                            href={socail.src}
                            target="_blank"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            key={index}
                            rel="noreferrer">
                            {socail.icon("")}
                            <span className="sr-only">{socail.type}</span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;