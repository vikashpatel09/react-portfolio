import React from "react";

import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import javascriptImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.png";
import githubImg from "../assets/github.png";

const Skills = () => {

    const technologies = [
        {
            id: 1,
            src: htmlImg,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: cssImg,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascriptImg,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImg,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: tailwindImg,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 6,
            src: githubImg,
            title: "GitHub",
            style: "shadow-gray-400",
        },
    ];

    return (
        <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                    <p className="py-4">These are the technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6">
                    {technologies.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;