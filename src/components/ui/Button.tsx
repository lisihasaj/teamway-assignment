import { CSSProperties, PropsWithChildren } from "react";
import { ArrowRight } from "@components/shapes/SvgIcons";
import cn from "classnames";
import LoadingSpinner from "@components/ui/LoadingSpinner";

interface Props extends PropsWithChildren {
    type?: "submit" | "button" | "reset";
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
                "group flex flex-row justify-center items-center py-[10px] px-[35px] w-fit h-fit rounded-xl text-[14px] font-semibold outline-blue transition ease-in-out duration-150 tracking-wide enabled:bg-black border-2 enabled:border-black enabled:hover:bg-gray-700 enabled:hover:border-gray-700 shadow-sm text-white enabled:focus:bg-gray-700 enabled:focus:border-gray-700",
                props.className,
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
