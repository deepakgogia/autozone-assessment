import { BrowserStorage } from "./browserStorage";
import { Loader } from './loader';

const setOptions = ({ dontUseAuth, headers, ...options }) => {
    const updatedHeaders = dontUseAuth ? headers : ({
        ...headers,
        // Todo--Add key which will get data from browser storage (local or session) and added empty for now.
        // Authorization: BrowserStorage.get(''),
    });
    return { ...options, headers: updatedHeaders };
}

function formatPayload(url, type, options, isLoading = true) {
    if (isLoading)
        Loader && Loader.show();
    return fetch(url,
        {
            method: type,
            ...options
        })
        .then(response => response.json())
        .then(data => {
            if (isLoading)
                Loader && Loader.hide();
            return { success: true, data }
        })
        .catch(error => {
            Loader && Loader.hide();
            return { success: false, error: error.toString() }
        })
}


export const Http = {
    get: (url, options = {}, isLoading = true) => formatPayload(url, 'GET', setOptions(options), isLoading),
    post: (url, options = {}) => formatPayload(url, 'POST', setOptions(options)),
    patch: (url, options = {}) => formatPayload(url, 'PATCH', setOptions(options)),
    delete: (url, options = {}) => formatPayload(url, 'DELETE', setOptions(options))
}
