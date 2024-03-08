import { api } from '../axios';
import { Comments, CommentsResponse } from './types';

export const getComments = async (): Promise<CommentsResponse> => {
    try {
        const comments = await api.get<CommentsResponse>('/comments')
        return comments.data;

    } catch(error) {
        console.error(error);
        throw new Error("Falha ao buscar comentários");
    }
}

export const createComment = async (newComment: Comments): Promise<CommentsResponse> => {
    try {
        const comment = await api.post<CommentsResponse>('/comments', newComment);
        return comment.data

    } catch(error) {
        console.error(error);
        throw new Error("Falha ao criar comentário");
    }
}