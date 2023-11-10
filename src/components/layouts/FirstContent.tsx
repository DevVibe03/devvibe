import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Main() {
    return (
        <>
            <main className="max-w-5xl text-center m-auto py-20 space-y-10">
                <h1 className="uppercase font-bold text-5xl w-2/3 m-auto">
                    Turn your ideas into reality
                </h1>

                <p className="p-10 text-lg tracking-[0.2em] w-full">
                    DevVibe provides solution to anyone with modern technologies and
                    infrastructure. We help build and scale your application so you don't have to
                    worry.
                </p>

                <Button
                    size={"lg"}
                    variant={"ghost"}
                    className="text-black bg-lime-300 shadow-custom rounded-full tracking-widest">
                    Contact
                </Button>

                <section className="flex gap-2 justify-center p-20">
                    <div className="flex items-center gap-3 w-60 bg-[#181818] px-5 py-3 rounded-xl shadow-threeWidgets tracking-widest">
                        <Image src={"/brush.svg"} alt={"brush svg"} width={35} height={35} />
                        <p>UI/UX Design</p>
                    </div>
                    <div className="flex items-center gap-3 w-60 bg-[#181818] px-5 py-3 rounded-xl shadow-threeWidgets tracking-widest">
                        <Image src={"/web.svg"} alt={"brush svg"} width={35} height={35} />
                        <p>Web Dev</p>
                    </div>
                    <div className="flex items-center gap-3 w-60 bg-[#181818] px-5 py-3 rounded-xl shadow-threeWidgets tracking-widest">
                        <Image src={"/mobile.svg"} alt={"brush svg"} width={35} height={35} />
                        <p>UI/UX Design</p>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Main;
