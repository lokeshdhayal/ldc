import React, { useEffect, useState } from 'react'
import alnBtn from "@alan-ai/alan-sdk-web"
import Articles from './Articles'

const alanKey = "5f9bbc4d5b779624e525f120c95be1042e956eca572e1d8b807a3e2338fdd0dc/stage"

const Main = () => {
    const [newsArticles,setNewsArticles] = useState([])
    useEffect(()=>{
        alnBtn({
            key:alanKey,
            onCommand:({command,articles}) => {
                if(command === "newHeadlines"){
                    setNewsArticles(articles)
                }
            }
        })
    },[])
    return <div className = "mt-4">
        <Articles data = {newsArticles}/>
    </div>
}

export default Main
