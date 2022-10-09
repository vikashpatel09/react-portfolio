import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={25} />
                </>
            ),
            href: "https://www.linkedin.com/in/vikashpatel09",
            style: "rounded-tr-md bg-blue-600",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={25} />
                </>
            ),
            href: "https://github.com/vikashpatel09",
            style: "bg-gray-800",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={25} />
                </>
            ),
            href: "mailto:vk0708p@gmail.com",
            style: "bg-cyan-600",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={25} />
                </>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md bg-gray-600",
            download: true,
        },
    ];

    return (
        <div className="hidden md:flex flex-col fixed top-[32%] left-0">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={`w-[160px] h-[55px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 ${style}`}>
                        <a href={href} className="flex justify-between items-center w-full text-gray-300" download={download} target="_blank" rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;