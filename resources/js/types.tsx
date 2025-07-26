export interface Teacher {
    id: number;
    first_name: string;
    last_name: string;
}

export interface CLevel {
    id: number;
    name: string;
    description: string;
}


export interface Active {
    active: string;
}

export interface Grade{
    id: number;
    name: string;
    level: CLevel,
    classTeacher: Teacher;
}

interface Subject {
    id: number;
    name: string;
    code?: string;
    description?: string;
    department?: Department;
}

export interface Department {
    id: number;
    name: string;
    subjects?: Subject[];
    description?: string;
}