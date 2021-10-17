export interface User {
    firstName: string;
    lastName: string;
    position: string;
    city: string;
    contact: UserContact;
    descriptions: UserDescription;
    links: UserLinks;
}

export interface UserContact {
    mobile: string;
    email: string;
}

export interface UserDescription {
    goals: string;
    about: string;
    educationInfo: string;
    learningInfo: string;
}

export interface UserLinks {
    github: string;
    linkedin: string;
}