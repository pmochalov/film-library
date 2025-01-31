import * as React from "react";
import { useParams } from "react-router-dom";

const Film: React.FC = () => {
    const { filmId } = useParams<string>();

    return <>Страница филльма {filmId}</>;
};

export { Film };
