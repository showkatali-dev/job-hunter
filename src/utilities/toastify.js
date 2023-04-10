import { toast } from "react-toastify";

export const notifySuccess = (notification) => {
    toast.success(notification, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        theme: "dark",
    });
}
export const notifyError = (notification) => {
    toast.error(notification, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        theme: "dark",
    });
}