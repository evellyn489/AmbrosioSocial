export interface Comments {
    uuid: string;
    publication_uuid: string;
    user_uuid: string;
    content: string;
}

export interface CommentsResponse {
    data: Comments[];
}