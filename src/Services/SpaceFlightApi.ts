import { async } from 'q'

export default class SpaceFlightApi {
    urlBase = 'https://api.spaceflightnewsapi.net/v3'
    getData = async (url: string) => {
        const data = await fetch(`${this.urlBase}/${url}`)
        const response = await data.json()
        return response
    }
    getArticles = async () => {
        try {
            const articles = await this.getData('articles/')
            return articles
        } catch (error) {
            console.log(error)
        }
    }
}
