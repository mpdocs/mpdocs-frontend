export interface AuthTokenResponse {
  access: string;
  refresh: string;
}

export interface UserDetail {
  id: string | number;
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
}

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
  name: string;
  application_name: string;
  leader_fullname: string;
  responsible_executor_fullname: string;
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

interface ReportTemplate {
  id: number;
  name: string;
}

export interface ReportImmutableFields {
  id: number;
  template: ReportTemplate;
}

export interface ReportMutableFields {
  work_time_coefficient: number;
  academic_degree: string;
  position: string;
  qualification_improvement: QualificationImprovement[];
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

export interface ReportDetail extends ReportMutableFields, ReportImmutableFields {}
