import React from 'react'
import './NewsList.css'

const Section = ({data}) => {
    
    return ( 
        <div className="container">
            <h1>{data.title}</h1>
            <h3>By: {data.author}</h3>
            <p>{data.description}</p>
            <img src={data.urlToImage} alt=""/>
        </div>
    )
}

export default Section