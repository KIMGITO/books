export interface Teacher {
    id: number;
    first_name: string;
    sir_name: string;
    middle_name?: string;
    email: string;
    phone: string;
    department?: Department;
    grade: Grade;
    
}

export interface Level {
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
    level: Level,
    classTeacher: Teacher;
}

export interface Subject {
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