import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PATHS } from "@routes/paths";
import cn from "classnames";
import Question from "@components/survey/Question";
import Button from "@components/ui/Button";
import survey from "@lib/survey.json";

type SurveyValues = { [key: string]: string };

export default function Survey() {
    const [loading, setLoading] = useState<boolean>(false);
    const push = useNavigate();
    const [queryParams, setQueryParams] = useSearchParams();

    //Dynamic default values depending on the array of "survey" questions
    const defaultValues = () => {
        let dv = new Map();

        //Elicit default values from the "survey" array &
        //Set default values from the queryParams if value exists
        for (let [i, q] of survey.entries()) {
            dv.set(
                q.name,
                typeof queryParams.get("values")?.[i] === "undefined"
                    ? ""
                    : queryParams.get("values")?.[i],
            );
        }

        return Object.fromEntries(dv);
    };

    const methods = useForm<SurveyValues>({
        defaultValues: defaultValues(),
    });

    //Get the question based on the incremented index in "question" useState var
    const currentQuestion = useMemo(() => {
        return survey.find(
            (q) =>
                q.id ===
                Number(
                    queryParams.get("question")
                        ? queryParams.get("question")
                        : 1,
                ),
        );
    }, [queryParams.get("question")]);

    //Handle question answering up to the last index of "survey" array
    const handleSurvey = () => {
        //Get the updated values
        let stringResult: string = "";
        for (let key in methods.watch()) {
            if (methods.watch()[key] !== "") {
                stringResult += methods.watch()[key];
            }
        }

        //Set react router state
        setQueryParams({
            question:
                currentQuestion?.id === survey.length
                    ? String(currentQuestion?.id!)
                    : String(currentQuestion?.id! + 1),
            values: stringResult,
        });

        //Handle final result if last question is answered
        if (Number(queryParams.get("question")) === survey.length) {
            setLoading(true);
            //Fake loading
            setTimeout(() => {
                setLoading(false);
                push(
                    PATHS(String(Math.floor(Math.random() * 2)))
                        .completedSurvey,
                );
            }, 1000);
        }
    };

    useEffect(() => {
        if (
            typeof queryParams.get("question") === "undefined" ||
            queryParams.get("question") === "1"
        ) {
            setQueryParams({
                question: "1",
            });
        }

        if (typeof currentQuestion === "undefined") {
            push(PATHS().notFound);
        }
    }, []);

    return (
        <FormProvider {...methods}>
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-sm text-gray-400">
                {`${currentQuestion?.id}/${survey.length}`}
            </span>
            <div className="w-full flex flex-col">
                <span
                    className={cn("md:text-xl", "text-lg font-semibold mb-5")}
                >
                    {currentQuestion?.label}
                </span>
                {currentQuestion && (
                    <Question
                        name={currentQuestion?.name!}
                        defaultValues={defaultValues()}
                        answers={currentQuestion?.answers!}
                    />
                )}
                <div className="w-full flex justify-center mt-4">
                    <Button
                        color="indigo"
                        processing={loading}
                        onClick={handleSurvey}
                        disabled={
                            methods.watch(currentQuestion?.name!) === "" ||
                            typeof methods.watch(currentQuestion?.name!) ===
                                "undefined"
                        }
                    >
                        {Number(queryParams.get("question")) === survey.length
                            ? "Finish test"
                            : "Next question"}
                    </Button>
                </div>
            </div>
        </FormProvider>
    );
}
