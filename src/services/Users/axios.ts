import { api } from '../axios';
import { User, UserResponse } from './types';

export const getUsers = async (): Promise<UserResponse> => {
    try {
        const users = await api.get<UserResponse>('/users')
        return users.data;

    } catch(error) {
        console.error(error);
        throw new Error("Falha ao buscar usuários");
    }
}

export const createUser = async (newUser: User): Promise<UserResponse> => {
    try {
        const user = await api.post<UserResponse>('/users', newUser);
        return user.data

    } catch(error) {
        console.error(error);
        throw new Error("Falha ao criar usuário");
    }
}