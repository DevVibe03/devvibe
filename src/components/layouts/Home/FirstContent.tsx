import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";

import Balancer from "react-wrap-balancer";

export default function FirstContent() {
    return (
        <>
            <main className="max-w-5xl text-center m-auto py-20 space-y-10">
                <h1 className="uppercase font-bold text-5xl w-2/3 m-auto">
                    Turn your ideas into reality
                </h1>

                <div>
                    <p className="text-base tracking-[0.2em]">
                        <Balancer>
                            Have an idea about an app? Or you might want to create a website for
                            your business? Get in touch with our developers to
                        </Balancer>
                    </p>
                    <p className="text-base tracking-[0.2em]">
                        understand how you can achieve that!
                    </p>
                </div>

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
