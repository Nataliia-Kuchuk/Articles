import { useEffect, useRef } from 'react';

export const useObserver = (
    lastElement: { current: any },
    canLoad: any,
    loading: boolean,
    callback: () => void,
    articles: number,
) => {
    const observer = useRef(null) as any;
    useEffect(() => {
        if (loading) return;
        if (!articles) return;
        if (observer.current) observer.current.disconnect();
        const cb = (entries: { isIntersecting: any }[]) => {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(lastElement.current);
    }, [loading]);
};
