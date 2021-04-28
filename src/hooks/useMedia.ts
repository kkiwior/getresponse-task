import { useEffect, useState } from 'react';

export function useMedia(query: string): boolean {
    const media = window.matchMedia(query);
    const [matches, setMatches] = useState<boolean>(media.matches);

    useEffect(() => {
        const handleMediaChange = (e: MediaQueryListEvent): void => {
            setMatches(e.matches);
        };

        media.addEventListener('change', handleMediaChange);

        return () => {
            media.removeEventListener('change', handleMediaChange);
        };
    }, [media]);

    return matches;
}

