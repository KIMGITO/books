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