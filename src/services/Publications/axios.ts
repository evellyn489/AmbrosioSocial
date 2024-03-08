import { api } from '../axios';
import { Publication, PublicationResponse } from './types';

export const getPublications = async (): Promise<PublicationResponse> => {
    try {
        const publications = await api.get<PublicationResponse>('/publications')
        return publications.data;

    } catch(error) {
        console.error(error);
        throw new Error("Falha ao buscar publicações");
    }
}

export const createPublication = async (newPublication: Publication): Promise<PublicationResponse> => {
    try {
        const publication = await api.post<PublicationResponse>('/publications', newPublication);
        return publication.data

    } catch(error) {
        console.error(error);
        throw new Error("Falha ao criar publicação");
    }
}