import { useState, useEffect } from 'react';

const useFetch = (fetchFunction, params = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const result = params 
                    ? await fetchFunction(params)
                    : await fetchFunction();
                    
                setData(result);
            } catch (err) {
                setError(err.message || 'Произошла ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [fetchFunction, params]);

    return { data, loading, error };
};

export default useFetch; 