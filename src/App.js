import React, {useState} from 'react'
import Nav from './components/App/Navigation/Nav'
import NewsList from './components/App/NewsList/NewsList'
import './App.css'


const App = () => {

  const [state, setState] = useState([])

  // Request news functions

  const getNews = async url => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const articlesArray = jsonResponse.articles
    setState(articlesArray)
    }

 return (
     <div>
       <Nav getNews={getNews}/>
       {state.map(item => <NewsList key={item.url} data={item}/>)}
     </div>
 )
}

export default App