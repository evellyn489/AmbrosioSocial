import { api } from '../axios';
import { ProfilesResponse } from './types';

export const getProfiles = async (): Promise<ProfilesResponse> => {
    try {
        const profiles = await api.get<ProfilesResponse>('/profiles')
        return profiles.data;

    } catch(error) {
        console.error(error);
        throw new Error("Falha ao buscar perfil");
    }
}