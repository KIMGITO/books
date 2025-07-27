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

export interface Student{
    id: number, 
    adm_no: string;
    first_name: string;
    sir_name: string;
    middle_name: string,
    gender: 'male|female',
    grade: Grade,
}


export interface Book{
    id: number;
    title: string;
    subject: Subject ;
    level: Level ;
    quantity: number;
    cover_image?: string;
    description?: string;
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
    short_name: string,
    level: Level,
    teacher: Teacher;
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