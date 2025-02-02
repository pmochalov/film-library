import * as React from "react";

type SloganProps = {
    text: string | null;
};

const Slogan: React.FC<SloganProps> = ({ text }) => {
    if (!text) {
        return <></>;
    }

    return <div className='text-lg text-gray-500'>{text}</div>;
};

export { Slogan };
