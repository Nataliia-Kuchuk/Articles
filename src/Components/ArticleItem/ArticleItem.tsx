import React, { FC, useCallback, useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import Highlighter from 'react-highlight-words';
import { SearchContext } from '../../context/articleContext';
import { Link } from 'react-router-dom';
interface ArticleItemProps {
    imageUrl: string;
    title: string;
    summary: string;
    id?: number;
    updatedAt: string;
}
const ArticleItem: FC<ArticleItemProps> = ({ imageUrl, title, summary, updatedAt }) => {
    const { value } = useContext(SearchContext);

    return (
        <Card sx={{ maxWidth: 400, maxHeight: 530, height: 530 }}>
            <CardActionArea>
                <CardMedia component='img' height='217' image={imageUrl} alt='green iguana' />
                <Typography variant='body2' color='text.secondary'>
                    {updatedAt}
                </Typography>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        <Highlighter
                            highlightClassName='YourHighlightClass'
                            searchWords={value.split(' ')}
                            autoEscape={true}
                            textToHighlight={title}
                        />
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        <Highlighter
                            highlightClassName='YourHighlightClass'
                            searchWords={value.split(' ')}
                            autoEscape={true}
                            textToHighlight={summary}
                        />
                    </Typography>
                </CardContent>

                <Button size='small' color='primary'>
                    Share
                </Button>
            </CardActionArea>
        </Card>
    );
};

export default ArticleItem;
