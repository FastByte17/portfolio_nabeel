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

    const mainTech = ["CSS3", "HTML5", "JavaScript", "TypeScript"];


    const technologies = [
        {
            name: "JavaScript (ES6+)", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-javascript-plain colored"></i>
        },
        {
            name: "TypeScript", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-typescript-plain colored"></i>
        },
        {
            name: "C#", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-csharp-plain colored"></i>
        },
        {
            name: "React", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-react-original colored"></i>
        },
        {
            name: "ASP.NET Blazor", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-blazor-original colored"></i>
        },
        {
            name: "Tailwind", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-tailwindcss-original colored"></i>
        },
        {
            name: "Node.js", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-nodejs-plain-wordmark colored"></i>
        },
        {
            name: "Next.js", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-nextjs-plain colored"></i>
        },
        {
            name: "Git", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-git-plain colored"></i>
        },
        {
            name: "HTML5", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-html5-plain-wordmark colored"></i>
        },
        {
            name: "CSS", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-css3-plain colored"></i>
        },
        {
            name: "Ionic", icon: (size) => <i style={{ fontSize: `${size}em` }} class="devicon-ionic-original-wordmark colored"></i>

        }
    ];


    const socialsDetails = [
        {
            type: "facebook",
            src: "",
            icon: (style) => <FaFacebookSquare className={style} />
        },
        {
            type: "linkedin",
            src: "https://www.linkedin.com/in/hussainnabeel/",
            icon: (style) => <FaLinkedin className={style} />
        },
        {
            type: "twitter",
            src: "",
            icon: (style) => <FaTwitterSquare className={style} />
        },
        {
            type: "github",
            src: "https://github.com/FastByte17",
            icon: (style) => <FaGithubSquare className={style} />
        },
        {
            type: "stackoverflow",
            src: "",
            icon: (style) => <BsStackOverflow className={style} />
        }
    ];

    const contactDetails = [
        /* {
            type: "phoneNumber",
            value: "+358",
            icon: <AiFillPhone className="h-5 w-5" />
        }, */
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

    const aboutDescription = {
        desc: `A self-motivated, innovative individual and a team player with a
                curiosity to learn, an eye for detail and a deep-rooted passion
                for software development. I am seeking an opportunity to work
                with a company that will enable me to design, develop and work
                on creating a rewarding digital experience for users.`
    };


    return {
        navigation,
        technologies,
        mainTech,
        socialsDetails,
        contactDetails,
        aboutDescription
    }
}