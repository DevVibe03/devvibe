"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IconContext } from "react-icons";

function NavBar() {
    return (
        <>
            <header className="flex justify-between max-w-[85rem] m-auto p-3 ">
                <Link href={"/"} className="font-bold text-2xl">
                    DevVibe.
                </Link>

                <nav className="flex justify-between w-5/12">
                    <Link className={buttonVariants({ variant: "ghost" })} href={"/"}>
                        About
                    </Link>
                    <Link className={buttonVariants({ variant: "ghost" })} href={"/process"}>
                        Process
                    </Link>
                    <Link className={buttonVariants({ variant: "ghost" })} href={"/portfolio"}>
                        Portfolio
                    </Link>
                    <Link className={buttonVariants({ variant: "ghost" })} href={"/contact"}>
                        Contact Us
                    </Link>
                </nav>

                <section className="flex items-center justify-between w-24">
                    <IconContext.Provider value={{ className: "w-6 h-6" }}>
                        <FaInstagram />
                        <FaXTwitter />
                        <FaLinkedin />
                    </IconContext.Provider>
                </section>
            </header>
        </>
    );
}

export default NavBar;
