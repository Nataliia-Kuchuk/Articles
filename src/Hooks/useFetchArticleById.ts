import { useEffect, useState } from 'react';
import SpaceFlightApi from '../Services/SpaceFlightApi';
import { IArticle } from '../Types/Article';

const api = new SpaceFlightApi();

export const useFetchArticleById = (id: string) => {
    const [article, setArticle] = useState<IArticle>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);
    const getArticle = async () => {
        setLoading(true);
        try {
            const response = await api.getArticle(id);
            setArticle(response);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    };
    useEffect(() => {
        getArticle();
    }, [id]);
    return {
        article,
        loading,
        error,
    };
};
