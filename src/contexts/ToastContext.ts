import type { ToastContextInterface } from "@/types/toast";
import { createContext, useContext } from "react";

export const ToastContext = createContext<ToastContextInterface>({
    toast: (message) => { console.log(`${message}`) },
})

export const useToast = () => {
    return useContext(ToastContext)
}
