import * as React from "react";

type SloganProps = {
    text: string | null;
};

const Slogan: React.FC<SloganProps> = ({ text }) => {
    if (!text) {
        return <></>;
    }

    return (
        <div className='text-lg font-semibold text-gray-500 md:text-xl lg:text-2xl'>
            {text}
        </div>
    );
};

export { Slogan };
