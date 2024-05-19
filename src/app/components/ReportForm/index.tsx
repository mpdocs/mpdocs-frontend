"use client";

import React from "react";
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Label from "@/app/components/Label";
import type { MethodicalWork, ReportFormValues } from "@/app/components/ReportForm/types";
import { Button, Form, Input } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

const ReportForm = () => {
  const {
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

  const appendMethodicalWorkFields = () => {
    const newFields: MethodicalWork = {
      name: "",
      authors: "",
      type: "",
      publisher: "",
      pages_count: "",
    };
    methodicalWorkArray.append(newFields);
  };

  const removeMethodicalWorkFields = (index: number) => {
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
      <fieldset>
        <legend>1. Информация о повышении квалификации в период 2023-2024 уч. год</legend>
        <FormItem>
          <Label htmlFor={`qualification_improvement.form`}>Форма повышения квалификации</Label>
          <Controller
            name="qualification_improvement.form"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onChange={onChange} value={value} onBlur={onBlur} />
            )}
          ></Controller>
        </FormItem>

        <FormItem>
          <Label htmlFor={`qualification_improvement.country`}>Страна</Label>
          <Controller
            name="qualification_improvement.country"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onChange={onChange} value={value} onBlur={onBlur} />
            )}
          ></Controller>
        </FormItem>

        <FormItem>
          <Label htmlFor={`qualification_improvement.organization`}>Организация</Label>
          <Controller
            name="qualification_improvement.organization"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onChange={onChange} value={value} onBlur={onBlur} />
            )}
          ></Controller>
        </FormItem>

        <FormItem>
          <Label htmlFor={`qualification_improvement.course_name`}>Наименование курса (дисциплины)</Label>
          <Controller
            name="qualification_improvement.course_name"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onChange={onChange} value={value} onBlur={onBlur} />
            )}
          ></Controller>
        </FormItem>

        <FormItem>
          <Label htmlFor={`qualification_improvement.diploma_number`}>№ диплома (свидетельства)</Label>
          <Controller
            name="qualification_improvement.diploma_number"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onChange={onChange} value={value} onBlur={onBlur} />
            )}
          ></Controller>
        </FormItem>

        <FormItem>
          <Label htmlFor={`qualification_improvement.diploma_date`}>Дата выдачи</Label>
          <Controller
            name="qualification_improvement.diploma_date"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onChange={onChange} value={value} onBlur={onBlur} />
            )}
          ></Controller>
        </FormItem>

        <FormItem>
          <Label htmlFor={`qualification_improvement.hours_count`}>Количество часов</Label>
          <Controller
            name="qualification_improvement.hours_count"
            defaultValue={0}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onChange={onChange} value={value} onBlur={onBlur} />
            )}
          ></Controller>
        </FormItem>
      </fieldset>

      <fieldset>
        <legend>2.1 Перечень изданных учебно-методических пособий и указаний за 2023-2024 уч.год</legend>
        <div>
          {controlledMethodicalWorksFields.map((field, index) => (
            <fieldset key={index}>
              <legend>№ {index + 1}</legend>
              <Button
                onClick={() => {
                  removeMethodicalWorkFields(index);
                }}
                type="primary"
                htmlType="button"
                danger
              >
                Удалить
                <MinusCircleOutlined style={{ fontSize: "22px" }} className="dynamic-delete-button" />
              </Button>

              <FormItem>
                <Label htmlFor={`methodical_works.${index}.name`}>Наименование</Label>
                <Controller
                  name={`methodical_works.${index}.name`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} value={value} onBlur={onBlur} />
                  )}
                ></Controller>
              </FormItem>

              <FormItem>
                <Label htmlFor={`methodical_works.${index}.authors`}>ФИО авторов</Label>
                <Controller
                  name={`methodical_works.${index}.authors`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} value={value} onBlur={onBlur} />
                  )}
                ></Controller>
              </FormItem>

              <FormItem>
                <Label htmlFor={`methodical_works.${index}.type`}>
                  Вид: (учебник, пособие, методические указания и т.д
                </Label>
                <Controller
                  name={`methodical_works.${index}.type`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} value={value} onBlur={onBlur} />
                  )}
                ></Controller>
              </FormItem>

              <FormItem>
                <Label htmlFor={`methodical_works.${index}.publisher`}>Выходные данные</Label>
                <Controller
                  name={`methodical_works.${index}.publisher`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} value={value} onBlur={onBlur} />
                  )}
                ></Controller>
              </FormItem>

              <FormItem>
                <Label htmlFor={`methodical_works.${index}.pages_count`}>Объём в п.л. или стр.</Label>
                <Controller
                  name={`methodical_works.${index}.pages_count`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} value={value} onBlur={onBlur} />
                  )}
                ></Controller>
              </FormItem>
            </fieldset>
          ))}
        </div>
        <Button onClick={appendMethodicalWorkFields} type="primary" htmlType="submit">
          Добавить
        </Button>
      </fieldset>

      <fieldset>
        <legend>3. Сведения о научной и научно-методической работе</legend>
        <fieldset>
          <legend>3.1. Сведения об опубликованных монографиях</legend>
          <div></div>
        </fieldset>

        <fieldset>
          <legend>3.2 Перечень статей в журналах, опубликованных в 2021-22 уч.году</legend>
        </fieldset>

        <fieldset>
          <legend>
            3.3 Перечень конференций, в которых принимал участие в 2021-22 уч. году. (в том числе с участием студентов)
          </legend>
        </fieldset>

        <fieldset>
          <legend>
            3.4 Перечень международных и Российских патентов, полученных в 2021-22 уч. году (в том числе с участием
            студентов)
          </legend>
        </fieldset>

        <fieldset>
          <legend>3.5 Разработанные и зарегистрированные программные продукты , в т.ч. с участием студентов</legend>
        </fieldset>

        <fieldset>
          <legend>3.5 Участие в выставках, в т.ч. с участием студентов</legend>
        </fieldset>

        <fieldset>
          <legend>3.6 Перечень заявок, поданных на участие в федеральных, региональных и прочих конкурсах НИР</legend>
        </fieldset>
      </fieldset>

      <fieldset>
        <legend>4. Сведения о научно-исследовательской работе совместно со студентами в 2021-22 уч. году.</legend>
        <fieldset>
          <legend>4.1 Перечень научных публикаций с участием студентов</legend>
        </fieldset>

        <fieldset>
          <legend>4.2 Перечень студенческих работ, поданных на конкурсы на лучшую НИР</legend>
        </fieldset>

        <fieldset>
          <legend>4.3 Руководство студентами, участвующих в Олимпиадах</legend>
        </fieldset>
      </fieldset>

      <fieldset>
        <legend>5. Сведения об участии в организационной работе кафедры в 2021-22 уч. году.</legend>
      </fieldset>

      <fieldset>
        <legend>6. Сведения об участии в профориентационной работе</legend>
      </fieldset>

      <fieldset>
        <legend>7. Сведения об участии в учебно- воспитательной работе</legend>
      </fieldset>

      <Button type="primary" htmlType="submit" disabled={!isValid}>
        Отправить
      </Button>
    </Form>
  );
};

export default ReportForm;
