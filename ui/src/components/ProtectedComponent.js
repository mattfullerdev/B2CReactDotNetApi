import { InteractionRequiredAuthError, InteractionStatus } from '@azure/msal-browser';
import { useState, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { callProtectedEnpoint, apiBaseUrl } from '../callApi';
import { loginRequest } from '../authConfig.js';

export const ProtectedComponent = () => {
    const { instance, inProgress, accounts } = useMsal();
    const [apiData, setApiData] = useState(null);


    useEffect(() => {
        if (!apiData && inProgress === InteractionStatus.None) {
            const endpoint = `${apiBaseUrl}/api/GetPrivateMessage`;

            const accessTokenRequest = {
                scopes: [loginRequest],
                account: accounts[0]
            }

            instance.acquireTokenSilent(accessTokenRequest).then((accessTokenResponse) => {
                // Acquire token silent success
                let accessToken = accessTokenResponse.accessToken;
                // Call your API with token
                callProtectedEnpoint(endpoint, accessToken).then((response) => { setApiData(JSON.stringify(response)) });
            }).catch((error) => {
                if (error instanceof InteractionRequiredAuthError) {
                    instance.acquireTokenPopup(accessTokenRequest).then(function(accessTokenResponse) {
                        // Acquire token interactive success
                        let accessToken = accessTokenResponse.accessToken;
                        // Call your API with token
                        callProtectedEnpoint(endpoint, accessToken).then((response) => { setApiData(response) });
                        
                    }).catch(function(error) {
                        // Acquire token interactive failure
                        console.log(error);
                    });
                }
                console.log(error);
            })
        }
    }, [instance, accounts, inProgress, apiData]);

    return <p>Return your protected content here: { apiData }</p>
}