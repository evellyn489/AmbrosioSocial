import { api } from '../axios';
import { UserLikesResponse } from './types';

export const getUserLike = async (): Promise<UserLikesResponse> => {
    try {
        const likes = await api.get<UserLikesResponse>('/likes')
        return likes.data;

    } catch(error) {
        console.error(error);
        throw new Error("Falha ao buscar likes");
    }
}