import React, { FC, useCallback, useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import Highlighter from 'react-highlight-words';
import { SearchContext } from '../../context/articleContext';
import { Link, useNavigate } from 'react-router-dom';
import './ArticleItem.scss';
interface ArticleItemProps {
    imageUrl: string;
    title: string;
    summary: string;
    id?: number;
    updatedAt: string;
}
const ArticleItem: FC<ArticleItemProps> = ({ imageUrl, title, summary, updatedAt, id }) => {
    const { value } = useContext(SearchContext);
    const today = new Date(updatedAt);
    console.log(today);
    const navigate = useNavigate();
    let newSummary;
    if (summary.length > 60) {
        newSummary = summary.slice(0, 60) + '...';
    }
    return (
        <Card sx={{ maxWidth: 400, maxHeight: 600, height: 530 }}>
            <CardActionArea>
                <CardMedia component='img' height='217' image={imageUrl} alt='green iguana' />
                <Typography variant='body2' color='text.secondary'>
                    {' '}
                    {today.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    })}
                </Typography>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div' className='title'>
                        <Highlighter
                            highlightClassName='YourHighlightClass'
                            searchWords={value.split(' ')}
                            autoEscape={true}
                            textToHighlight={title}
                        />
                    </Typography>
                    <Typography variant='body2' color='text.secondary' className='subtitle'>
                        <Highlighter
                            highlightClassName='YourHighlightClass subtitle'
                            searchWords={value.split(' ')}
                            autoEscape={true}
                            textToHighlight={summary}
                        />
                    </Typography>
                    <Button
                        className='article-button'
                        size='small'
                        color='primary'
                        onClick={() => navigate(`/article/${id}`)}
                    >
                        Read more
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ArticleItem;
