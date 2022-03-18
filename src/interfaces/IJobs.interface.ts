
export interface IJobs {
    contact: Contacts;
    task: Tasks;
}

export interface Contacts {
    _id?: string;
    name: string;
    indicative: string;
    number: string;
    documentId: string;
}

export interface Tasks {
    _id?: string;
    name: string;
    scheduling: string;
    active: boolean;
    message: string;
}