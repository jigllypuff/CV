import { Period } from "../common-dto/common-dto";

export interface Work {
    id: number;
    company: Company;
    project: Project[];
}

export interface Company {
    name: string;
    period: Period;
    currentlyWorking: boolean;
}

export interface Project {
    section: string;
    description: string;
    technolgies: string[];
    period: Period;
}