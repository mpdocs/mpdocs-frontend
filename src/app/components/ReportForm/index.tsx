"use client";

import React from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Label from "@/app/components/Label";
import { FieldsetType, ReportFormValues } from "@/app/components/ReportForm/types";
import { Button, Form } from "antd";
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
      monographs: [
        {
          name: "",
          authors_with_work: "",
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
  const monographArray = useFieldArray({
    control,
    name: "monographs",
  });

  const watchMethodicalWorksArray = watch("methodical_works");
  const watchMonographArray = watch("monographs");

  const controlledMethodicalWorksFields = methodicalWorkArray.fields.map((field, index) => {
    return {
      ...field,
      ...watchMethodicalWorksArray[index],
    };
  });
  const controlledMonographsFields = monographArray.fields.map((field, index) => {
    return {
      ...field,
      ...watchMonographArray[index],
    };
  });

  const appendFields = (fieldsArray: any, fieldset: FieldsetType) => {
    const updatedFieldset = { ...fieldset };
    for (const key in updatedFieldset) {
      if (Object.prototype.hasOwnProperty.call(updatedFieldset, key)) {
        updatedFieldset[key as keyof FieldsetType] = "";
      }
    }
    fieldsArray.append(updatedFieldset);
  };

  const removeFields = (fieldsArray: any, index: number) => {
    fieldsArray.remove(index);
  };

  const formStructure = {
    methodical_works: {
      is_dynamic: true,
      legend: "2.1 Перечень изданных учебно-методических пособий и указаний за 2021-22уч.год ",
      fieldset_structure: {
        name: "Наименование",
        authors: "ФИО авторов",
        type: "Вид: (учебник, пособие, методические указания и т.д)",
        publisher: "Выходные данные",
        pages_count: "Объём в п.л. или стр.",
      },
      instances: controlledMethodicalWorksFields,
      fields_array: methodicalWorkArray,
    },
    monographs: {
      is_dynamic: true,
      legend: "3.1. Сведения об опубликованных монографиях",
      fieldset_structure: {
        name: "Наименование труда",
        authors_with_work: "ФИО авторов с указанием места работы",
        publisher: "Выходные данные",
        pages_count: "Объём в п.л. или стр.",
      },
      instances: controlledMonographsFields,
      fields_array: monographArray,
    },
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
    <Form onFinish={handleSubmit(sendReport)} className="lg:w-5/12 md:w-8/12 sm:w-12/12">
      {Object.entries(formStructure).map(([fieldsetKey, value]) => (
        <fieldset key={fieldsetKey}>
          <legend>{value.legend}</legend>
          <div>
            {value.instances.map((field, index) => (
              <fieldset key={field.id}>
                <legend>№ {index + 1}</legend>
                <Button
                  onClick={() => {
                    removeFields(value.fields_array, index);
                  }}
                  type="primary"
                  htmlType="button"
                  danger
                >
                  Удалить
                  <MinusCircleOutlined style={{ fontSize: "22px" }} className="dynamic-delete-button" />
                </Button>
                {Object.entries(value.fieldset_structure).map(([key, value]) => (
                  <Label key={`${fieldsetKey}.${index}.${key}`} htmlFor={`${fieldsetKey}.${index}.${key}`}>
                    <span>{value}</span>
                    <input
                      type="text"
                      {...register(
                        `${fieldsetKey as keyof ReportFormValues}.${index}.${key as keyof ReportFormValues[keyof ReportFormValues][number]}` as const,
                        {
                          required: "Обязательное поле",
                        },
                      )}
                    />
                  </Label>
                ))}
              </fieldset>
            ))}
          </div>
          <Button
            onClick={() => {
              appendFields(value.fields_array, value.fieldset_structure);
            }}
            type="primary"
          >
            Добавить
          </Button>
        </fieldset>
      ))}

      <Button type="primary" htmlType="submit" disabled={!isValid}>
        Отправить
      </Button>
    </Form>
  );
};

export default ReportForm;
