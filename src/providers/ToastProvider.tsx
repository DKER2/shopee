import { ToastContext } from "@/contexts/ToastContext";
import toastStore from "@/stores/toast-store";
import { Snackbar } from "@mui/material";
import { useStore } from "zustand/react";

interface ToastProviderProps {
    children: React.ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps) => {
    const toastMessage = useStore(toastStore, (state) => state.message);
    const toast = useStore(toastStore, (state) => state.showToast);

    return (
        <div>
            <ToastContext value={{ toast }}>
                {children}
            </ToastContext>
            <Snackbar
                open={!!toastMessage}
                autoHideDuration={1000}
                message={toastMessage}
            />
        </div>
    )
}

export default ToastProvider;