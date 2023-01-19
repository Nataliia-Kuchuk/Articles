import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { articleReducer } from '../Redux/Reducer'

export const store = createStore(articleReducer, applyMiddleware(thunk))
