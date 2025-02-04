export type Resources = {
    total: number;
    items: null | ResourcesItem[];
}

export type ResourcesItem = {
    url: string,
    platform: string,
    logoUrl: string,
}