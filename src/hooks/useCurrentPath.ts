import { useLocation } from 'react-router-dom';

export const useCurrentPath = () => {
    const { pathname } = useLocation();
    const pathExtension = pathname.indexOf('/', 1);

    return pathExtension === -1 ? pathname : pathname.slice(0, pathExtension);
};
