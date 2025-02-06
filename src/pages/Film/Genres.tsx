import * as React from "react";
import { Genre } from "../../@types/Film";

type GenresProps = {
    items: Genre[] | null;
};

const Genres: React.FC<GenresProps> = ({ items }) => {
    if (!items) {
        return <></>;
    }

    return (
        <div className='flex flex-wrap gap-x-2 gap-y-1'>
            {items.map((g, i) => (
                <span className='px-2 py-1 bg-gray-200 rounded-lg' key={i}>
                    {g.genre}
                </span>
            ))}
        </div>
    );
};

export { Genres };
