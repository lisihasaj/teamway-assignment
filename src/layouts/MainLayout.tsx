import { PropsWithChildren } from "react";

export default function MainLayout(props: PropsWithChildren) {
    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            <div className="w-[60%] bg-gray-200 px-10 py-8 rounded-2xl">
                {props.children}
            </div>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[12px] text-gray-400">
                Teamway assignment by Lisjan Hasaj
            </span>
        </div>
    );
}
