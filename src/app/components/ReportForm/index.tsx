"use client";

import React from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Label from "@/app/components/Label";

type FormValues = {
  qualification_improvement: qualificationImprovement;
  methodical_works: methodicalWork[];
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

const ReportForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: {
      methodical_works: [
        {
          name: "",
          authors: "",
          type: "",
          publisher: "",
          pages_count: "",
        },
      ],
    },
    mode: "onBlur",
  });
  const methodicalWorkArray = useFieldArray({
    control,
    name: "methodical_works",
  });

  const watchMethodicalWorksArray = watch("methodical_works");
  const controlledMethodicalWorksFields = methodicalWorkArray.fields.map(
    (field, index) => {
      return {
        ...field,
        ...watchMethodicalWorksArray[index],
      };
    },
  );

  const appendEducationalAndMethodicalManualsFields = () => {
    const newFields: methodicalWork = {
      name: "",
      authors: "",
      type: "",
      publisher: "",
      pages_count: "",
    };
    methodicalWorkArray.append(newFields);
  };

  const onRemoveEducationalAndMethodicalManualsField = (index: number) => {
    methodicalWorkArray.remove(index);
  }

  const sendReport: SubmitHandler<FormValues> = (data) => {
    console.log();
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(sendReport)} className="lg:w-5/12 md:w-8/12 sm:w-12/12">
      <fieldset className="flex flex-col gap-2 border-2 border-white p-4">
        <legend>
          1. Информация о повышении квалификации в период 2023-2024  уч. год
        </legend>
        <Label htmlFor={`qualification_improvement.form`}>
          <span>Форма повышения квалификации</span>
          <input
            className="text-black"
            type="text"
            id={`qualification_improvement.form`}
            {...register(`qualification_improvement.form` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.country`}>
          <span>Страна</span>
          <input
            type="text"
            className="text-black"
            id={`qualification_improvement.country`}
            {...register(`qualification_improvement.country` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label
          htmlFor={`qualification_improvement.organization`}
          key={`qualification_improvement.organization`}
        >
          <span>Организация</span>
          <input
            type="text"
            className="text-black"
            id={`qualification_improvement.organization`}
            {...register(`qualification_improvement.organization` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.course_name`}>
          <span>Наименование курса (дисциплины)</span>
          <input
            type="text"
            className="text-black"
            id={`qualification_improvement.course_name`}
            {...register(`qualification_improvement.course_name` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.diploma_number`}>
          <span>№ диплома (свидетельства)</span>
          <input
            type="text"
            className="text-black"
            id={`qualification_improvement.diploma_number`}
            {...register(`qualification_improvement.diploma_number` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.diploma_date`}>
          <span>Дата выдачи</span>
          <input
            type="text"
            className="text-black"
            id={`qualification_improvement.diploma_date`}
            {...register(`qualification_improvement.diploma_date` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.hours_count`}>
          <span>Количество часов</span>
          <input
            type="text"
            className="text-black"
            id={`qualification_improvement.hours_count`}
            {...register(`qualification_improvement.hours_count` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
      </fieldset>

      <fieldset className="flex flex-col gap-2 border-2 border-white p-4">
        <legend>
          2.1 Перечень изданных учебно-методических пособий и указаний за
          2023-2024 уч.год
        </legend>
        <div className="flex flex-col gap-6">
        {controlledMethodicalWorksFields.map((field, index) => (
          <fieldset key={index} className="flex flex-col gap-2 border-2 border-white p-4">
            <legend>№ {index + 1}</legend>
            <button type={"button"}
                    onClick={() => onRemoveEducationalAndMethodicalManualsField(index)}
                    className="w-max rounded-md bg-red-500 px-3 py-2 text-sm font-semibold
        text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Удалить
            </button>
            <Label htmlFor={`methodical_works.${index}.name`}>
              <span>Наименование</span>
              <input
                type="text"
                className="text-black"
                id={`methodical_works.${index}.name`}
                {...register(`methodical_works.${index}.name` as const, {
                  required: "Обязательное поле",
                })}
              />
            </Label>
            <Label htmlFor={`methodical_works.${index}.authors`}>
              <span>ФИО авторов</span>
              <input
                type="text"
                className="text-black"
                id={`methodical_works.${index}.authors`}
                {...register(`methodical_works.${index}.authors` as const, {
                  required: "Обязательное поле",
                })}
              />
            </Label>
            <Label htmlFor={`methodical_works.${index}.type`}>
              <span>Вид: (учебник, пособие, методические указания и т.д)</span>
              <input
                type="text"
                className="text-black"
                id={`methodical_works.${index}.type`}
                {...register(`methodical_works.${index}.type` as const, {
                  required: "Обязательное поле",
                })}
              />
            </Label>
            <Label htmlFor={`methodical_works.${index}.publisher`}>
              <span>Выходные данные</span>
              <input
                type="text"
                className="text-black"
                id={`methodical_works.${index}.publisher`}
                {...register(`methodical_works.${index}.publisher` as const, {
                  required: "Обязательное поле",
                })}
              />
            </Label>
            <Label htmlFor={`methodical_works.${index}.pages_count`}>
              <span>Объём в п.л. или стр.</span>
              <input
                type="text"
                className="text-black"
                id={`methodical_works.${index}.pages_count`}
                {...register(`methodical_works.${index}.pages_count` as const, {
                  required: "Обязательное поле",
                })}
              />
            </Label>
          </fieldset>
        ))}
        </div>
        <button onClick={appendEducationalAndMethodicalManualsFields} className="rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold
        text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          Добавить
        </button>
      </fieldset>

      <button
        type={"submit"}
        disabled={!isValid}
        className="rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold
        text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Отправить
      </button>
    </form>
  );
};

export default ReportForm;
