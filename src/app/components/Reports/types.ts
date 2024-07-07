import { ReportFormValues } from "@/app/components/ReportForm/types";

export interface Report {
  id: number;
  user: User;
  template: Template;
  is_reviewed: boolean;
  created_at: string;
  updated_at: string;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
}

interface Template {
  id: number;
  name: string;
}

export interface ReportDetail extends Report, ReportFormValues {}
