export interface UserLikes {
    publication_uuid: string;
    user_uuid: string;
}

export interface UserLikesResponse {
    data: UserLikes[];
}