import { useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { Controller, useFormContext } from "react-hook-form";
import cn from "classnames";

interface Props {
    name: string;
    defaultValues?: { [key: string]: string };
    answers: {
        id: number;
        value: string;
        placeholder: string;
        label: string;
    }[];
}

export default function Question(props: Props) {
    const { control, resetField, watch } = useFormContext();

    useEffect(() => {
        if (watch(props.name) === "") {
            resetField(props.name, { defaultValue: "" });
        }
    }, [JSON.stringify(props.answers)]);

    return (
        <Controller
            control={control}
            name={props.name}
            render={({ field }) => (
                <RadioGroup
                    as="div"
                    className="w-full"
                    value={field.value}
                    onChange={(answer) => {
                        field.onChange(answer);
                    }}
                >
                    {props.answers &&
                        props.answers.map((answer) => (
                            <RadioGroup.Option
                                key={answer.id}
                                value={answer.value}
                                className={({ active, checked }) =>
                                    cn(
                                        "w-full border-[1px] rounded-lg my-2 cursor-pointer bg-white px-3 py-2",
                                        (active || checked) &&
                                            "border-indigo-600",
                                    )
                                }
                            >
                                {({ active, checked }) => (
                                    <div className="w-full flex flex-row items-center justify-start">
                                        <span
                                            className={cn(
                                                "w-6 min-w-6 h-6 min-h-6 flex items-center justify-center mr-3  rounded-md",
                                                active || checked
                                                    ? "text-white bg-indigo-600"
                                                    : "text-gray-500 bg-gray-200",
                                            )}
                                        >
                                            {answer.placeholder.toUpperCase()}
                                        </span>
                                        <RadioGroup.Description
                                            className={cn(
                                                "w-full",
                                                active || checked
                                                    ? "text-black"
                                                    : "text-gray-600",
                                            )}
                                        >
                                            {answer.label}
                                        </RadioGroup.Description>
                                    </div>
                                )}
                            </RadioGroup.Option>
                        ))}
                </RadioGroup>
            )}
        />
    );
}
