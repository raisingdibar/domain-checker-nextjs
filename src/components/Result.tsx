// components/Result.tsx
import { DefinedUseQueryResult, useQuery } from '@tanstack/react-query';
import React from 'react';

interface ResultProps {
    domain: string;
    tld: string;
}

interface Availability {
    domain: string;
    available: boolean;
}

interface FetchError {
    message: string;
}

const fetchAvailability = async (domain: string, tld: string): Promise<Availability> => {
    const response = await fetch(`http://localhost:8080/?uri=${domain}.${tld}`);
    const data = await response.json() as Availability;
    return { domain: domain + "." + tld, available: data.available };
};

const Result: React.FC<ResultProps> = ({ domain, tld }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['availability', domain, tld],
        queryFn: () => fetchAvailability(domain, tld),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error ?? !data) return <div>Error fetching availability</div>;

    const domainInnerSpan = <span className="mr-2">{data.domain}</span>;
    let domainSpan;
    if (data.available) {
        domainSpan = <a href={"https://" + data.domain}>{domainInnerSpan}</a>;
      } else {
        domainSpan = <>{domainInnerSpan}</>;
      }

    return (
        <li key={data.domain} className="mb-2">
            {domainSpan}
            <span
                className={`inline-block w-4 h-4 rounded-full ${data.available ? 'bg-green-500' : 'bg-red-500'
                    }`}
            ></span>
        </li>
    );
};

export default Result;
