import React from 'react'
import './NewsList.css'

const NewsList = ({data}) => {
    
    return ( 
        <div className="news-item">
            <h1>{data.title}</h1>
            <h3>By: {data.author}</h3>
            <p>{data.description}</p>
            <img src={data.urlToImage} alt=""/>
            <p><a href={data.url}>Read More</a></p>
        </div>
    )
}

export default NewsList