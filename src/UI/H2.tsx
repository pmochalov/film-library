import * as React from "react";

type H2Props = {
    title: string | null;
};

const H2: React.FC<H2Props> = ({ title }) => {
    return <h2 className='text-2xl md:text-3xl lg:text-4xl'>{title}</h2>;
};

export { H2 };
