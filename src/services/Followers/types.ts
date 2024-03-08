export interface Followers {
    uuid: string;
    follower_uuid: string;
    followed_uuid: string;
}

export interface FollowersResponse {
    data: Followers[];
}