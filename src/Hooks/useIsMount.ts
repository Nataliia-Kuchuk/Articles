import { useRef, useEffect } from 'react';

export const useIsMount = (a:number) => {
    const isMountRef = useRef(false);
    useEffect(() => {
        if (a) {
           isMountRef.current = false 
        }
    }, []);
    return isMountRef.current;
};
