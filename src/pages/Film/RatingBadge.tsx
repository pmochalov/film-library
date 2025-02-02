import * as React from "react";

type BadgeProps = {
    value: number | null;
};

const RatingBadge: React.FC<BadgeProps> = ({ value }) => {
    if (value === null || value === undefined) {
        return null;
    }

    return (
        <span
            className='px-2 py-1 text-xl font-bold bg-orange-400 md:text-2xl lg:text-4xl'
            aria-label={`Рейтинг: ${value}`}
        >
            {value}
        </span>
    );
};

export { RatingBadge };
