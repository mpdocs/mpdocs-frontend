"use client";

import React, { useEffect, useState } from "react";
import {
  FieldArrayWithId,
  SubmitHandler,
  useFieldArray,
  UseFieldArrayReturn,
  useForm,
  FieldError,
} from "react-hook-form";
import Label from "@/app/components/Label";
import {
  defaultValues,
  DynamicFieldsetsType,
  ReportFormArrayKeys,
  ReportFormValues,
} from "@/app/components/ReportForm/types";
import { Alert, Button, Form } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import api from "@/utils/api";

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
    formState: { isValid, errors },
  } = useForm<ReportFormValues>({
    defaultValues: savedData,
    mode: "onBlur",
  });

  const qualificationImprovement = useFieldArray({
    control,
    name: "qualification_improvement",
  });
  const methodicalWorks = useFieldArray({
    control,
    name: "methodical_works",
  });
  const monographs = useFieldArray({
    control,
    name: "monographs",
  });
  const scopusArticles = useFieldArray({
    control,
    name: "scopus_articles",
  });
  const webOfScienceArticles = useFieldArray({
    control,
    name: "web_of_science_articles",
  });
  const vakArticles = useFieldArray({
    control,
    name: "vak_articles",
  });
  const rincArticles = useFieldArray({
    control,
    name: "rinc_articles",
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

  const controlledQualificationImprovement = controlledFields(
    qualificationImprovement.fields,
    watchAllFields.qualification_improvement || [],
  );
  const controlledMethodicalWorksFields = controlledFields(
    methodicalWorks.fields,
    watchAllFields.methodical_works || [],
  );
  const controlledMonographsFields = controlledFields(monographs.fields, watchAllFields.monographs || []);
  const controlledScopusArticlesFields = controlledFields(scopusArticles.fields, watchAllFields.scopus_articles || []);
  const controlledWebOfScienceArticlesFields = controlledFields(
    webOfScienceArticles.fields,
    watchAllFields.web_of_science_articles || [],
  );
  const controlledVakArticlesFields = controlledFields(vakArticles.fields, watchAllFields.vak_articles || []);
  const controlledRincArticlesFields = controlledFields(rincArticles.fields, watchAllFields.rinc_articles || []);
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

  const resetForm = () => {
    reset(defaultValues);
  };

  const formStructure = {
    qualification_improvement: {
      is_dynamic: true,
      legend: "1. Информация о повышении квалификации в период 2021-22 уч. год",
      structure: [
        {
          type: "text",
          field: {
            key: "form",
            value: "Форма повышения квалификации",
          },
        },
        {
          type: "text",
          field: {
            key: "country",
            value: "Страна",
          },
        },
        {
          type: "text",
          field: {
            key: "organization",
            value: "Организация",
          },
        },
        {
          type: "text",
          field: {
            key: "course_name",
            value: "Наименование курса (дисциплины)",
          },
        },
        {
          type: "text",
          field: {
            key: "diploma_number",
            value: "№ диплома (свидетельства)",
          },
        },
        {
          type: "date",
          field: {
            key: "diploma_date",
            value: "Дата выдачи диплома",
          },
        },
        {
          type: "number",
          field: {
            key: "hours_count",
            value: "Количество часов",
          },
        },
      ],
      instances: controlledQualificationImprovement,
      fields: qualificationImprovement,
    },
    methodical_works: {
      is_dynamic: true,
      legend: "2.1 Перечень изданных учебно-методических пособий и указаний за 2021-22уч.год ",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование",
          },
        },
        {
          type: "text",
          field: {
            key: "authors",
            value: "ФИО авторов",
          },
        },
        {
          type: "text",
          field: {
            key: "type",
            value: "Вид: (учебник, пособие, методические указания и т.д)",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Объём в п.л. или стр.",
          },
        },
      ],
      instances: controlledMethodicalWorksFields,
      fields: methodicalWorks,
    },
    monographs: {
      is_dynamic: true,
      legend: "3.1. Сведения об опубликованных монографиях",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование труда",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_with_work",
            value: "ФИО авторов с указанием места работы",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Объём в п.л. или стр.",
          },
        },
      ],
      instances: controlledMonographsFields,
      fields: monographs,
    },
    scopus_articles: {
      is_dynamic: true,
      legend:
        "3.2 Перечень статей в журналах, опубликованных в 2021-22 уч.году(Публикации в изданиях, индексируемых в базе Scopus)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование статьи",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_with_work",
            value: "ФИО авторов и соавторов с указанием места работы",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Кол-во печатных листов",
          },
        },
      ],
      instances: controlledScopusArticlesFields,
      fields: scopusArticles,
    },
    web_of_science_articles: {
      is_dynamic: true,
      legend:
        "3.2 Перечень статей в журналах, опубликованных в 2021-22 уч.году(Публикации в изданиях, индексируемых в базе Web of Sсience)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование статьи",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_with_work",
            value: "ФИО авторов и соавторов с указанием места работы",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Кол-во печатных листов",
          },
        },
      ],
      instances: controlledWebOfScienceArticlesFields,
      fields: webOfScienceArticles,
    },
    vak_articles: {
      is_dynamic: true,
      legend:
        "3.2 Перечень статей в журналах, опубликованных в 2021-22 уч.году(Публикации в журналах из списка рекомендованных ВАК)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование статьи",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_with_work",
            value: "ФИО авторов и соавторов с указанием места работы",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Кол-во печатных листов",
          },
        },
      ],
      instances: controlledVakArticlesFields,
      fields: vakArticles,
    },
    rinc_articles: {
      is_dynamic: true,
      legend:
        "3.2 Перечень статей в журналах, опубликованных в 2021-22 уч.году(Публикации в прочих изданиях, индексируемых базой РИНЦ)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование статьи",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_with_work",
            value: "ФИО авторов и соавторов с указанием места работы",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Кол-во печатных листов",
          },
        },
      ],
      instances: controlledRincArticlesFields,
      fields: rincArticles,
    },
    conferences: {
      is_dynamic: true,
      legend:
        "3.3 Перечень конференций, в которых принимал участие в 2021-22 уч. году. (в том числе с участием студентов)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Название конференции",
          },
        },
        {
          type: "date",
          field: {
            key: "date",
            value: "Дата проведения",
          },
        },
        {
          type: "text",
          field: {
            key: "place",
            value: "Место проведения",
          },
        },
        {
          type: "text",
          field: {
            key: "status",
            value: "Статус конференции (межвузовская, региональная, международная)",
          },
        },
        {
          type: "text",
          field: {
            key: "participation_type",
            value: "Вид участия (очно или онлайн). Название доклада. При участии студентов указать их ФИО и группу.",
          },
        },
      ],
      instances: controlledConferencesFields,
      fields: conferences,
    },
    patents: {
      is_dynamic: true,
      legend:
        "3.4 Перечень международных и Российских патентов, полученных в 2021-22 уч. году (в том числе с участием студентов)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Название изобретения",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_fullname",
            value: "ФИО авторов (для студентов указать группу)",
          },
        },
        {
          type: "number",
          field: {
            key: "number",
            value: "№ патента",
          },
        },
        {
          type: "text",
          field: {
            key: "country",
            value: "Страна патентования",
          },
        },
        {
          type: "text",
          field: {
            key: "patent_owner",
            value: "Патентообладатель",
          },
        },
      ],
      instances: controlledPatentsFields,
      fields: patents,
    },
    software_products: {
      is_dynamic: true,
      legend: "3.5 Разработанные и зарегистрированные программные продукты, в т.ч. с участием студентов",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Название программного продукта",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_fullname",
            value: "ФИО авторов (для студентов указать группу)",
          },
        },
        {
          type: "text",
          field: {
            key: "registration_place",
            value: "Место регистрации",
          },
        },
        {
          type: "text",
          field: {
            key: "where_used",
            value: "Где используется",
          },
        },
      ],
      instances: controlledSoftwareProductsFields,
      fields: softwareProducts,
    },
    exhibitions: {
      is_dynamic: true,
      legend: "3.5 Участие в выставках, в т.ч. с участием студентов",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Название выставки",
          },
        },
        {
          type: "date",
          field: {
            key: "date",
            value: "Дата проведения",
          },
        },
        {
          type: "text",
          field: {
            key: "place",
            value: "Место проведения",
          },
        },
        {
          type: "text",
          field: {
            key: "participants_fullname",
            value: "ФИО участников (для студентов указать группу)",
          },
        },
        {
          type: "text",
          field: {
            key: "exhibition_type",
            value: "Статус выставки (на базе университета, межвузовская, региональная и т.д.)",
          },
        },
        {
          type: "text",
          field: {
            key: "exhibit_names",
            value: "Названия экспонатов",
          },
        },
        {
          type: "text",
          field: {
            key: "result",
            value: "Результат участия (Награды, премия дипломы)",
          },
        },
      ],
      instances: controlledExhibitionsFields,
      fields: exhibitions,
    },
    contests: {
      is_dynamic: true,
      legend: "3.6 Перечень заявок, поданных на участие в федеральных, региональных и прочих конкурсах НИР",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование конкурса (ФЦП, РНФ и т.д.)",
          },
        },
        {
          type: "text",
          field: {
            key: "application_name",
            value: "Наименование заявки (НИР, объем предполагаемого финансирования)",
          },
        },
        {
          type: "text",
          field: {
            key: "leader_fullname",
            value: "ФИО руководителя",
          },
        },
        {
          type: "text",
          field: {
            key: "responsible_executor_fullname",
            value: "ФИО ответственного исполнителя",
          },
        },
      ],
      instances: controlledContestsFields,
      fields: contests,
    },
    scientific_publications: {
      is_dynamic: true,
      legend: "4.1 Перечень научных публикаций с участием студентов",
      structure: [
        {
          type: "text",
          field: {
            key: "authors_fullname",
            value: "ФИО авторов (для студентов указать группу)",
          },
        },
        {
          type: "text",
          field: {
            key: "name",
            value: "Название публикации, количество печатных листов",
          },
        },
        {
          type: "text",
          field: {
            key: "bibliographic_data",
            value: "Библиографические данные",
          },
        },
      ],
      instances: controlledScientificPublicationsFields,
      fields: scientificPublications,
    },
    student_works: {
      is_dynamic: true,
      legend: "4.2 Перечень студенческих работ, поданных на конкурсы на лучшую НИР",
      structure: [
        {
          type: "text",
          field: {
            key: "contest",
            value: "Название конкурса. Статус (внутривузовский, межвузовский, всероссийский, международный и т.д.)",
          },
        },
        {
          type: "text",
          field: {
            key: "organizer",
            value: "Организатор конкурса",
          },
        },
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование работы",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_fullname",
            value: "ФИО авторов (для студентов указать группу)",
          },
        },
      ],
      instances: controlledStudentWorksFields,
      fields: studentWorks,
    },
    olympiads: {
      is_dynamic: true,
      legend: "4.3 Руководство студентами, участвующих в Олимпиадах",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Название Олимпиады и ее статус",
          },
        },
        {
          type: "date",
          field: {
            key: "date",
            value: "Дата проведения",
          },
        },
        {
          type: "text",
          field: {
            key: "place",
            value: "Место проведения",
          },
        },
        {
          type: "text",
          field: {
            key: "participant_fullname",
            value: "ФИО участника, номер группы",
          },
        },
        {
          type: "text",
          field: {
            key: "result",
            value: "Результат",
          },
        },
      ],
      instances: controlledOlympiadsFields,
      fields: olympiads,
    },
    organizational_participations: {
      is_dynamic: true,
      legend: "5. Сведения об участии в организационной работе кафедры в 2021-22 уч. году.",
      structure: [
        {
          type: "text",
          field: {
            key: "content",
            value: "Содержание работы",
          },
        },
        {
          type: "text",
          field: {
            key: "participant_degree",
            value: "Степень участия",
          },
        },
        {
          type: "text",
          field: {
            key: "result",
            value: "Результат",
          },
        },
        {
          type: "text",
          field: {
            key: "notes",
            value: "Примечания, рекомендации",
          },
        },
      ],
      instances: controlledOrganizationalParticipationsFields,
      fields: organizationalParticipations,
    },
    professional_orientation_participations: {
      is_dynamic: true,
      legend: "6. Сведения об участии в профориентационной работе",
      structure: [
        {
          type: "text",
          field: {
            key: "content",
            value: "Содержание работы",
          },
        },
        {
          type: "text",
          field: {
            key: "participant_degree",
            value: "Степень участия",
          },
        },
        {
          type: "text",
          field: {
            key: "result",
            value: "Результат",
          },
        },
        {
          type: "text",
          field: {
            key: "notes",
            value: "Примечания, рекомендации",
          },
        },
      ],
      instances: controlledProfessionalOrientationParticipationsFields,
      fields: professionalOrientationParticipations,
    },
    educational_participations: {
      is_dynamic: true,
      legend: "7. Сведения об участии в учебно-воспитательной работе",
      structure: [
        {
          type: "text",
          field: {
            key: "content",
            value: "Содержание работы",
          },
        },
        {
          type: "text",
          field: {
            key: "participant_degree",
            value: "Степень участия",
          },
        },
        {
          type: "text",
          field: {
            key: "result",
            value: "Результат",
          },
        },
        {
          type: "text",
          field: {
            key: "notes",
            value: "Примечания, рекомендации",
          },
        },
      ],
      instances: controlledEducationalParticipationsFields,
      fields: educationalParticipations,
    },
  };

  const sendReport: SubmitHandler<ReportFormValues> = async (data) => {
    console.log();
    try {
      await api.post("/reports/", data);
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
                  {value.structure.map((item) => (
                    <Label
                      key={`${fieldsetKey}.${index}.${item.field.key}`}
                      htmlFor={`${fieldsetKey}.${index}.${item.field.key}`}
                    >
                      <span>{item.field.value}</span>
                      <input
                        type={item.type}
                        {...register(
                          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                          `${fieldsetKey as ReportFormArrayKeys}.${index}.${item.field.key as keyof ReportFormValues[ReportFormArrayKeys][number]}` as const,
                          {
                            required: "Обязательное поле",
                          },
                        )}
                      />
                      {errors?.[fieldsetKey as ReportFormArrayKeys]?.[index]?.[
                        item.field.key as keyof ReportFormValues[ReportFormArrayKeys][number]
                      ] && (
                        <Alert
                          message={
                            (
                              errors?.[fieldsetKey as ReportFormArrayKeys]?.[index]?.[
                                item.field.key as keyof ReportFormValues[ReportFormArrayKeys][number]
                              ] as unknown as FieldError
                            )?.message
                          }
                          type="error"
                          showIcon
                        />
                      )}
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
          <></>
        ),
      )}

      <Button type="primary" onClick={resetForm}>
        Сбросить значения
      </Button>

      <Button type="primary" htmlType="submit" disabled={!isValid}>
        Отправить
      </Button>
    </Form>
  );
};

export default ReportForm;
