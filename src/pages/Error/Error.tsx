import { useRouteError } from "react-router";
// import * as React from "react";

// import "./Layout.css";

import { H1 } from "../../shared/ui/H1/H1";
import { Footer } from "../../widgets/ui/Footer";
import { Header } from "../../widgets/ui/Header";

type ErrorType = {
    statusText?: string;
    data?: string;
};

const ErrorPage: React.FC = () => {
    const error = useRouteError() as ErrorType;

    return (
        <div className='grid grid-cols-1 grid-template-rows-[auto_1fr_auto] min-h-full'>
            <Header />

            <div className='container mx-auto bg-white'>
                <main className='p-4'>
                    <div className='flex flex-col gap-5'>
                        <H1 title={`${error.statusText}`} />
                        <p>{error.data}</p>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export { ErrorPage };
