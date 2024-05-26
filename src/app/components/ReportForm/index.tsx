"use client";

import React from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Label from "@/app/components/Label";
import type { MethodicalWork, ReportFormValues } from "@/app/components/ReportForm/types";
import { Button, Form, Input } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";

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
    <Form onFinish={handleSubmit(sendReport)} className="lg:w-5/12 md:w-8/12 sm:w-12/12">
      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldset__legend}>
          1. Информация о повышении квалификации в период 2023-2024 уч. год
        </legend>
        <Label htmlFor={`qualification_improvement.form`} className={styles.fieldset__label}>
          <span className={styles.fieldset__span}>Форма повышения квалификации</span>
          <Input
            type="text"
            className={styles.input}
            id={`qualification_improvement.form`}
            placeholder="Ваша квалификация..."
            {...register(`qualification_improvement.form` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.country`} className={styles.fieldset__label}>
          <span className={styles.fieldset__span}>Страна</span>
          <Input
            type="text"
            className={styles.input}
            id={`qualification_improvement.country`}
            placeholder="Ваша страна проживания..."
            {...register(`qualification_improvement.country` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.organization`} className={styles.fieldset__label}>
          <span className={styles.fieldset__span}>Организация</span>
          <Input
            type="text"
            className={styles.input}
            id={`qualification_improvement.organization`}
            placeholder="Ваша организация..."
            {...register(`qualification_improvement.organization` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.course_name`} className={styles.fieldset__label}>
          <span className={styles.fieldset__span}>Наименование курса (дисциплины)</span>
          <Input
            type="text"
            className={styles.input}
            id={`qualification_improvement.course_name`}
            placeholder="Ваша курс..."
            {...register(`qualification_improvement.course_name` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.diploma_number`} className={styles.fieldset__label}>
          <span className={styles.fieldset__span}>№ диплома (свидетельства)</span>
          <Input
            type="number"
            className={styles.input}
            id={`qualification_improvement.diploma_number`}
            placeholder="Номер диплома..."
            {...register(`qualification_improvement.diploma_number` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.diploma_date`} className={styles.fieldset__label}>
          <span className={styles.fieldset__span}>Дата выдачи</span>
          <Input
            type="text"
            className={styles.input}
            placeholder="Введите дату..."
            id={`qualification_improvement.diploma_date`}
            {...register(`qualification_improvement.diploma_date` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
        <Label htmlFor={`qualification_improvement.hours_count`} className={styles.fieldset__label}>
          <span className={styles.fieldset__span}>Количество часов</span>
          <Input
            type="number"
            className={styles.input}
            placeholder="Введите количество часов..."
            id={`qualification_improvement.hours_count`}
            {...register(`qualification_improvement.hours_count` as const, {
              required: "Обязательное поле",
            })}
          />
        </Label>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.fieldset__legend}>
          2.1 Перечень изданных учебно-методических пособий и указаний за 2023-2024 уч.год
        </legend>
        <div>
          {controlledMethodicalWorksFields.map((field, index) => (
            <fieldset key={index} className={styles.fieldset}>
              <legend className={styles.fieldset__legend}>№ {index + 1}</legend>
              <Button
                onClick={() => {
                  onRemoveEducationalAndMethodicalManualsField(index);
                }}
                type="primary"
                htmlType="button"
                className={styles.buttonDelete}
                danger
              >
                Удалить
                <MinusCircleOutlined style={{ fontSize: "22px" }} className="dynamic-delete-button" />
              </Button>
              <Label htmlFor={`methodical_works.${index}.name`} className={styles.fieldset__label}>
                <span className={styles.fieldset__span}>Наименование</span>
                <Input
                  type="text"
                  className={styles.input}
                  id={`methodical_works.${index}.name`}
                  placeholder="Введите наименование пособия..."
                  {...register(`methodical_works.${index}.name` as const, {
                    required: "Обязательное поле",
                  })}
                />
              </Label>
              <Label htmlFor={`methodical_works.${index}.authors`} className={styles.fieldset__label}>
                <span className={styles.fieldset__span}>ФИО авторов</span>
                <Input
                  type="text"
                  className={styles.input}
                  id={`methodical_works.${index}.authors`}
                  placeholder="Введите ФИО автора..."
                  {...register(`methodical_works.${index}.authors` as const, {
                    required: "Обязательное поле",
                  })}
                />
              </Label>
              <Label htmlFor={`methodical_works.${index}.type`} className={styles.fieldset__label}>
                <span className={styles.fieldset__span}>Вид: (учебник, пособие, методические указания и т.д)</span>
                <Input
                  type="text"
                  className={styles.input}
                  id={`methodical_works.${index}.type`}
                  placeholder="Введите вид пособия..."
                  {...register(`methodical_works.${index}.type` as const, {
                    required: "Обязательное поле",
                  })}
                />
              </Label>
              <Label htmlFor={`methodical_works.${index}.publisher`} className={styles.fieldset__label}>
                <span className={styles.fieldset__span}>Выходные данные</span>
                <Input
                  type="text"
                  className={styles.input}
                  id={`methodical_works.${index}.publisher`}
                  placeholder="Введите данные для вывода..."
                  {...register(`methodical_works.${index}.publisher` as const, {
                    required: "Обязательное поле",
                  })}
                />
              </Label>
              <Label htmlFor={`methodical_works.${index}.pages_count`} className={styles.fieldset__label}>
                <span className={styles.fieldset__span}>Объём в п.л. или стр.</span>
                <Input
                  type="number"
                  className={styles.input}
                  id={`methodical_works.${index}.pages_count`}
                  placeholder="Введите объём..."
                  {...register(`methodical_works.${index}.pages_count` as const, {
                    required: "Обязательное поле",
                  })}
                />
              </Label>
            </fieldset>
          ))}
        </div>
        <Button
          onClick={appendEducationalAndMethodicalManualsFields}
          type="primary"
          htmlType="button"
          className={styles.button}
        >
          Добавить
        </Button>
      </fieldset>

      <Button type="primary" htmlType="submit" disabled={!isValid} className={styles.button}>
        Отправить
      </Button>
    </Form>
  );
};

export default ReportForm;
