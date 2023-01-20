import React, { createContext, FC, useState } from 'react';

const defaultParams = {
    search: '',
    count: 9,

}

interface ArticleProviderProps {
    children: React.ReactNode;
}

interface DefaultValue {
    value: string;
    searchHandler: (query: string) => void;
    resetHandler: () => void;
    count: number;
    setCount: (v: number) => void;

}

export const SearchContext = createContext<DefaultValue>({
    value: defaultParams.search,
    searchHandler: () => undefined,
    resetHandler: () => undefined,
    count: defaultParams.count,
    setCount: () => undefined,

});

export const SearchProvider: FC<ArticleProviderProps> = ({ children }) => {
    const [value, setValue] = useState<string>(defaultParams.search);
    const [count, setCoun] = useState<number>(defaultParams.count);

    const searchHandler = (query: string) => {
        setValue(query);
        setCount(defaultParams.count);
    };
    const resetHandler = () => {
        setValue(defaultParams.search);
        setCount(defaultParams.count);
    };
    const setCount = (v: number) => {
        setCoun(v);
    };
   

    return (
        <SearchContext.Provider value={{ value, searchHandler, resetHandler, count, setCount}}>
            {children}
        </SearchContext.Provider>
    );
};
