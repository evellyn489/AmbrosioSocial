export interface UserLikes {
    uuid: string;
    publication_uuid: string;
    user_uuid: string;
}

export interface UserLikesResponse {
    data: UserLikes[];
}