import { useState } from 'react';

export type FetchingProps = (...args: any) => Promise<void>;
export type FetchingResponse = [(...args: any) => Promise<void>, boolean, string];

export const useFetching = (callback: FetchingProps): FetchingResponse => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetching = async (...args: any) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (error) {
            setError('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error];
};
