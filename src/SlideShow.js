import React from 'react'
import Endgame from './slide-1.jpg'
import InfinityWar from './slide-2.jpg'
import Infinity from './slide-3.jpg'
const SlideShow = () => {
    return (
        <div style={{display:"flex",justifyContent:"center"}} className="mt-3 mb-3">
        <div id = "myCarousel" className='carousel slide bg-dark '  style ={{width:"1100px",height:"500px"}} data-ride = "carousel" >
            <ol className='carousel-indicators'>
                <li data-target = "#myCarousel" data-slide-to = "0" className = "active"></li>
                <li data-target = "#myCarousel" data-slide-to = "1"></li>
                <li data-target = "#myCarousel" data-slide-to = "2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="item  active">
                <img src = {Infinity}  alt = "Lookesh"  style ={{maxWidth:"100%"}} />
                    </div>
                <div className="item">
                    <img src= {Endgame} alt = "Lookesh"  style ={{maxWidth:"100%"}}/>
                </div>
                <div className="item">
                    <img src= {InfinityWar} alt = "Lookesh"  style ={{maxWidth:"100%"}} />
                </div>
            </div>
            </div>
        </div>
    )
} 

export default SlideShow