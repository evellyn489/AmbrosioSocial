export interface Publication {
    uuid: string;
    text?: string;
    image?: string;
}

export interface PublicationResponse {
    data: Publication[];
}