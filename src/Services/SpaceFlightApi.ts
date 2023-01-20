import qs from 'query-string';
import { ArticleQueryParams } from '../Types/Article';

export default class SpaceFlightApi {
    urlBase = 'https://api.spaceflightnewsapi.net/v3'
    getData = async (url: string) => {
        const data = await fetch(`${this.urlBase}/${url}`)
        const response = await data.json()
        return response
    }
    getArticles = async (params: ArticleQueryParams) => {
        try {
            const articles = await this.getData(`articles?${qs.stringify(params)}`)
            return articles
        } catch (error) {
            console.log(error)
        }
    }
    getSearchArticles = async (value: string) => {
        try {
            const articles = await this.getData(`articles?title_contains=${value}`)
            return articles
        } catch (error) {
            console.log(error)
        }
    }
}
