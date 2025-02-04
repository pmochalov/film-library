import * as React from "react";

type ResourcesItemProps = {
    url: string;
    platform: string;
    logoUrl: string;
};

const ResourcesItem: React.FC<ResourcesItemProps> = ({
    url,
    platform,
    logoUrl,
}) => {
    return (
        <div className='p-4 md:px-8 md:py-8 bg-slate-100 hover:bg-slate-200'>
            <a href={url} title={platform} target='_blank'>
                <img src={logoUrl} className='w-16 h-a' />
            </a>
        </div>
    );
};

export { ResourcesItem };
