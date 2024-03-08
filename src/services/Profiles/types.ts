export interface Profiles {
    uuid: string;
    profile_picture: string;
    user_uuid: string;
    is_private: boolean;
    publications_uuid: Array<string>;
}

export interface ProfilesResponse {
    data: Profiles[];
}