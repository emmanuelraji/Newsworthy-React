import React, { useState } from "react"
import NewsList from '../NewsList/NewsList'

const Nav = () => {

    const [state, setState] = useState([])

    // News API Data
    const apiKey = '1e0c3c9c8adc4aa9a6c5322e7a576f17'
    const newsUrl = {
        endadgetUrl: `https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=${apiKey}`,
        recodeUrl: `https://newsapi.org/v2/top-headlines?sources=recode&apiKey=${apiKey}`,
        nextWebUrl: `https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=${apiKey}`
    }

    // Request news functions 
    const getNews = async url => {
      const response = await fetch(url)
      const jsonResponse = await response.json()
      const articlesArray = jsonResponse.articles
      setState(articlesArray)
      }
    
    return (
        <div>
            <h1>Newsworthy</h1>
            <h1>What's New?</h1>
            <div>
                <button onClick={() => getNews(newsUrl.endadgetUrl)}>Engadget</button>
                <button onClick={() => getNews(newsUrl.recodeUrl)}>Recode</button>
                <button onClick={() => getNews(newsUrl.nextWebUrl)}>The Next Web</button>
            </div>
            {state.map((item, index) => <NewsList key={index} data={item}/>)}
        </div>
    )
}

export default Nav