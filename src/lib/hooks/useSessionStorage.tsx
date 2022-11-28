export function useSessionStorage() {
    const setValue = async (key: string, value: any) => {
        const valueInSessionStorage = await window.sessionStorage.getItem(key);
        if (valueInSessionStorage) {
            window.sessionStorage.removeItem(key);
            return await window.sessionStorage.setItem(
                key,
                JSON.stringify(value),
            );
        } else {
            return await window.sessionStorage.setItem(
                key,
                JSON.stringify(value),
            );
        }
    };

    const getValue = (key: string) => window.sessionStorage.getItem(key);

    const removeValue = (key: string) => window.sessionStorage.removeItem(key);

    return { setValue, getValue, removeValue };
}
