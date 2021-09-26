export {getDay, addToLocaleStorage, getFromLocalStorage}

const getDay = () => {
    let item = localStorage.getItem('day')
    return item.toLowerCase() === 'true' ?? true
}

const addToLocaleStorage = (key, value) => {
    localStorage.setItem(key, value)
}

const getFromLocalStorage = (key) => {
    return localStorage.getItem(key) ?? ""
}

