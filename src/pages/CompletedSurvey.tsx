import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PATHS } from "@routes/paths";
import cn from "classnames";
import results from "@lib/results.json";
import Button from "@components/ui/Button";

type Result = {
    [key: string]: { [key: string]: string };
};

export default function CompletedSurvey() {
    const { resultId } = useParams();
    const push = useNavigate();

    useEffect(() => {
        if (!(results as Result)[resultId!]) {
            push(PATHS().notFound);
        }
    }, []);

    return (
        <>
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-sm text-gray-400">
                Your result
            </span>
            {(results as Result)[resultId!] && (
                <div className="w-full flex flex-col">
                    <span
                        className={cn(
                            "md:text-[2em]",
                            "text-[1.4em] font-semibold text-center mb-5",
                        )}
                    >
                        {(results as Result)[resultId!].title}
                    </span>
                    <span className="w-full max-h-[21rem] overflow-y-auto text-md text-gray-500 px-2">
                        {(results as Result)[resultId!].description}
                    </span>
                </div>
            )}
            <div className="w-full flex justify-center mt-4">
                <Button color="indigo" onClick={() => push(PATHS().survey)}>
                    Retake the test
                </Button>
            </div>
        </>
    );
}
