export type Facts = {
    total: number;
    items: null | FactsItem[];
}

export type FactsItem = {
    text: string;
    type: string;
    spoiler: boolean;
}