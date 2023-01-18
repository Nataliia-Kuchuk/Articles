import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'))
const ArticlePage = lazy(() => import('../Pages/ArticlePage/ArticlePage'))

const MainRoutes = () => {
    return (
        <div>
            <Suspense fallback={'loading'}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about/:id' element={<ArticlePage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default MainRoutes
