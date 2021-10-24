export const callProtectedEnpoint = (endpoint, token) => {

  const headers = new Headers();
  const bearer = `Bearer ${token}`;

  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers: headers
  };

  console.log('Calling protected web API endpoint...');

  return fetch(endpoint, options)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export const callUnprotectedEndpoint = (endpoint) => {
  const options = {
    method: 'GET'
  };

  console.log('Calling unprotected web API endpoint...');

  return fetch(endpoint, options)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export const apiBaseUrl = 'https://localhost:7017';