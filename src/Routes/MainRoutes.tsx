import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CircularStatic } from '../Components/Loader';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const ArticlePage = lazy(() => import('../Pages/ArticlePage/ArticlePage'));

const MainRoutes = () => {
    return (
        <div>
            <Suspense fallback={<CircularStatic />}>
                <Routes>
                    <Route path='/Articles' element={<HomePage />} />
                    <Route path='/Articles/:id' element={<ArticlePage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default MainRoutes;
