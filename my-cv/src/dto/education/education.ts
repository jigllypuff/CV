import { Period } from "../common-dto/common-dto";

export interface Univeristy {
	id: number;
    name: string;
    specialization: string;
    period: Period;
    graduationTitle: string;
    description: string;
}