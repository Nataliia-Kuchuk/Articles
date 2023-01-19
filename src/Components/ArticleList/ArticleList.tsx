import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getArticles } from '../../Redux/Actions'
import { actyionDispatch } from '../../Redux/ActionsDispatch'

const ArticleList = () => {
    const selector = useSelector((state) => state)
    const {dispatch} = actyionDispatch()

    useEffect(() => {
        dispatch(getArticles())
    }, [])
    return <div>list</div>
}

export default ArticleList
