export interface User {
    name: string;
    email: string;
    password: string;
    birthdate: string;
    gender: string;
}

export interface UserResponse {
    data: User[];
}