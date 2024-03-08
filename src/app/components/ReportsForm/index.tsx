'use client'


import React from 'react';
import {SubmitHandler, useFieldArray, useForm} from "react-hook-form";

type ReportsData = {
    [key: string]: string[];
};


let exampleData: ReportsData = {
    "1.	Информация о повышении квалификации в период 2021-22 уч. год": ["Форма повышения квалификации", "Страна. организация", "Наименование курса (дисциплины)", "№ диплома (свидетельства), дата выдачи", "Количество часов"],
    // "1.	Информация о повышении квалификации в период 2021-22 уч. ": ["Форма повышения квалификации", "Страна. организация", "Наименование курса (дисциплины)", "№ диплома (свидетельства), дата выдачи", "Количество часов"],
}

type FormValues = {
    fieldArray: Group[];
};

interface Field {
    id: string;
    value: string;
}

interface Group {
    id: string;
    fields: Field[];
}

const ReportsForm = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        setError,
        formState: {isSubmitSuccessful, errors, isValid},
    } = useForm<FormValues>();

    const {fields} = useFieldArray({
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
    const sendReports: SubmitHandler<FormValues> = (data) => {
        try {
            console.log(data)
        } catch (err) {
            console.error(err)
        } finally {
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(sendReports)}>
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
                                    className="text-black"
                                    id={`${fieldsetIndex}-${index}`}
                                    {...register(`fieldArray.${fieldsetIndex}.fields.${index}.value` as const, {
                                        required: 'Обязательное поле',
                                    })}
                                />
                            </label>
                        ))}
                    </fieldset>
                )
            )}
            <button
                type={"submit"}
                disabled={!isValid}
                className="text-black bg-[#C2C2C2] rounded-3xl px-6 py-2 disabled:bg-amber-700"
            >
                Отправить
            </button>
        </form>
    )
        ;
};

export default ReportsForm;