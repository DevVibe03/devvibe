import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default function SecondContent() {
    return (
        <>
            <main>
                <section className="flex justify-around pt-10">
                    <div>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
                            Who are we?
                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-xl text-lg">
                            <Balancer>
                                We are a group of passionate software engineers that is determined
                                to impact the world using technology. We want to help you create
                                what you envision and turn them from just ideas into reality.
                            </Balancer>
                        </p>
                    </div>
                    <figure>
                        <p className="rounded-2xl">Johnson</p>
                        <Image src={"/johnson.svg"} alt={""} width={500} height={500} />
                    </figure>
                </section>
                <section className="flex justify-around">
                    <figure>
                        <p className="rounded-2xl">Wei Hup</p>
                        <Image src={"/weihup.svg"} alt={""} width={200} height={200} />
                    </figure>
                    <figure>
                        <p className="rounded-2xl">Sean Ng</p>
                        <Image src={"/sean.svg"} alt={""} width={300} height={300} />
                    </figure>
                </section>
            </main>
        </>
    );
}
