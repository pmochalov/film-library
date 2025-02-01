export type Film = {
    kinopoiskId: number;
    kinopoiskHDId: string | null;
    imdbId: string | null;
    nameRu: string | null | "333";
    nameEn: string | null;
    nameOriginal: string,
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl: string | null;
    logoUrl: string | null;
    reviewsCount: number;
    ratingGoodReview: number | null;
    ratingGoodReviewVoteCount: number | null;
    ratingKinopoisk: number | null;
    ratingKinopoiskVoteCount: number | null;
    ratingImdb: number | null;
    ratingImdbVoteCount: number | null;
    ratingFilmCritics: number | null;
    ratingFilmCriticsVoteCount: number | null;
    ratingAwait: number | null;
    ratingAwaitCount: number | null;
    ratingRfCritics: number | null;
    ratingRfCriticsVoteCount: number | null;
    webUrl: string;
    year: number | null;
    filmLength: number | null;
    slogan: string | null;
    description: string | null;
    shortDescription: string | null;
    editorAnnotation: string | null;
    isTicketsAvailable: boolean;
    productionStatus: FilmProdStatus | null;
    type: FilmType;
    ratingMpaa: string | null;
    ratingAgeLimits: string | null;
    hasImax: boolean | null;
    has3D: boolean | null;
    lastSync: string;
    countries: Country[];
    genres: Genre[] | null;
    startYear: number | null;
    endYear: number | null;
    serial: boolean | null;
    shortFilm: boolean | null;
    completed: boolean | null;
}

export type FilmProdStatus = 'FILMING' | 'PRE_PRODUCTION' | 'COMPLETED' | 'ANNOUNCED' | 'UNKNOWN' | 'POST_PRODUCTION'

export type FilmType = 'FILM' | 'VIDEO' | 'TV_SERIES' | 'MINI_SERIES' | 'TV_SHOW'

export type Country = {
    country: string
}

export type Genre = {
    genre: string
}