import { useState, useEffect } from 'react';
import { callUnprotectedEndpoint } from '../callApi';

export const UnprotectedComponent = () => {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        if (!apiData) {
            const endpoint = 'https://localhost:7017/api/GetPublicMessage';

            callUnprotectedEndpoint(endpoint).then((response) => { setApiData(JSON.stringify(response)) });
        }
    }, [apiData]);

    return <p>Return your unprotected content here: { apiData }</p>
}
