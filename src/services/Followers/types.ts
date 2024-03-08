export interface Followers {
    follower_uuid: string;
    followed_uuid: string;
}

export interface FollowersResponse {
    data: Followers[];
}