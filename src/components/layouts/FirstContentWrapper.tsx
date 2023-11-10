import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

function FirstContentWrapper({ children }: Props) {
    return (
        <div className="h-screen bg-cover bg-[url('/firstcontent.svg')] bg-no-repeat">
            {children}
        </div>
    );
}

export default FirstContentWrapper;
