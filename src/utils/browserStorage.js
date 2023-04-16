export const BrowserStorage = {
    get: (key, storage = localStorage) => storage.getItem(key).toString(),
    set: (key, value, storage = localStorage) => storage.setItem(key, value),
    remove: (key, storage = localStorage) => storage.removeItem(key),
    removeAll: (...keys) => keys.forEach(f => {
        localStorage.removeItem(f);
        sessionStorage.removeItem(f);
    }),
    clear: (storage = localStorage) => storage.clear()
}