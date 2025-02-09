import * as React from "react";
import { Link } from "react-router-dom";
import { ItemCollection, menuCollectionData } from "../../data";

type ItemCollectionProps = {
    item: ItemCollection;
};

const MenuItem: React.FC<ItemCollectionProps> = ({ item }) => {
    return (
        <Link
            to={`/collection/?type=${item.value}`}
            className={`group p-4 lg:p-5 aspect-video lg:aspect-square  ${item.bgColor} flex flex-row justify-start items-center`}
            title={item.title}
        >
            <div>
                <span className='px-3 py-1 text-xl font-semibold leading-snug text-white bg-gray-900 group-hover:text-gray-900 group-hover:bg-white md:py-2 lg:px-4 lg:py-3 md:leading-normal md:text-3xl box-decoration-clone lg:text-4xl lg:leading-relaxed '>
                    {item.title}
                </span>
            </div>
        </Link>
    );
};

const Home: React.FC = () => {
    return (
        <div>
            <nav className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {menuCollectionData.map((item) => (
                    <MenuItem item={item} />
                ))}
            </nav>
        </div>
    );
};

export { Home };
