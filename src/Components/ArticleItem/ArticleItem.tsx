import React, { FC, useContext } from 'react';
import Highlighter from 'react-highlight-words';
import { SearchContext } from '../../context/articleContext';
import { useNavigate } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 400, maxHeight: 600, height: 530 }} className='card'>
            <CardActionArea>
                <CardMedia component='img' height='217' image={imageUrl} alt='article-image' />
                <CardContent>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        sx={{
                            marginBottom: 1,
                        }}
                    >
                        <CalendarTodayIcon
                            sx={{
                                display: 'inline',
                                position: 'relative',
                                top: 2,
                                mx: 0.5,
                                fontSize: 14,
                                marginLeft: 0,
                            }}
                        />
                        {today.toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </Typography>
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
                    <button className='article-button' onClick={() => navigate(`/Articles/${id}`)}>
                        Read more
                        <ArrowRightAltIcon
                            sx={{
                                color: 'grey',
                                fontWeight: 300,
                                fontSize: 16,
                                position: 'relative',
                                top: 3,
                                marginLeft: 0.5,
                            }}
                        />
                    </button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ArticleItem;
