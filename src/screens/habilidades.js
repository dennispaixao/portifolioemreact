import React from 'react'

import Header from './partials/header'


const Habilidades =()=>{
    
    return (
       <>
        <Header />
        <div className='Habilidades'>
            <h1>Habilidades</h1>
            <div className="habilidades-icons">
              
                <div><div className="imgHtml"></div><small>Html </small></div>
                <div><div className="imgCss"></div><small>CSS </small></div>
                <div><div className="imgJavascript"></div><small>Javascript </small></div>
                <div><div className="imgNode"></div><small>Node </small></div>
                <div><div className="imgReact"></div><small>React </small></div>
                <div><div className="imgSass"></div><small>Sass </small></div>
                <div><div className="imgBootstrap"></div><small>Bootstrap </small></div>
                <div><div className="imgTypescript"></div><small>Typescript </small></div>
               
            </div>
        </div>
       </>
    )
}

export default Habilidades