'use client'


import React from 'react';
import {useFieldArray, useForm} from "react-hook-form";

type ReportsData = {
    [key: string]: string[];
};


let exampleData: ReportsData = {
    "1.	Информация о повышении квалификации в период 2021-22 уч. год": ["Форма повышения квалификации", "Страна. организация", "Наименование курса (дисциплины)", "№ диплома (свидетельства), дата выдачи", "Количество часов"],
    "1.	Информация о повышении квалификации в период 2021-22 уч. ": ["Форма повышения квалификации", "Страна. организация", "Наименование курса (дисциплины)", "№ диплома (свидетельства), дата выдачи", "Количество часов"],
}

type FormValues = {
    fieldArray: { name: string }[];
};
const ReportsForm = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        formState,
        setError,
        formState: {isSubmitSuccessful, errors},

    } = useForm<FormValues>();

    const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
        control,
        name: "fieldArray",
    });
    const watchFieldArray = watch("fieldArray");
    const controlledFields = fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldArray[index]
        };
    });
    return (
        <form>
            {Object.keys(exampleData).map((key, fieldsetIndex) => (
                <fieldset
                    className="flex flex-col gap-2 border-2 border-white p-4"
                    key={key}>
                    <legend>{key}</legend>
                    {exampleData[key].map((label, index) => (
                        <label
                            className="flex flex-col gap-2"
                            htmlFor={`${fieldsetIndex}-${index}`} key={`${fieldsetIndex}-${index}`}>
                            <span>{label}</span>
                            <textarea
                                id={`${fieldsetIndex}-${index}`}
                                {...register(`fieldArray.${fieldsetIndex * 100 + index}` as const, {
                                    required: true,
                                })}
                            />
                        </label>
                    ))}
                </fieldset>
            ))}
            <button
                type={"submit"}
                disabled={!errors.root}
                className="text-black bg-[#C2C2C2] rounded-3xl px-6 py-2 disabled:bg-amber-700"
            >
                Отправить
            </button>
        </form>
    );
};

export default ReportsForm;