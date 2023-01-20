import React from 'react';
import Container from '@mui/material/Container'
import './App.scss';
import MainRoutes from './Routes/MainRoutes'

const App = () => {
    return (
        <Container className='container'>
            <MainRoutes />
        </Container>
    )
}

export default App
