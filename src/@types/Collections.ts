import { Film } from "./Film";

export type Collections = {
    total: number;
    totalPages: number;
    items: null | Film[];
}
