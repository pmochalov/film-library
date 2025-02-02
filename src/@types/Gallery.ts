export type Gallery = {
    total: number;
    totalPages: number,
    items: null | GalleryImage[];
}

export type GalleryImage = {
    imageUrl: string;
    previewUrl: string;
}