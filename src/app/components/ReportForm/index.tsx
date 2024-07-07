"use client";

import React, { useEffect, useState } from "react";
import { FieldArrayWithId, useFieldArray, useForm, FieldError, UseFieldArrayReturn } from "react-hook-form";
import Label from "@/app/components/Label";
import styles from "./index.module.scss";
import {
  defaultValues,
  FieldsetsType,
  FieldsetsTypeKeys,
  ReportFormProps,
  ReportFormValues,
  ReportFormValuesArrayKeys,
  StaticInputsKeys,
} from "@/app/components/ReportForm/types";
import { Alert, Button, Form, Modal } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";

const ReportForm: React.FC<ReportFormProps> = ({ initialData, onSubmit, setResetForm }) => {
  const [isClient, setIsClient] = useState(false);
  const [savedData, setSavedData] = useState(defaultValues);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const watchAllFields = watch();

  useEffect(() => {
    setResetForm(() => reset);
  }, [reset, setResetForm]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dataFromStorage = localStorage.getItem("reportFormData");
      if (dataFromStorage) {
        setSavedData(JSON.parse(dataFromStorage));
      }
      if (initialData) {
        setSavedData(initialData);
      }
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("reportFormData", JSON.stringify(watchAllFields));
    }
  }, [watchAllFields, isClient]);

  useEffect(() => {
    reset(savedData);
  }, [reset, savedData]);

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

  const controlledFields = (
    fields: Array<FieldArrayWithId<ReportFormValues, keyof FieldsetsType, "id">>,
    watchFields: FieldsetsType[],
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
    fieldsArray: UseFieldArrayReturn<ReportFormValues, ReportFormValuesArrayKeys, "id">,
    fieldsetKey: ReportFormValuesArrayKeys,
  ) => {
    fieldsArray.append({ ...defaultValues[fieldsetKey][0] });
  };

  const removeFields = (
    fieldsArray: UseFieldArrayReturn<ReportFormValues, ReportFormValuesArrayKeys, "id">,
    index: number,
  ) => {
    fieldsArray.remove(index);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    reset();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const formStructure = {
    work_time_coefficient: {
      is_dynamic: false,
      legend: "",
      structure: [
        {
          type: "text",
          field: {
            key: "work_time_coefficient",
            value: "Коэффициент ставки",
            placeholder: "1.0",
          },
        },
      ],
      instances: [],
      fields: [],
    },
    academic_degree: {
      is_dynamic: false,
      legend: "",
      structure: [
        {
          type: "text",
          field: {
            key: "academic_degree",
            value: "Учёная степень",
            placeholder: "К.п.н",
          },
        },
      ],
      instances: [],
      fields: [],
    },
    position: {
      is_dynamic: false,
      legend: "",
      structure: [
        {
          type: "text",
          field: {
            key: "position",
            value: "Должность",
            placeholder: "Доцент",
          },
        },
      ],
      instances: [],
      fields: [],
    },
    qualification_improvement: {
      is_dynamic: true,
      legend: "1. Информация о повышении квалификации",
      structure: [
        {
          type: "text",
          field: {
            key: "form",
            value: "Форма повышения квалификации",
            placeholder: "Повышение квалификации",
          },
        },
        {
          type: "text",
          field: {
            key: "country",
            value: "Страна",
            placeholder: "РФ",
          },
        },
        {
          type: "text",
          field: {
            key: "organization",
            value: "Организация",
            placeholder: "Московский Политех",
          },
        },
        {
          type: "text",
          field: {
            key: "course_name",
            value: "Наименование курса (дисциплины)",
            placeholder: "Программа повышения квалификации преподавателей",
          },
        },
        {
          type: "text",
          field: {
            key: "diploma_number",
            value: "№ диплома (свидетельства)",
            placeholder: "107777 0253595",
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
      legend: "2.1 Перечень изданных учебно-методических пособий и указаний",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование",
            placeholder: "Дискретная математика",
          },
        },
        {
          type: "text",
          field: {
            key: "authors",
            value: "ФИО авторов",
            placeholder: "Муханов С.А.",
          },
        },
        {
          type: "text",
          field: {
            key: "type",
            value: "Вид: (учебник, пособие, методические указания и т.д)",
            placeholder: "Учебное пособие",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
            placeholder: "Московский Политех. ISBN 978-5-2760-2682-4.",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Объём в п.л. или стр.",
            placeholder: "100 с.",
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
            placeholder: "Использование кватернионов при решении некоторых многопараметрических задач",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_with_work",
            value: "ФИО авторов с указанием места работы",
            placeholder: "Муханов С.А.",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
            placeholder: "Алгебра, теория чисел, дискретная геометрия",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Объём в п.л. или стр.",
            placeholder: "10 п. л.",
          },
        },
      ],
      instances: controlledMonographsFields,
      fields: monographs,
    },
    scopus_articles: {
      is_dynamic: true,
      legend:
        "3.2 Перечень статей в журналах, опубликованных в соответствующем отчету уч.году(Публикации в изданиях, индексируемых в базе Scopus)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование статьи",
            placeholder: "Использование кватернионов при решении некоторых многопараметрических задач",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_with_work",
            value: "ФИО авторов и соавторов с указанием места работы",
            placeholder: "Муханов С.А.",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
            placeholder: "Алгебра, теория чисел, дискретная геометрия",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Кол-во печатных листов",
            placeholder: "10 п. л.",
          },
        },
      ],
      instances: controlledScopusArticlesFields,
      fields: scopusArticles,
    },
    web_of_science_articles: {
      is_dynamic: true,
      legend:
        "3.2 Перечень статей в журналах, опубликованных в соответствующем отчету уч.году(Публикации в изданиях, индексируемых в базе Web of Sсience)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование статьи",
            placeholder: "Использование кватернионов при решении некоторых многопараметрических задач",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_with_work",
            value: "ФИО авторов и соавторов с указанием места работы",
            placeholder: "Муханов С.А.",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
            placeholder: "Алгебра, теория чисел, дискретная геометрия",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Кол-во печатных листов",
            placeholder: "10 п. л.",
          },
        },
      ],
      instances: controlledWebOfScienceArticlesFields,
      fields: webOfScienceArticles,
    },
    vak_articles: {
      is_dynamic: true,
      legend:
        "3.2 Перечень статей в журналах, опубликованных в соответствующем отчету уч.году(Публикации в журналах из списка рекомендованных ВАК)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование статьи",
            placeholder: "Использование кватернионов при решении некоторых многопараметрических задач",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_with_work",
            value: "ФИО авторов и соавторов с указанием места работы",
            placeholder: "Муханов С.А.",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
            placeholder: "Алгебра, теория чисел, дискретная геометрия",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Кол-во печатных листов",
            placeholder: "10 п. л.",
          },
        },
      ],
      instances: controlledVakArticlesFields,
      fields: vakArticles,
    },
    rinc_articles: {
      is_dynamic: true,
      legend:
        "3.2 Перечень статей в журналах, опубликованных в соответствующем отчету уч.году(Публикации в прочих изданиях, индексируемых базой РИНЦ)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование статьи",
            placeholder: "Использование кватернионов при решении некоторых многопараметрических задач",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_with_work",
            value: "ФИО авторов и соавторов с указанием места работы",
            placeholder: "Муханов С.А.",
          },
        },
        {
          type: "text",
          field: {
            key: "publisher",
            value: "Выходные данные",
            placeholder: "Алгебра, теория чисел, дискретная геометрия",
          },
        },
        {
          type: "number",
          field: {
            key: "pages_count",
            value: "Кол-во печатных листов",
            placeholder: "10 п. л.",
          },
        },
      ],
      instances: controlledRincArticlesFields,
      fields: rincArticles,
    },
    conferences: {
      is_dynamic: true,
      legend:
        "3.3 Перечень конференций, в которых принимал участие в соответствующем отчету уч. году. (в том числе с участием студентов)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Название конференции",
            placeholder: "Конференция по математике",
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
            placeholder: "Московский Политех",
          },
        },
        {
          type: "text",
          field: {
            key: "status",
            value: "Статус конференции (межвузовская, региональная, международная)",
            placeholder: "Международная конференция",
          },
        },
        {
          type: "text",
          field: {
            key: "participation_type",
            value: "Вид участия (очно или онлайн). Название доклада. При участии студентов указать их ФИО и группу.",
            placeholder: "Очное участие",
          },
        },
      ],
      instances: controlledConferencesFields,
      fields: conferences,
    },
    patents: {
      is_dynamic: true,
      legend:
        "3.4 Перечень международных и Российских патентов, полученных в соответствующем отчету уч. году (в том числе с участием студентов)",
      structure: [
        {
          type: "text",
          field: {
            key: "name",
            value: "Название изобретения",
            placeholder: "Беспилотный транспорт",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_fullname",
            value: "ФИО авторов (для студентов указать группу)",
            placeholder: "221-322",
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
            placeholder: "РФ",
          },
        },
        {
          type: "text",
          field: {
            key: "patent_owner",
            value: "Патентообладатель",
            placeholder: "Московский Политех",
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
            placeholder: "Вывод сведений о выполнении показателей",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_fullname",
            value: "ФИО авторов (для студентов указать группу)",
            placeholder: "221-322",
          },
        },
        {
          type: "text",
          field: {
            key: "registration_place",
            value: "Место регистрации",
            placeholder: "РФ",
          },
        },
        {
          type: "text",
          field: {
            key: "where_used",
            value: "Где используется",
            placeholder: "Кафедра математики",
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
            placeholder: "Карьерный марафон",
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
            placeholder: "ВДНХ",
          },
        },
        {
          type: "text",
          field: {
            key: "participants_fullname",
            value: "ФИО участников (для студентов указать группу)",
            placeholder: "221-322",
          },
        },
        {
          type: "text",
          field: {
            key: "exhibition_type",
            value: "Статус выставки (на базе университета, межвузовская, региональная и т.д.)",
            placeholder: "Межвузовская выставка",
          },
        },
        {
          type: "text",
          field: {
            key: "exhibit_names",
            value: "Названия экспонатов",
            placeholder: "Стенды работодатели",
          },
        },
        {
          type: "text",
          field: {
            key: "result",
            value: "Результат участия (Награды, премия дипломы)",
            placeholder: "Сертификат об участии",
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
            placeholder: "РНФ",
          },
        },
        {
          type: "text",
          field: {
            key: "application_name",
            value: "Наименование заявки (НИР, объем предполагаемого финансирования)",
            placeholder: "НИР",
          },
        },
        {
          type: "text",
          field: {
            key: "leader_fullname",
            value: "ФИО руководителя",
            placeholder: "Муханов С.А.",
          },
        },
        {
          type: "text",
          field: {
            key: "responsible_executor_fullname",
            value: "ФИО ответственного исполнителя",
            placeholder: "Муханов С.А.",
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
            placeholder: "221-322",
          },
        },
        {
          type: "text",
          field: {
            key: "name",
            value: "Название публикации, количество печатных листов",
            placeholder: "Научная статья о математике, 10 п. л.",
          },
        },
        {
          type: "text",
          field: {
            key: "bibliographic_data",
            value: "Библиографические данные",
            placeholder: "Журнал 'Математика и информатика', 2023, №5, стр. 123-135",
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
            placeholder: "Межвузовский конкурс",
          },
        },
        {
          type: "text",
          field: {
            key: "organizer",
            value: "Организатор конкурса",
            placeholder: "Московский Политех",
          },
        },
        {
          type: "text",
          field: {
            key: "name",
            value: "Наименование работы",
            placeholder: "Исследование математических моделей",
          },
        },
        {
          type: "text",
          field: {
            key: "authors_fullname",
            value: "ФИО авторов (для студентов указать группу)",
            placeholder: "221-322",
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
            placeholder: "Межвузовская олимпиада по математике",
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
            placeholder: "Московский Политех",
          },
        },
        {
          type: "text",
          field: {
            key: "participant_fullname",
            value: "ФИО участника, номер группы",
            placeholder: "221-322",
          },
        },
        {
          type: "text",
          field: {
            key: "result",
            value: "Результат",
            placeholder: "Победа в олимпиаде",
          },
        },
      ],
      instances: controlledOlympiadsFields,
      fields: olympiads,
    },
    organizational_participations: {
      is_dynamic: true,
      legend: "5. Сведения об участии в организационной работе кафедры в соответствующем отчету уч. году.",
      structure: [
        {
          type: "text",
          field: {
            key: "content",
            value: "Содержание работы",
            placeholder: "Организация студенческой конференции",
          },
        },
        {
          type: "text",
          field: {
            key: "participant_degree",
            value: "Степень участия",
            placeholder: "Руководитель проекта",
          },
        },
        {
          type: "text",
          field: {
            key: "result",
            value: "Результат",
            placeholder: "Успешное проведение мероприятия с участием студентов",
          },
        },
        {
          type: "text",
          field: {
            key: "notes",
            value: "Примечания, рекомендации",
            placeholder: "Рекомендовано проводить ежегодно",
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
            placeholder: "Участие в ярмарке профессий",
          },
        },
        {
          type: "text",
          field: {
            key: "participant_degree",
            value: "Степень участия",
            placeholder: "Спикер на мероприятии",
          },
        },
        {
          type: "text",
          field: {
            key: "result",
            value: "Результат",
            placeholder: "Привлечение абитуриентов",
          },
        },
        {
          type: "text",
          field: {
            key: "notes",
            value: "Примечания, рекомендации",
            placeholder: "Усилить работу с местными школами",
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
            placeholder: "Проведение занятий по математике",
          },
        },
        {
          type: "text",
          field: {
            key: "participant_degree",
            value: "Степень участия",
            placeholder: "Преподаватель",
          },
        },
        {
          type: "text",
          field: {
            key: "result",
            value: "Результат",
            placeholder: "Улучшение успеваемости учеников",
          },
        },
        {
          type: "text",
          field: {
            key: "notes",
            value: "Примечания, рекомендации",
            placeholder: "Внедрить методику в основной курс",
          },
        },
      ],
      instances: controlledEducationalParticipationsFields,
      fields: educationalParticipations,
    },
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      {Object.entries(formStructure).map(([fieldsetKey, value]) =>
        value.is_dynamic ? (
          <fieldset key={fieldsetKey} className={styles.fieldset}>
            <legend className={styles.fieldset__legend}>{value.legend}</legend>
            <div>
              {value.instances.map((field, index) => (
                <fieldset key={field.id} className={styles.fieldset}>
                  <legend className={styles.fieldset__legend}>№ {index + 1}</legend>
                  <Button
                    onClick={() => {
                      removeFields(
                        value.fields as UseFieldArrayReturn<ReportFormValues, ReportFormValuesArrayKeys, "id">,
                        index,
                      );
                    }}
                    type="primary"
                    htmlType="button"
                    danger
                    className={styles.deleteButton}
                  >
                    Удалить
                    <MinusCircleOutlined style={{ fontSize: "22px" }} className={styles.deleteSvg} />
                  </Button>
                  {value.structure.map((item) => (
                    <Label
                      key={`${fieldsetKey}.${index}.${item.field.key}`}
                      htmlFor={`${fieldsetKey}.${index}.${item.field.key}`}
                      className={styles.fieldset__label}
                    >
                      <span className={styles.fieldset__span}>{item.field.value}</span>
                      <input
                        type={item.type}
                        {...register(
                          // fixme: type of item.field.key
                          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                          `${fieldsetKey as keyof FieldsetsType}.${index}.${item.field.key as FieldsetsTypeKeys}` as const,
                          {
                            required: "Обязательное поле",
                          },
                        )}
                        className={styles.input}
                        placeholder={item.field.placeholder}
                      />
                      {errors?.[fieldsetKey as keyof FieldsetsType]?.[index]?.[
                        item.field.key as keyof FieldsetsType[keyof FieldsetsType][number]
                      ] && (
                        <Alert
                          message={
                            (
                              errors?.[fieldsetKey as keyof FieldsetsType]?.[index]?.[
                                item.field.key as FieldsetsTypeKeys
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
                  value.fields as UseFieldArrayReturn<ReportFormValues, ReportFormValuesArrayKeys, "id">,
                  fieldsetKey as ReportFormValuesArrayKeys,
                );
              }}
              type="primary"
              className={styles.button}
            >
              Добавить
            </Button>
          </fieldset>
        ) : (
          <Label key={`${fieldsetKey}`} htmlFor={`${fieldsetKey}`} className={styles.fieldset__label}>
            <span className={styles.fieldset__span}>{value.structure[0].field.value}</span>
            <input
              type={value.structure[0].type}
              {...register(`${fieldsetKey as StaticInputsKeys}` as const, {
                required: "Обязательное поле",
              })}
              className={styles.input}
              placeholder={value.structure[0].field.placeholder}
            />
            {errors?.[fieldsetKey as StaticInputsKeys] && (
              <Alert
                message={(errors?.[fieldsetKey as StaticInputsKeys] as unknown as FieldError)?.message}
                type="error"
                showIcon
              />
            )}
          </Label>
        ),
      )}

      <Button type="primary" onClick={showModal} className={styles.button} danger>
        Сбросить значения
      </Button>
      <Modal
        title="Подтверждение сброса значений"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Да"
        cancelText="Нет"
      >
        <p>Вы уверены, что хотите сбросить все значения?</p>
      </Modal>

      <Button type="primary" htmlType="submit" disabled={!isValid} className={styles.button}>
        Отправить
      </Button>
    </Form>
  );
};

export default ReportForm;
