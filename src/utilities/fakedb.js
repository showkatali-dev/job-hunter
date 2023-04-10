import { notifyError, notifySuccess } from "./toastify";

const getLocalStorageData = () => {
    const LocalStorageItems = localStorage.getItem("applied-jobs");
    const items = LocalStorageItems ? JSON.parse(LocalStorageItems) : [];
    return items;
}

const addTodb = (id) => {
    const localStorageItems = getLocalStorageData();
    if (localStorageItems.includes(id)) {
        notifyError("You have already applied this job!")
    } else {
        localStorageItems.push(id);
        localStorage.setItem("applied-jobs", JSON.stringify(localStorageItems));
        notifySuccess("Applied successfully!")
    }
}

export { addTodb, getLocalStorageData };

