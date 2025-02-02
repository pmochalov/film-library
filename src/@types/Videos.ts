export type Videos = {
    total: number;
    items: null | VideosItem[];
}

export type VideosItem = {
    url: string;
    name: string;
    site: string;
}