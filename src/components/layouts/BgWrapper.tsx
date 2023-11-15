import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
    bgImage: string;
};

export default function BgWrapper({ children, bgImage }: Props) {
    // Dynamic style
    const style = {
        backgroundImage: `url('${bgImage}')`,
    };

    return (
        <div style={style} className="h-screen bg-cover bg-no-repeat">
            {children}
        </div>
    );
}
