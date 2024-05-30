export interface QualificationImprovement {
  form: string;
  country: string;
  organization: string;
  course_name: string;
  diploma_number: string;
  diploma_date: string;
  hours_count: number;
}

export interface MethodicalWork {
  name: string;
  authors: string;
  type: string;
  publisher: string;
  pages_count: string;
}

export interface Monograph {
  name: string;
  authors_with_work: string;
  publisher: string;
  pages_count: string;
}

export interface Article {
  name: string;
  authors_with_work: string;
  publisher: string;
  pages_count: string;
}

export interface Conference {
  name: string;
  date: string; // DateTime
  place: string;
  status: string;
  participation_type: string;
}

export interface Patent {
  name: string;
  authors_fullname: string;
  number: number;
  country: string;
  patent_owner: string;
}

export interface SoftwareProduct {
  name: string;
  authors_fullname: string;
  registration_place: string;
  where_used: string;
}

export interface Exhibition {
  name: string;
  date: string; // DateTime
  place: string;
  participants_fullname: string;
  exhibition_type: string;
  exhibit_names: string;
  result: string;
}

export interface Contest {
  names: string;
  application_names: string;
  leader_fullnames: string;
  responsible_executor_fullnames: string;
}

export interface ScientificPublication {
  authors_fullname: string;
  name: string;
  bibliographic_data: string;
}

export interface StudentWork {
  contest: string;
  organizer: string;
  name: string;
  authors_fullname: string;
}

export interface Olympiad {
  name: string;
  date: string; // DateTime
  place: string;
  participant_fullname: string;
  result: string;
}

export interface ActivitiesParticipation {
  content: string;
  participant_degree: string;
  result: string;
  notes: string;
}

export interface ReportFormValues {
  qualification_improvement: QualificationImprovement;
  methodical_works: MethodicalWork[];
  monographs: Monograph[];
  scopus_articles: Article[];
  web_of_science_articles: Article[];
  vak_articles: Article[];
  rinc_articles: Article[];
  conferences: Conference[];
  patents: Patent[];
  software_products: SoftwareProduct[];
  exhibitions: Exhibition[];
  contests: Contest[];
  scientific_publications: ScientificPublication[];
  student_works: StudentWork[];
  olympiads: Olympiad[];
  organizational_participations: ActivitiesParticipation[];
  professional_orientation_participations: ActivitiesParticipation[];
  educational_participations: ActivitiesParticipation[];
}

export type ElementOf<T> = T extends Array<infer U> ? U : never;
export type DynamicFieldsetsType = ElementOf<ReportFormValues[keyof ReportFormValues]>;

type ArrayKeys<T> = {
  [K in keyof T]: T[K] extends any[] ? K : never;
}[keyof T];
type NonArrayKeys<T> = {
  [K in keyof T]: T[K] extends any[] ? never : K;
}[keyof T];

export type ReportFormArrayKeys = ArrayKeys<ReportFormValues>;
export type ReportFormNonArrayKeys = NonArrayKeys<ReportFormValues>;

export const defaultValues: ReportFormValues = {
  qualification_improvement: {
    form: "",
    country: "",
    organization: "",
    course_name: "",
    diploma_number: "",
    diploma_date: "",
    hours_count: 0,
  },
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
      names: "",
      application_names: "",
      leader_fullnames: "",
      responsible_executor_fullnames: "",
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
