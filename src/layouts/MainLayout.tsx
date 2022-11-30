import { PropsWithChildren } from "react";
import cn from "classnames";

export default function MainLayout(props: PropsWithChildren) {
    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            <div
                className={cn(
                    "md:w-[60%]",
                    "2sm:px-10",
                    "sm:w-[80%] sm:px-5",
                    "relative w-[90%] bg-gray-200 px-2 py-12 rounded-2xl",
                )}
            >
                {props.children}
            </div>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[12px] text-center text-gray-400">
                Teamway assignment by Lisjan Hasaj
            </span>
        </div>
    );
}
