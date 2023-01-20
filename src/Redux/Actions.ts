import { ActionType, Action } from './ActionsTypes'
import { ThunkActionDispatch } from 'redux-thunk'
import { ActionCreator, Dispatch } from 'redux'
import SpaceFlightApi from '../Services/SpaceFlightApi'
import { ArticleQueryParams } from '../Types/Article'


const spaceSwapi = new SpaceFlightApi()

export const getArticles = (params: ArticleQueryParams) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({ type: ActionType.GET_ARTICLES_PENDING })
            const response = await spaceSwapi.getArticles(params)
            dispatch({ type: ActionType.GET_ARTICLES_SUCCESS, payload: response })
        } catch (err: any) {
            dispatch({ type: ActionType.GET_ARTICLES_FAIL, payload: err.message })
        }
    }
}


