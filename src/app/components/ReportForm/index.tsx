"use client";

import React, { useEffect, useState } from "react";
import { FieldArrayWithId, SubmitHandler, useFieldArray, UseFieldArrayReturn, useForm } from "react-hook-form";
import Label from "@/app/components/Label";
import {
  defaultValues,
  DynamicFieldsetsType,
  ReportFormArrayKeys,
  ReportFormNonArrayKeys,
  ReportFormValues,
} from "@/app/components/ReportForm/types";
import { Button, Form } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";

const ReportForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [savedData, setSavedData] = useState(defaultValues);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dataFromStorage = localStorage.getItem("reportFormData");
      if (dataFromStorage) {
        setSavedData(JSON.parse(dataFromStorage));
      }
      setIsClient(true);
    }
  }, []);

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isValid },
  } = useForm<ReportFormValues>({
    defaultValues: savedData,
    mode: "onBlur",
  });

  const methodicalWorks = useFieldArray({
    control,
    name: "methodical_works",
  });
  const monographs = useFieldArray({
    control,
    name: "monographs",
  });
  const conferences = useFieldArray({
    control,
    name: "conferences",
  });
  const patents = useFieldArray({
    control,
    name: "patents",
  });
  const softwareProducts = useFieldArray({
    control,
    name: "software_products",
  });
  const exhibitions = useFieldArray({
    control,
    name: "exhibitions",
  });
  const contests = useFieldArray({
    control,
    name: "contests",
  });
  const scientificPublications = useFieldArray({
    control,
    name: "scientific_publications",
  });
  const studentWorks = useFieldArray({
    control,
    name: "student_works",
  });
  const olympiads = useFieldArray({
    control,
    name: "olympiads",
  });
  const organizationalParticipations = useFieldArray({
    control,
    name: "organizational_participations",
  });
  const professionalOrientationParticipations = useFieldArray({
    control,
    name: "professional_orientation_participations",
  });
  const educationalParticipations = useFieldArray({
    control,
    name: "educational_participations",
  });

  const watchAllFields = watch();

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("reportFormData", JSON.stringify(watchAllFields));
    }
  }, [watchAllFields, isClient]);

  useEffect(() => {
    reset(savedData);
  }, [reset, savedData]);

  const controlledFields = (
    fields: Array<FieldArrayWithId<ReportFormValues, ReportFormArrayKeys, "id">>,
    watchFields: DynamicFieldsetsType[],
  ) => fields.map((field, index: number) => ({ ...field, ...watchFields[index] }));

  const controlledMethodicalWorksFields = controlledFields(
    methodicalWorks.fields,
    watchAllFields.methodical_works || [],
  );
  const controlledMonographsFields = controlledFields(monographs.fields, watchAllFields.monographs || []);
  const controlledConferencesFields = controlledFields(conferences.fields, watchAllFields.conferences || []);
  const controlledPatentsFields = controlledFields(patents.fields, watchAllFields.patents || []);
  const controlledSoftwareProductsFields = controlledFields(
    softwareProducts.fields,
    watchAllFields.software_products || [],
  );
  const controlledExhibitionsFields = controlledFields(exhibitions.fields, watchAllFields.exhibitions || []);
  const controlledContestsFields = controlledFields(contests.fields, watchAllFields.contests || []);
  const controlledScientificPublicationsFields = controlledFields(
    scientificPublications.fields,
    watchAllFields.scientific_publications || [],
  );
  const controlledStudentWorksFields = controlledFields(studentWorks.fields, watchAllFields.student_works || []);
  const controlledOlympiadsFields = controlledFields(olympiads.fields, watchAllFields.olympiads || []);
  const controlledOrganizationalParticipationsFields = controlledFields(
    organizationalParticipations.fields,
    watchAllFields.organizational_participations || [],
  );
  const controlledProfessionalOrientationParticipationsFields = controlledFields(
    professionalOrientationParticipations.fields,
    watchAllFields.professional_orientation_participations || [],
  );
  const controlledEducationalParticipationsFields = controlledFields(
    educationalParticipations.fields,
    watchAllFields.educational_participations || [],
  );

  const appendFields = (
    fieldsArray: UseFieldArrayReturn<ReportFormValues, ReportFormArrayKeys, "id">,
    fieldsetKey: ReportFormArrayKeys,
  ) => {
    fieldsArray.append({ ...defaultValues[fieldsetKey][0] });
  };

  const removeFields = (fieldsArray: any, index: number) => {
    fieldsArray.remove(index);
  };

  const formStructure = {
    qualification_improvement: {
      is_dynamic: false,
      legend: "1. Информация о повышении квалификации в период 2021-22 уч. год",
      structure: {
        form: "Форма повышения квалификации",
        country: "Страна",
        organization: "Организация",
        course_name: "Наименование курса (дисциплины)",
        diploma_number: "№ диплома (свидетельства)",
        diploma_date: "Дата выдачи диплома",
        hours_count: "Количество часов",
      },
      instances: [],
      fields: [],
    },
    methodical_works: {
      is_dynamic: true,
      legend: "2.1 Перечень изданных учебно-методических пособий и указаний за 2021-22уч.год ",
      structure: {
        name: "Наименование",
        authors: "ФИО авторов",
        type: "Вид: (учебник, пособие, методические указания и т.д)",
        publisher: "Выходные данные",
        pages_count: "Объём в п.л. или стр.",
      },
      instances: controlledMethodicalWorksFields,
      fields: methodicalWorks,
    },
    monographs: {
      is_dynamic: true,
      legend: "3.1. Сведения об опубликованных монографиях",
      structure: {
        name: "Наименование труда",
        authors_with_work: "ФИО авторов с указанием места работы",
        publisher: "Выходные данные",
        pages_count: "Объём в п.л. или стр.",
      },
      instances: controlledMonographsFields,
      fields: monographs,
    },
    conferences: {
      is_dynamic: true,
      legend:
        "3.3 Перечень конференций, в которых принимал участие в 2021-22 уч. году. (в том числе с участием студентов)",
      structure: {
        name: "Название конференции",
        date: "Ддата проведения",
        place: "Место проведения",
        status: "Статус конференции (межвузовская, региональная, международная)",
        participation_type:
          "Вид участия ( очно или онлайн). Название доклада. При  участии студентов указать их ФИО и группу.",
      },
      instances: controlledConferencesFields,
      fields: conferences,
    },
    patents: {
      is_dynamic: true,
      legend:
        "3.4 Перечень международных и Российских патентов,  полученных в 2021-22 уч. году  (в том числе с участием студентов)  ",
      structure: {
        name: "Название  изобретения",
        authors_fullname: "ФИО авторов (для студентов указать группу)",
        number: "№ патента",
        country: "Страна патентования",
        patent_owner: "Патентообладатель",
      },
      instances: controlledPatentsFields,
      fields: patents,
    },
    software_products: {
      is_dynamic: true,
      legend: "3.5 Разработанные и зарегистрированные  программные продукты , в т.ч. с участием студентов",
      structure: {
        name: "Название программного продукта",
        authors_fullname: "ФИО авторов (для студентов указать группу)",
        registration_place: "Место регистрации",
        where_used: "Где используется",
      },
      instances: controlledSoftwareProductsFields,
      fields: softwareProducts,
    },
    exhibitions: {
      is_dynamic: true,
      legend: "3.5 Участие в выставках, в т.ч. с участием студентов",
      structure: {
        name: "Название выставки",
        date: "Дата проведения",
        place: "Место проведения",
        participants_fullname: "ФИО участников (для студентов указать группу)",
        exhibition_type: "Статус выставки (на базе университета, межвузовская, региональная и т.д.)",
        exhibit_names: "Названия экспонатов",
        result: "Результат участия (Награды, премия дипломы)",
      },
      instances: controlledExhibitionsFields,
      fields: exhibitions,
    },
    contests: {
      is_dynamic: true,
      legend: "3.6 Перечень заявок, поданных на участие в федеральных, региональных и прочих конкурсах НИР",
      structure: {
        names: "Наименование конкурса (ФЦП, РНФ и т.д.)",
        application_names: "Наименование заявки (НИР, объем предполагаемого финансирования)",
        leader_fullnames: "ФИО руководителя",
        responsible_executor_fullnames: "ФИО ответственного исполнителя",
      },
      instances: controlledContestsFields,
      fields: contests,
    },
    scientific_publications: {
      is_dynamic: true,
      legend: "4.1 Перечень научных публикаций с участием студентов",
      structure: {
        authors_fullname: "ФИО авторов (для студентов указать  группу)",
        name: "Название публикации, количество печатных листов)",
        bibliographic_data: "Библиографические данные",
      },
      instances: controlledScientificPublicationsFields,
      fields: scientificPublications,
    },
    student_works: {
      is_dynamic: true,
      legend: "4.2 Перечень студенческих работ, поданных на конкурсы на лучшую НИР",
      structure: {
        contest: "Название  конкурса. Статус (внутривузовский, межвузовский, всероссийский, международный и т.д.)",
        organizer: "Организатор конкурса",
        name: "Наименование работы",
        authors_fullname: "ФИО авторов (для студентов указать  группу)",
      },
      instances: controlledStudentWorksFields,
      fields: studentWorks,
    },
    olympiads: {
      is_dynamic: true,
      legend: "4.3 Руководство студентами, участвующих  в Олимпиадах",
      structure: {
        name: "Название Олимпиады и ее статус",
        date: "Дата проведения",
        place: "Место проведения",
        participant_fullname: "ФИО участника, номер группы",
        result: "Результат",
      },
      instances: controlledOlympiadsFields,
      fields: olympiads,
    },
    organizational_participations: {
      is_dynamic: true,
      legend: "5. Сведения об участии в организационной работе кафедры  в 2021-22 уч. году.",
      structure: {
        content: "Содержание работы",
        participant_degree: "Степень участия",
        result: "Результат",
        notes: "Примечания, рекомендации",
      },
      instances: controlledOrganizationalParticipationsFields,
      fields: organizationalParticipations,
    },
    professional_orientation_participations: {
      is_dynamic: true,
      legend: "6. Сведения об участии в профориентационной работе",
      structure: {
        content: "Содержание работы",
        participant_degree: "Степень участия",
        result: "Результат",
        notes: "Примечания, рекомендации",
      },
      instances: controlledProfessionalOrientationParticipationsFields,
      fields: professionalOrientationParticipations,
    },
    educational_participations: {
      is_dynamic: true,
      legend: "7. Сведения об участии в учебно- воспитательной работе",
      structure: {
        content: "Содержание работы",
        participant_degree: "Степень участия",
        result: "Результат",
        notes: "Примечания, рекомендации",
      },
      instances: controlledEducationalParticipationsFields,
      fields: educationalParticipations,
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
      {Object.entries(formStructure).map(([fieldsetKey, value]) =>
        value.is_dynamic ? (
          <fieldset key={fieldsetKey}>
            <legend>{value.legend}</legend>
            <div>
              {value.instances.map((field, index) => (
                <fieldset key={field.id}>
                  <legend>№ {index + 1}</legend>
                  <Button
                    onClick={() => {
                      removeFields(value.fields, index);
                    }}
                    type="primary"
                    htmlType="button"
                    danger
                  >
                    Удалить
                    <MinusCircleOutlined style={{ fontSize: "22px" }} className="dynamic-delete-button" />
                  </Button>
                  {Object.entries(value.structure).map(([key, value]) => (
                    <Label key={`${fieldsetKey}.${index}.${key}`} htmlFor={`${fieldsetKey}.${index}.${key}`}>
                      <span>{value}</span>
                      <input
                        type="text"
                        {...register(`${fieldsetKey as ReportFormArrayKeys}.${index}.${key}` as const, {
                          required: "Обязательное поле",
                        })}
                      />
                    </Label>
                  ))}
                </fieldset>
              ))}
            </div>
            <Button
              onClick={() => {
                appendFields(
                  value.fields as UseFieldArrayReturn<ReportFormValues, ReportFormArrayKeys, "id">,
                  fieldsetKey as ReportFormArrayKeys,
                );
              }}
              type="primary"
            >
              Добавить
            </Button>
          </fieldset>
        ) : (
          <fieldset key={fieldsetKey}>
            <legend>{value.legend}</legend>
            <div>
              {Object.entries(value.structure).map(([key, value]) => (
                <Label key={`${fieldsetKey}.${key}`} htmlFor={`${fieldsetKey}.${key}`}>
                  <span>{value}</span>
                  <input
                    type="text"
                    {...register(
                      `${fieldsetKey as ReportFormNonArrayKeys}.${key as keyof ReportFormValues[ReportFormNonArrayKeys]}` as const,
                      {
                        required: "Обязательное поле",
                      },
                    )}
                  />
                </Label>
              ))}
            </div>
          </fieldset>
        ),
      )}

      <Button type="primary" htmlType="submit" disabled={!isValid}>
        Отправить
      </Button>
    </Form>
  );
};

export default ReportForm;
