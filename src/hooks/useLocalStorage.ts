import React, { useEffect, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: boolean):
[boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const storageValue = localStorage.getItem(key);
    const [value, setValue] = useState<boolean>((storageValue ? JSON.parse(storageValue) : initialValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
