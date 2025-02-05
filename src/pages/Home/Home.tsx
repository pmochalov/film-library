import * as React from "react";
import { Link } from "react-router-dom";
import { menuCollectionData } from "../../data";

const Home: React.FC = () => {
    return (
        <div>
            <nav className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {menuCollectionData.map((item) => {
                    return (
                        <Link
                            to={`/collection/?type=${item.value}`}
                            className={`group p-4 lg:p-5 aspect-video lg:aspect-square  ${item.bgColor} flex flex-row justify-start items-center`}
                        >
                            <div>
                                <span className='px-3 py-1 text-xl font-semibold leading-snug text-white bg-gray-900 group-hover:text-gray-900 group-hover:bg-white md:py-2 lg:px-4 lg:py-3 md:leading-normal md:text-3xl box-decoration-clone lg:text-4xl lg:leading-relaxed '>
                                    {item.title}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export { Home };
