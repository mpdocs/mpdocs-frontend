'use client'


import React from 'react';
import {SubmitHandler, useFieldArray, useForm} from "react-hook-form";

type ReportsData = {
    [key: string]: string[];
};


let qualificationImprovementExample: ReportsData = {
    "1.	Информация о повышении квалификации в период 2021-22 уч. год": ["Форма повышения квалификации", "Страна", "Организация", "Наименование курса (дисциплины)", "№ диплома (свидетельства)", "Дата выдачи", "Количество часов"],
}
let methodicalWorksExample: ReportsData = {
    "2.1	Перечень изданных учебно-методических пособий и указаний за 2021-22уч.год  ": ["№ п/п", "Наименование", "ФИО авторов", "Вид: (учебник, пособие, методические указания и т.д)", "Выходные данные", "Объём в п.л. или стр."],
}

type FormValues = {
    qualification_improvement: qualification_improvement;
    methodical_works: methodicalWork[];
};

interface qualification_improvement {
    form: string;
    country: string;
    organization: string;
    course_name: string;
    diploma_number: string;
    diploma_date: string;
    hours_count: number;
}


interface methodicalWork {
    name: string;
    authors: string;
    type: string;
    publisher: string;
    pages_count: string;
}


const ReportsForm = () => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        watch,
        formState: {isSubmitSuccessful, errors, isValid},
    } = useForm<FormValues>(
        {
            defaultValues: {
                methodical_works: [{
                    name: "",
                    authors: "",
                    type: "",
                    publisher: "",
                    pages_count: ""
                }]
            },
            mode: "onBlur"
        }
    );
    const methodicalWorkArray = useFieldArray({
        control,
        name: "methodical_works",
    });

    const watchMethodicalWorksArray = watch("methodical_works");
    const controlledMethodicalWorksFields = methodicalWorkArray.fields.map((field, index) => {
        return {
            ...field,
            ...watchMethodicalWorksArray[index]
        };
    });


    const appendEducationalAndMethodicalManualsFields = () => {
        const newFields: methodicalWork = {
            name: "",
            authors: "",
            type: "",
            publisher: "",
            pages_count: ""
        }
        methodicalWorkArray.append(newFields);
    };


    const sendReports: SubmitHandler<FormValues> = (data) => {
        console.log()
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
            <fieldset
                className="flex flex-col gap-2 border-2 border-white p-4">
                <legend>{Object.keys(qualificationImprovementExample)[0]}</legend>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualification_improvement.form`} key={`qualification_improvement.form`}>
                    <span>{Object.values(qualificationImprovementExample)[0][0]}</span>
                    <textarea
                        className="text-black"
                        id={`qualification_improvement.form`}
                        {...register(`qualification_improvement.form` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualification_improvement.country`} key={`qualification_improvement.country`}>
                    <span>{Object.values(qualificationImprovementExample)[0][1]}</span>
                    <textarea
                        className="text-black"
                        id={`qualification_improvement.country`}
                        {...register(`qualification_improvement.country` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualification_improvement.organization`} key={`qualification_improvement.organization`}>
                    <span>{Object.values(qualificationImprovementExample)[0][2]}</span>
                    <textarea
                        className="text-black"
                        id={`qualification_improvement.organization`}
                        {...register(`qualification_improvement.organization` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualification_improvement.course_name`} key={`qualification_improvement.course_name`}>
                    <span>{Object.values(qualificationImprovementExample)[0][3]}</span>
                    <textarea
                        className="text-black"
                        id={`qualification_improvement.course_name`}
                        {...register(`qualification_improvement.course_name` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualification_improvement.diploma_number`}
                    key={`qualification_improvement.diploma_number`}>
                    <span>{Object.values(qualificationImprovementExample)[0][4]}</span>
                    <textarea
                        className="text-black"
                        id={`qualification_improvement.diploma_number`}
                        {...register(`qualification_improvement.diploma_number` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualification_improvement.diploma_date`} key={`qualification_improvement.diploma_date`}>
                    <span>{Object.values(qualificationImprovementExample)[0][5]}</span>
                    <textarea
                        className="text-black"
                        id={`qualification_improvement.diploma_date`}
                        {...register(`qualification_improvement.diploma_date` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualification_improvement.hours_count`} key={`qualification_improvement.hours_count`}>
                    <span>{Object.values(qualificationImprovementExample)[0][6]}</span>
                    <textarea
                        className="text-black"
                        id={`qualification_improvement.hours_count`}
                        {...register(`qualification_improvement.hours_count` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
            </fieldset>

            <fieldset
                className="flex flex-col gap-2 border-2 border-white p-4">
                <legend>{Object.keys(methodicalWorksExample)[0]}</legend>
                {controlledMethodicalWorksFields.map((field, index) => (
                    <div key={index}>
                        <label
                            className="flex flex-col gap-2"
                            htmlFor={`methodical_works.${index}.name`} key={`methodical_works.${index}.name`}>
                            <span>{Object.values(methodicalWorksExample)[0][1]}</span>
                            <textarea
                                className="text-black"
                                id={`methodical_works.${index}.name`}
                                {...register(`methodical_works.${index}.name` as const, {
                                    required: 'Обязательное поле',
                                })}
                            />
                        </label>
                        <label
                            className="flex flex-col gap-2"
                            htmlFor={`methodical_works.${index}.authors`} key={`methodical_works.${index}.authors`}>
                            <span>{Object.values(methodicalWorksExample)[0][2]}</span>
                            <textarea
                                className="text-black"
                                id={`methodical_works.${index}.authors`}
                                {...register(`methodical_works.${index}.authors` as const, {
                                    required: 'Обязательное поле',
                                })}
                            />
                        </label>
                        <label
                            className="flex flex-col gap-2"
                            htmlFor={`methodical_works.${index}.type`} key={`methodical_works.${index}.type`}>
                            <span>{Object.values(methodicalWorksExample)[0][3]}</span>
                            <textarea
                                className="text-black"
                                id={`methodical_works.${index}.type`}
                                {...register(`methodical_works.${index}.type` as const, {
                                    required: 'Обязательное поле',
                                })}
                            />
                        </label>
                        <label
                            className="flex flex-col gap-2"
                            htmlFor={`methodical_works.${index}.publisher`} key={`methodical_works.${index}.publisher`}>
                            <span>{Object.values(methodicalWorksExample)[0][4]}</span>
                            <textarea
                                className="text-black"
                                id={`methodical_works.${index}.publisher`}
                                {...register(`methodical_works.${index}.publisher` as const, {
                                    required: 'Обязательное поле',
                                })}
                            />
                        </label>
                        <label
                            className="flex flex-col gap-2"
                            htmlFor={`methodical_works.${index}.pages_count`} key={`methodical_works.${index}.pages_count`}>
                            <span>{Object.values(methodicalWorksExample)[0][5]}</span>
                            <textarea
                                className="text-black"
                                id={`methodical_works.${index}.pages_count`}
                                {...register(`methodical_works.${index}.pages_count` as const, {
                                    required: 'Обязательное поле',
                                })}
                            />
                        </label>
                    </div>
                ))}
                <button onClick={appendEducationalAndMethodicalManualsFields}> Добавить</button>
            </fieldset>

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