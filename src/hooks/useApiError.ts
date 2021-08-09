import { useStore } from './useStore';
import { ErrorType } from '../types';

export const useApiError = () => {
    const { uiStore } = useStore();
    const { setError } = uiStore;

    const handleError = (error: ErrorType) => {
        const { message } = error;
        setError(message || 'Something went wrong :(');
    };

    return {
        handleError,
    };
};
