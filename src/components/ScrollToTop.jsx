import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Skip auto scroll if navigating to an in-page hash
        if (hash) return;
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // use 'smooth' if preferred
    }, [pathname, hash]);

    return null;
}