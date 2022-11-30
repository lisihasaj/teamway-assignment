import { CSSProperties, PropsWithChildren } from "react";
import { ArrowRight } from "@components/shapes/SvgIcons";
import cn from "classnames";
import LoadingSpinner from "@components/ui/LoadingSpinner";

interface Props extends PropsWithChildren {
    type?: "submit" | "button" | "reset";
    color?: "black" | "indigo";
    style?: CSSProperties;
    className?: string;
    processing?: boolean;
    disabled?: boolean;
    arrow?: boolean;
    tabIndex?: number;
    onClick?: () => void;
}

export default function Button(props: Props) {
    return (
        <button
            onClick={props.onClick}
            type={props.type}
            tabIndex={props.tabIndex}
            className={cn(
                "md:py-[8px] md:px-[35px] md:text-[14px] md:rounded-xl",
                "group flex flex-row justify-center items-center py-[5px] px-[25px] w-fit h-fit rounded-lg text-[13px] font-semibold outline-blue transition ease-in-out duration-150 tracking-wide border-2 text-white shadow-sm disabled:bg-gray-500 disabled:border-gray-500",
                props.className,
                {
                    "enabled:border-black enabled:bg-black enabled:hover:bg-gray-700 enabled:hover:border-gray-700 enabled:focus:bg-gray-700 enabled:focus:border-gray-700":
                        props.color === "black" || !props.color,
                    "enabled:border-indigo-600 enabled:bg-indigo-600 enabled:hover:bg-indigo-500 enabled:hover:border-indigo-500 enabled:focus:bg-indigo-500 enabled:focus:border-indigo-500":
                        props.color === "indigo",
                },
            )}
            disabled={props.disabled}
            style={props.style}
        >
            {props.processing ? (
                <span>
                    <LoadingSpinner size="sm" color="white" />
                </span>
            ) : (
                props.children
            )}
            {props.arrow && (
                <span className="ml-2 group-hover:translate-x-1 group-focus-within:translate-x-1">
                    <ArrowRight className="w-5 h-5" />
                </span>
            )}
        </button>
    );
}
