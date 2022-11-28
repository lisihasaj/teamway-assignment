import { useNavigate } from "react-router-dom";
import { PATHS } from "@routes/paths";
import Button from "@components/ui/Button";

export default function Home() {
    const push = useNavigate();

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center text-center mt-4 mb-6">
                <span className="w-[70%] text-[22px] font-semibold mb-3">
                    Are you an introvert or an extrovert?
                </span>
                <span className="w-[70%] text-[16px] text-gray-600">
                    To understand that, please answer the following questions
                    and get your results in the end.
                </span>
            </div>
            <Button arrow className="my-6" onClick={() => push(PATHS.survey)}>
                Start the survey
            </Button>
        </div>
    );
}
