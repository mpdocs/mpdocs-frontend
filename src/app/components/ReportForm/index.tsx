"use client";

import React from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Label from "@/app/components/Label";
import type { MethodicalWork, ReportFormValues } from "@/app/components/ReportForm/types";
import { Button, Input } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
const ReportForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isValid },
  } = useForm<ReportFormValues>({
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
  const controlledMethodicalWorksFields = methodicalWorkArray.fields.map((field, index) => {
    return {
      ...field,
      ...watchMethodicalWorksArray[index],
    };
  });

  const appendEducationalAndMethodicalManualsFields = () => {
    const newFields: MethodicalWork = {
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
  };

  const sendReport: SubmitHandler<ReportFormValues> = (data) => {
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
      <fieldset className="flex flex-col gap-2 border-2 rounded-2xl border-white p-4">
        <legend>1. Информация о повышении квалификации в период 2023-2024 уч. год</legend>
        <Label htmlFor={`qualification_improvement.form`}>
          <span>Форма повышения квалификации</span>
          <Input
            type="text"
            id={`qualification_improvement.form`}
            {...register(`qualification_improvement.form` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.country`}>
          <span>Страна</span>
          <Input
            type="text"
            id={`qualification_improvement.country`}
            {...register(`qualification_improvement.country` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.organization`} key={`qualification_improvement.organization`}>
          <span>Организация</span>
          <Input
            type="text"
            id={`qualification_improvement.organization`}
            {...register(`qualification_improvement.organization` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.course_name`}>
          <span>Наименование курса (дисциплины)</span>
          <Input
            type="text"
            id={`qualification_improvement.course_name`}
            {...register(`qualification_improvement.course_name` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.diploma_number`}>
          <span>№ диплома (свидетельства)</span>
          <Input
            type="text"
            id={`qualification_improvement.diploma_number`}
            {...register(`qualification_improvement.diploma_number` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.diploma_date`}>
          <span>Дата выдачи</span>
          <Input
            type="text"
            id={`qualification_improvement.diploma_date`}
            {...register(`qualification_improvement.diploma_date` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.hours_count`}>
          <span>Количество часов</span>
          <Input
            type="text"
            id={`qualification_improvement.hours_count`}
            {...register(`qualification_improvement.hours_count` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
      </fieldset>

      <fieldset className="flex flex-col gap-2 border-2 rounded-2xl border-white p-4">
        <legend>2.1 Перечень изданных учебно-методических пособий и указаний за 2023-2024 уч.год</legend>
        <div className="flex flex-col gap-6">
          {controlledMethodicalWorksFields.map((field, index) => (
            <fieldset key={index} className="flex flex-col gap-2 border-2 rounded-2xl border-white p-4">
              <legend>№ {index + 1}</legend>
              <Button
                onClick={() => {
                  onRemoveEducationalAndMethodicalManualsField(index);
                }}
                className="flex items-center justify-between"
                type="primary"
                htmlType="button"
                danger
              >
                Удалить
                <MinusCircleOutlined style={{ fontSize: "22px" }} className="dynamic-delete-button" />
              </Button>
              <Label htmlFor={`methodical_works.${index}.name`}>
                <span>Наименование</span>
                <Input
                  type="text"
                  id={`methodical_works.${index}.name`}
                  {...register(`methodical_works.${index}.name` as const, {
                    required: "Обязательное поле",
                  })}
                />
              </Label>
              <Label htmlFor={`methodical_works.${index}.authors`}>
                <span>ФИО авторов</span>
                <Input
                  type="text"
                  id={`methodical_works.${index}.authors`}
                  {...register(`methodical_works.${index}.authors` as const, {
                    required: "Обязательное поле",
                  })}
                />
              </Label>
              <Label htmlFor={`methodical_works.${index}.type`}>
                <span>Вид: (учебник, пособие, методические указания и т.д)</span>
                <Input
                  type="text"
                  id={`methodical_works.${index}.type`}
                  {...register(`methodical_works.${index}.type` as const, {
                    required: "Обязательное поле",
                  })}
                />
              </Label>
              <Label htmlFor={`methodical_works.${index}.publisher`}>
                <span>Выходные данные</span>
                <Input
                  type="text"
                  id={`methodical_works.${index}.publisher`}
                  {...register(`methodical_works.${index}.publisher` as const, {
                    required: "Обязательное поле",
                  })}
                />
              </Label>
              <Label htmlFor={`methodical_works.${index}.pages_count`}>
                <span>Объём в п.л. или стр.</span>
                <Input
                  type="text"
                  id={`methodical_works.${index}.pages_count`}
                  {...register(`methodical_works.${index}.pages_count` as const, {
                    required: "Обязательное поле",
                  })}
                />
              </Label>
            </fieldset>
          ))}
        </div>
        <Button onClick={appendEducationalAndMethodicalManualsFields} type="primary" htmlType="submit">
          Добавить
        </Button>
      </fieldset>

      <Button type="primary" htmlType="submit" className="mt-2 m-auto w-full" disabled={!isValid}>
        Отправить
      </Button>
    </form>
  );
};

export default ReportForm;
