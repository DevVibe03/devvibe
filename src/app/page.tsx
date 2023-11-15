import FirstContent from "@/components/layouts/Home/FirstContent";
import BgWrapper from "@/components/layouts/BgWrapper";
import NavBar from "@/components/layouts/NavBar";
import SecondContent from "@/components/layouts/Home/SecondContent";
import ThirdContent from "@/components/layouts/Home/ThirdContent";
import ContactUs from "@/components/layouts/Home/ContactUs";

export default function Home() {
    return (
        <>
            <BgWrapper bgImage="/firstContent.svg">
                <NavBar />
                <FirstContent />
            </BgWrapper>

            <BgWrapper bgImage="/whoarewe.svg">
                <SecondContent />
            </BgWrapper>

            <BgWrapper bgImage="/ourThoughts.svg">
                <ThirdContent />
            </BgWrapper>
            <BgWrapper bgImage="/contactUs.svg">
                <ContactUs />
            </BgWrapper>
        </>
    );
}
