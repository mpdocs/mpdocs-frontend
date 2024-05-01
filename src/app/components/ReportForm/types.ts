
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


export type ReportFormValues = {
    qualification_improvement: QualificationImprovement;
    methodical_works: MethodicalWork[];
};