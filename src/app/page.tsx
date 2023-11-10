import FirstContent from "@/components/layouts/FirstContent";
import FirstContentWrapper from "@/components/layouts/FirstContentWrapper";
import NavBar from "@/components/layouts/NavBar";

export default function Home() {
    return (
        <>
            <FirstContentWrapper>
                <NavBar />
                <FirstContent />
            </FirstContentWrapper>
        </>
    );
}
