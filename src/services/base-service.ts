import toastStore from "@/stores/toast-store";

export class BaseService {
    static baseUrl = "https://fakestoreapi.com/";

    static async callApi(path: string, method: "GET" | "POST", body?: any) {
        return await fetch(this.baseUrl + path, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: body ? JSON.stringify(body) : undefined
        })
            .then(res => res.json())
            .catch(err => {
                toastStore.getState().showToast("API call failed");
                throw err;
            })
    }

    static async get(path: string) {
        return this.callApi(path, "GET");
    }

    static async post(path: string, body: any) {
        return this.callApi(path, "POST", body);
    }
}