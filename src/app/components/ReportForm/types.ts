import {
  ActivitiesParticipation,
  Article,
  Conference,
  Contest,
  Exhibition,
  MethodicalWork,
  Olympiad,
  Monograph,
  Patent,
  QualificationImprovement,
  ScientificPublication,
  SoftwareProduct,
  StudentWork,
  ReportMutableFields,
} from "@/utils/api/types";

export interface ReportFormValues extends ReportMutableFields {}

export type ReportFormValuesArrayKeys =
  | "qualification_improvement"
  | "methodical_works"
  | "monographs"
  | "scopus_articles"
  | "web_of_science_articles"
  | "vak_articles"
  | "rinc_articles"
  | "conferences"
  | "patents"
  | "software_products"
  | "exhibitions"
  | "contests"
  | "scientific_publications"
  | "student_works"
  | "olympiads"
  | "organizational_participations"
  | "professional_orientation_participations"
  | "educational_participations";

export type ElementOf<T> = T extends Array<infer U> ? U : never;
export type FieldsetsType = ElementOf<ReportFormValues[keyof ReportFormValues]>;

export type FieldsetsTypeKeys =
  | keyof QualificationImprovement
  | keyof MethodicalWork
  | keyof Monograph
  | keyof Article
  | keyof Conference
  | keyof Patent
  | keyof SoftwareProduct
  | keyof Exhibition
  | keyof Contest
  | keyof ScientificPublication
  | keyof StudentWork
  | keyof Olympiad
  | keyof ActivitiesParticipation;

export type StaticInputsKeys = "work_time_coefficient" | "academic_degree" | "position";

export const defaultValues: ReportFormValues = {
  work_time_coefficient: 0.0,
  academic_degree: "",
  position: "",
  qualification_improvement: [
    {
      form: "",
      country: "",
      organization: "",
      course_name: "",
      diploma_number: "",
      diploma_date: "",
      hours_count: 0,
    },
  ],
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
  scopus_articles: [
    {
      name: "",
      authors_with_work: "",
      publisher: "",
      pages_count: "",
    },
  ],
  web_of_science_articles: [
    {
      name: "",
      authors_with_work: "",
      publisher: "",
      pages_count: "",
    },
  ],
  vak_articles: [
    {
      name: "",
      authors_with_work: "",
      publisher: "",
      pages_count: "",
    },
  ],
  rinc_articles: [
    {
      name: "",
      authors_with_work: "",
      publisher: "",
      pages_count: "",
    },
  ],
  conferences: [
    {
      name: "",
      date: "",
      place: "",
      status: "",
      participation_type: "",
    },
  ],
  patents: [
    {
      name: "",
      authors_fullname: "",
      number: 0,
      country: "",
      patent_owner: "",
    },
  ],
  software_products: [
    {
      name: "",
      authors_fullname: "",
      registration_place: "",
      where_used: "",
    },
  ],
  exhibitions: [
    {
      name: "",
      date: "",
      place: "",
      participants_fullname: "",
      exhibition_type: "",
      exhibit_names: "",
      result: "",
    },
  ],
  contests: [
    {
      name: "",
      application_name: "",
      leader_fullname: "",
      responsible_executor_fullname: "",
    },
  ],
  scientific_publications: [
    {
      authors_fullname: "",
      name: "",
      bibliographic_data: "",
    },
  ],
  student_works: [
    {
      contest: "",
      organizer: "",
      name: "",
      authors_fullname: "",
    },
  ],
  olympiads: [
    {
      name: "",
      date: "",
      place: "",
      participant_fullname: "",
      result: "",
    },
  ],
  organizational_participations: [
    {
      content: "",
      participant_degree: "",
      result: "",
      notes: "",
    },
  ],
  professional_orientation_participations: [
    {
      content: "",
      participant_degree: "",
      result: "",
      notes: "",
    },
  ],
  educational_participations: [
    {
      content: "",
      participant_degree: "",
      result: "",
      notes: "",
    },
  ],
};
