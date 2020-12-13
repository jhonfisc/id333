const http = (url, method, data, headers, api) => {
    const backendUrl = document.getElementById('paramConfig').value;
    const contextUrl = '/genesisDev/index.php/api';
    const get = (urlRequest) => {
        const header = new Headers();
        if (headers) {
            Object.keys(headers).forEach(
                key => header.append(key, headers[key])
            );
        }
    
        return fetch(urlRequest, {
            method: 'get',
            credentials: 'same-origin',
            mode: 'cors',
            headers: header
        })
        .then((response) => {
            return response.json();
        });
        
    };

    const post = (urlRequest) => {
       console.log(urlRequest);
    };

    const init = () => {
        if (typeof url === 'undefined') return;
        const urlRequest = new URL(`${contextUrl}/${api}/${url}`, backendUrl);

        if( method === 'get') return get(urlRequest);
        if( method === 'post') return post(urlRequest);
    };

    return init();
};

export { http };