import React from 'react'

const NewsCard = ({article}) => {
    console.log(article)
    return <div className = "w3-card p-1 m-1" style = {{width:400}}>
        <img src = {article.urlToImage} style = {{width:400}} />
        {article.title}
    </div>
}

export default NewsCard