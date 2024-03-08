import { api } from '../axios';
import { FollowersResponse } from './types';

export const getFollowers = async (): Promise<FollowersResponse> => {
    try {
        const followers = await api.get<FollowersResponse>('/followers')
        return followers.data;

    } catch(error) {
        console.error(error);
        throw new Error("Falha ao buscar seguidores");
    }
}