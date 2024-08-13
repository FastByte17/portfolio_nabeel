import { MdEmail, MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";


export const useData = () => {
    const navigation = [
        { name: "Landing", to: "landing" },
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
    ];

    const mainTech = ["CSS3", "HTML5", "javaScript", "TypeScript"];


    const technologies = [
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "C#" },
        { name: "React" },
        { name: "ASP.NET Blazor" },
        { name: "Tailwind" },
        { name: "Node.js" },
        { name: "React Native" },
        { name: "Next.js" },
        { name: "Git" },
        { name: "HTML5" },
        { name: "CSS" },
    ];


    const socialsDetails = [
        {
            type: "facebook",
            src: "https://www.facebook.com/manu.zewdie",
            icon: (style) => <FaFacebookSquare className={style} />
        },
        {
            type: "linkedin",
            src: "https://www.linkedin.com/in/amanuel-ayezabu-86271a1a0",
            icon: (style) => <FaLinkedin className={style} />
        },
        {
            type: "twitter",
            src: "https://twitter.com/professor_xv",
            icon: (style) => <FaTwitterSquare className={style} />
        },
        {
            type: "github",
            src: "https://github.com/amanuela97",
            icon: (style) => <FaGithubSquare className={style} />
        },
        {
            type: "stackoverflow",
            src: "https://stackoverflow.com/users/15756133/amanuela97?tab=profile",
            icon: (style) => <BsStackOverflow className={style} />
        }
    ];

    const contactDetails = [
        {
            type: "phoneNumber",
            value: "+358",
            icon: <AiFillPhone className="h-5 w-5" />
        },
        {
            type: "email",
            value: "sample@gmail.com",
            icon: <MdEmail className="h-5 w-5" />
        },
        {
            type: "location",
            value: "helsinki, talo",
            icon: <MdLocationOn className="h-5 w-5" />
        }
    ];

    return {
        navigation,
        technologies,
        mainTech,
        socialsDetails,
        contactDetails,
    }
}