// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: '<CLIENT_ID>',
        authority: '<SUSI_POLICY_URL>',
        knownAuthorities: ['<TENANT_URL>'],
        redirectUri: 'http://localhost:3000',
        postLogoutRedirectUri: 'http://localhost:3000'
    }
};

// Scopes you add here will be prompted for consent during login
export const loginRequest = {
    scopes: ['<SCOPE_URL>']
};