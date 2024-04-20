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
    qualificationImprovement: qualificationImprovement;
    methodicalWorks: methodicalWork[];
};

interface qualificationImprovement {
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
                methodicalWorks: [{
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
        name: "methodicalWorks",
    });

    const watchMethodicalWorksArray = watch("methodicalWorks");
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
        console.log(newFields)
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
                    htmlFor={`qualificationImprovement.form`} key={`qualificationImprovement.form`}>
                    <span>{Object.values(qualificationImprovementExample)[0][0]}</span>
                    <textarea
                        className="text-black"
                        id={`qualificationImprovement.form`}
                        {...register(`qualificationImprovement.form` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualificationImprovement.country`} key={`qualificationImprovement.country`}>
                    <span>{Object.values(qualificationImprovementExample)[0][1]}</span>
                    <textarea
                        className="text-black"
                        id={`qualificationImprovement.country`}
                        {...register(`qualificationImprovement.country` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualificationImprovement.organization`} key={`qualificationImprovement.organization`}>
                    <span>{Object.values(qualificationImprovementExample)[0][2]}</span>
                    <textarea
                        className="text-black"
                        id={`qualificationImprovement.organization`}
                        {...register(`qualificationImprovement.organization` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualificationImprovement.course_name`} key={`qualificationImprovement.course_name`}>
                    <span>{Object.values(qualificationImprovementExample)[0][3]}</span>
                    <textarea
                        className="text-black"
                        id={`qualificationImprovement.course_name`}
                        {...register(`qualificationImprovement.course_name` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualificationImprovement.diploma_number`}
                    key={`qualificationImprovement.diploma_number`}>
                    <span>{Object.values(qualificationImprovementExample)[0][4]}</span>
                    <textarea
                        className="text-black"
                        id={`qualificationImprovement.diploma_number`}
                        {...register(`qualificationImprovement.diploma_number` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualificationImprovement.diploma_date`} key={`qualificationImprovement.diploma_date`}>
                    <span>{Object.values(qualificationImprovementExample)[0][5]}</span>
                    <textarea
                        className="text-black"
                        id={`qualificationImprovement.diploma_date`}
                        {...register(`qualificationImprovement.diploma_date` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
                <label
                    className="flex flex-col gap-2"
                    htmlFor={`qualificationImprovement.hours_count`} key={`qualificationImprovement.hours_count`}>
                    <span>{Object.values(qualificationImprovementExample)[0][6]}</span>
                    <textarea
                        className="text-black"
                        id={`qualificationImprovement.hours_count`}
                        {...register(`qualificationImprovement.hours_count` as const, {
                            required: 'Обязательное поле',
                        })}
                    />
                </label>
            </fieldset>

            <fieldset
                className="flex flex-col gap-2 border-2 border-white p-4">
                <legend>{Object.keys(methodicalWorksExample)[0]}</legend>
                {controlledMethodicalWorksFields.map((field, index) => (
                    <>
                        <label
                            className="flex flex-col gap-2"
                            htmlFor={`${field.id}`} key={`${field.id}`}>
                            <span>{Object.values(methodicalWorksExample)[0][1]}</span>
                            <textarea
                                className="text-black"
                                id={`${field.id}-${field}-${field.name}`}
                                {...register(`methodicalWorks.${index}.name` as const, {
                                    required: 'Обязательное поле',
                                })}
                            />
                        </label>
                        <label
                            className="flex flex-col gap-2"
                            htmlFor={`${field.id}`} key={`${field.id}`}>
                            <span>{Object.values(methodicalWorksExample)[0][2]}</span>
                            <textarea
                                className="text-black"
                                id={`${field.id}`}
                                {...register(`methodicalWorks.${index}.authors` as const, {
                                    required: 'Обязательное поле',
                                })}
                            />
                        </label>
                        <label
                            className="flex flex-col gap-2"
                            htmlFor={`${field.id}`} key={`${field.id}`}>
                            <span>{Object.values(methodicalWorksExample)[0][3]}</span>
                            <textarea
                                className="text-black"
                                id={`${field.id}`}
                                {...register(`methodicalWorks.${index}.type` as const, {
                                    required: 'Обязательное поле',
                                })}
                            />
                        </label>
                        <label
                            className="flex flex-col gap-2"
                            htmlFor={`${field.id}`} key={`${field.id}`}>
                            <span>{Object.values(methodicalWorksExample)[0][4]}</span>
                            <textarea
                                className="text-black"
                                id={`${field.id}`}
                                {...register(`methodicalWorks.${index}.publisher` as const, {
                                    required: 'Обязательное поле',
                                })}
                            />
                        </label>
                        <label
                            className="flex flex-col gap-2"
                            htmlFor={`${field.id}`} key={`${field.id}`}>
                            <span>{Object.values(methodicalWorksExample)[0][5]}</span>
                            <textarea
                                className="text-black"
                                id={`${field.id}`}
                                {...register(`methodicalWorks.${index}.pages_count` as const, {
                                    required: 'Обязательное поле',
                                })}
                            />
                        </label>
                    </>
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