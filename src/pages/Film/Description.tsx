import * as React from "react";

type DescriptionProps = {
    text: string | null;
};

const Description: React.FC<DescriptionProps> = ({ text }) => {
    if (!text) {
        return <></>;
    }

    return <div className=''>{text}</div>;
};

export { Description };
