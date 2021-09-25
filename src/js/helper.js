export {getDay, addToLocaleStorage, getFromLocalStorage}

const getDay = () => {
    return localStorage.getItem('day').toLowerCase() === 'true' ?? true
}

const addToLocaleStorage = (key, value) => {
    localStorage.setItem(key, value)
}

const getFromLocalStorage = (key) => {
    return localStorage.getItem(key) ?? ""
}