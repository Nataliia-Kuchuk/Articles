import React, {
    useEffect,
    useState,
    useRef,
    useContext,
    useLayoutEffect,
    useCallback,
    useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '../../Redux/Actions';
import { actyionDispatch } from '../../Redux/ActionsDispatch';
import ArticleItem from '../ArticleItem/ArticleItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './ArticleList.scss';
import { RootState } from '../../Store/Store';
import { useObserver } from '../../Hooks/useObserver';
import { SearchContext } from '../../context/articleContext';
import Skeleton from '@mui/material/Skeleton';
import { articleReducer } from '../../Redux/Reducer';
import { useParams } from 'react-router-dom';
import { CircularStatic } from '../Loader';
const ArticleList = () => {
    const itemsEls = useRef<HTMLDivElement>(null);
    const [next, setNext] = useState<boolean>(true);
    const { articles, loading } = useSelector((state: RootState) => state);
    const { dispatch } = actyionDispatch();
    const { value, count, setCount } = useContext(SearchContext);

    useObserver(itemsEls, next, loading, () => setCount(count + 9), articles.length);
    const { id } = useParams();
    const idx = Number(id);
    useEffect(() => {
        dispatch(
            getArticles({
                _limit: count,
                title_contains: value,
                summary_contains: value,
            }),
        );
    }, [count, value]);
   

    if (!articles.length && !loading) {
        return <h1>NO ITEMS</h1>;
    }

    return (
        <Box sx={{ flexGrow: 1 }} className='article-list'>
            <Grid container spacing={6} columns={{ xs: 4, sm: 8, md: 12 }}>
                {articles.map((item) => (
                    <Grid item xs={2} sm={4} md={4} key={item.id}>
                        <ArticleItem {...item} />
                    </Grid>
                ))}
            </Grid>
            {loading ? (
                <Grid
                    container
                    spacing={6}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    style={{ marginTop: '20px' }}
                >
                    {Array.from(Array(3)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Skeleton
                                variant='rectangular'
                                height={217}
                                style={{ maxWidth: '400px' }}
                            />
                            <Skeleton animation='wave' height={90} />
                            <Skeleton animation='wave' height={130} />
                        </Grid>
                    ))}
                </Grid>
            ) : null}
            <div ref={itemsEls}></div>
        </Box>
    );
};

export default ArticleList;
