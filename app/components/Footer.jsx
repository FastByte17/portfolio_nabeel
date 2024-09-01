import React from "react";
import { useData } from "../utils/data.js";
import { Link } from "react-scroll";

const Footer = () => {
    const { contactDetails, socialsDetails } = useData();
    return (
        <footer className="area-footer p-4 bg-teal-900 sm:p-6  border-t w-full text-white">
            <div className="flex flex-col items-start md:flex-row md:justify-between">
                <div className="flex flex-col gap-4 mb-6 md:mb-0">
                    <Link to={"hero"} smooth duration={500} className="flex items-center cursor-pointer">
                        <img src="/letter-n.png" className="mr-3 h-12 1-12" alt="website Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Nabeel Hussain
                        </span>
                    </Link>
                    <p className="flex-wrap max-w-sm text-white-600 dark:text-white-400">{"Thank you for checking out my portfolio. For any inquiries please feel free to contact me via Email or Linkedin."}</p>
                </div>
                <div className="grid grid-cols-1">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white-900 uppercase dark:text-white">
                            {"Contact Info"}
                        </h2>
                        <ul className="text-white-600 dark:text-white-400">
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
            <div className="sm:flex sm:items-center sm:justify-between border-t border-t-white-700 py-4 mt-4">
                <span className="text-sm text-white-500 sm:text-center dark:text-white-400">
                    {"@ 2024 Designed & Built by Nabeel Hussain"}{" "}
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    {socialsDetails.map((social, index) => (
                        <a
                            href={social.src}
                            target="_blank"
                            className="text-white-500 hover:text-white-900 dark:hover:text-white"
                            key={index}
                            rel="noreferrer">
                            {social.icon("")}
                            <span className="sr-only">{social.type}</span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;