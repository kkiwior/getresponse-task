import { useCallback, useEffect, useState } from 'react';

export const useMedia = (query: string): boolean => {
    const media = window.matchMedia(query);
    const [matches, setMatches] = useState<boolean>(media.matches);

    const handleMediaChange = useCallback((e) => {
        setMatches(e.matches);
    }, []);

    useEffect(() => {
        media.addEventListener('change', handleMediaChange);
    }, [handleMediaChange, media]);

    return matches;
};
