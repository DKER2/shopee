import { createStore } from "zustand";

interface ToastStoreState {
    message: string | null;
}

interface ToastStoreActions {
    showToast: (message: string) => void;
}

const toastStore = createStore<ToastStoreState & ToastStoreActions>(() => ({
    message: null,
    showToast: (message: string) => { toastStore.setState({ message }) }
}));

export default toastStore;