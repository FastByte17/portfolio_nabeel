'use client'
import { useData } from "../utils/data";
import { Link } from "react-scroll";


export default function Navigator() {
    const { navigation } = useData()
    return (
        <div className="p-4 fixed top-[50%] left-[5%] rounded-lg backdrop-blur-sm bg-white/30 z-50">
            <ul className="flex flex-col gap-2">
                {navigation.map((route, idx) =>
                (<Link
                    key={idx}
                    className="bg-black text-white rounded-full p-2 hover:scale-90 cursor-pointer scale-90 hover:scale-100 ease-in duration-200"
                    to={route.to}
                    smooth
                    duration={500}
                >
                    {route.name}
                </Link>
                ))}
            </ul>
        </div>
    );
}