import React from 'react'
import NewsCard from './NewsCard'
import { Grid ,Grow ,Typography} from '@material-ui/core'

const Articles = ({data}) => {
    return (
        <div className = "row">
            {data.map((a,i)=>{
                return <div key = {i}>
                    <NewsCard article = {a} i = {i} />    
                </div>
            })}
        </div>
    )
}

export default Articles