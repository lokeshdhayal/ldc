import React, { useEffect } from 'react'
import alnBtn from "@alan-ai/alan-sdk-web"

const alanKey = "5f9bbc4d5b779624e525f120c95be1042e956eca572e1d8b807a3e2338fdd0dc/stage"

const Main = () => {
    useEffect(()=>{
        alnBtn({
            key:alanKey,
            onCommand:({command}) => {
                if(command === "lokesh_working"){
                    alert("Kam kar rahi hai chutiye")
                }
            }
        })
    },[])
    return <div></div>
}

export default Main