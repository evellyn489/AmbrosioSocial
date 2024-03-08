export interface Comments {
    publication_uuid: string;
    user_uuid: string;
    content: string;
}

export interface CommentsResponse {
    data: Comments[];
}