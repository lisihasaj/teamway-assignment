import { ArrowLeft } from "@components/shapes/SvgIcons";
import { Link } from "react-router-dom";
import { PATHS } from "@routes/paths";
import cn from "classnames";
import NotFoundImg from "@assets/images/not-found.png";

export default function NotFound() {
    return (
        <div className="w-full">
            <div className="w-full flex flex-col items-center">
                <img src={NotFoundImg} className="w-[30%] h-auto mb-3" alt="" />
                <span
                    className={cn(
                        "md:text-[2rem]",
                        "text-[1.4rem] text-center font-semibold",
                    )}
                >
                    Page not found!
                </span>
            </div>
            <Link
                to={PATHS().home}
                className="group flex flex-row items-center justify-center mt-5"
            >
                <ArrowLeft className="w-4 h-4 text-indigo-600 group-hover:-translate-x-1" />
                <span className="text-indigo-600 ml-1">Back to home page</span>
            </Link>
        </div>
    );
}
