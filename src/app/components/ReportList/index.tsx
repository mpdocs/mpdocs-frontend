"use client";

import React, { useEffect, useState } from "react";

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
  },
  scientific_publications: {
    is_dynamic: true,
    legend: "4.1 Перечень научных публикаций с участием студентов",
    structure: {
      authors_fullname: "ФИО авторов (для студентов указать  группу)",
      name: "Название публикации, количество печатных листов)",
      bibliographic_data: "Библиографические данные",
    },
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
  },
};

type Structure = Record<string, string>;

interface Section {
  is_dynamic: boolean;
  legend: string;
  structure: Structure;
}

type FormStructure = Record<string, Section>;

type ReportData = Record<string, any>;

interface ReportDisplayProps {
  formStructure: FormStructure;
}

const ReportDisplay: React.FC<ReportDisplayProps> = ({ formStructure }) => {
  const [reportData, setReportData] = useState<ReportData | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dataFromStorage = localStorage.getItem("reportFormData");
      if (dataFromStorage) {
        setReportData(JSON.parse(dataFromStorage));
      }
    }
  }, []);

  if (!formStructure) {
    return <div style={{ textAlign: "center", marginTop: "20%" }}>Структура формы не найдена</div>;
  }

  if (!reportData) {
    return <div style={{ textAlign: "center", marginTop: "20%" }}>Записи отсутствуют</div>;
  }

  const renderFieldset = (legend: string, fields: Record<string, { label: string; value: string }>) => (
    <fieldset>
      <legend>{legend}</legend>
      {Object.entries(fields).map(([key, value]) => (
        <p key={key}>
          <strong>{value.label}:</strong> <span>{value.value}</span>
        </p>
      ))}
    </fieldset>
  );

  const getFieldValue = (fieldKey: string, fieldData: any): string => {
    return fieldData[fieldKey] || "Не указано";
  };

  const mapStructureToData = (structure: Structure, data: any) => {
    const mappedData: Record<string, { label: string; value: string }> = {};
    for (const [key, label] of Object.entries(structure)) {
      mappedData[key] = { label, value: getFieldValue(key, data) };
    }
    return mappedData;
  };

  return (
    <div>
      {Object.entries(formStructure).map(([sectionKey, sectionValue]) => {
        const sectionData = reportData[sectionKey];

        if (!sectionData) return null;

        if (Array.isArray(sectionData)) {
          return sectionData.length > 0 ? (
            <fieldset key={sectionKey}>
              <legend>{sectionValue.legend}</legend>
              {sectionData.map((item: any, index: number) => (
                <div key={index}>
                  {renderFieldset(`№ ${index + 1}`, mapStructureToData(sectionValue.structure, item))}
                </div>
              ))}
            </fieldset>
          ) : null;
        } else {
          return renderFieldset(sectionValue.legend, mapStructureToData(sectionValue.structure, sectionData));
        }
      })}
    </div>
  );
};

const ReportList: React.FC = () => {
  return <ReportDisplay formStructure={formStructure} />;
};

export default ReportList;
