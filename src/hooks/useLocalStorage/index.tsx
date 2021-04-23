import {useEffect, useState} from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
    const storageValue = localStorage.getItem(key);
    const [value, setValue] = useState<any>((storageValue ? JSON.parse(storageValue) : initialValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue]
}