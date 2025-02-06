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
            className='px-2 py-1 font-bold text-black bg-orange-400 rounded-lg'
            aria-label={`Рейтинг: ${value}`}
        >
            {value}
        </span>
    );
};

export { RatingBadge };
