import React from 'react'

import Header from './partials/header'


const Portifolio =()=>{
    
    return (
       <>
        <Header />
        <div className='Portifolio'>
        <div className='title'><h1> Portifólio</h1></div>
        <div class="linksportifolio">Meu github: <a href="https://github.com/dennispaixao">https://github.com/dennispaixao</a>
             codepen 1: <a href="https://codepen.io/dennispaixao">https://codepen.io/dennispaixao</a>
             codepen 2: <a href="https://codepen.io/dennis-paixao">https://codepen.io/dennis-paixao</a></div>
        <div className='Portifolio-items'>Bem ainda não tenho muita coisa pra por aqui, fiz vários projetos pequenos que estão espalhados pela web, mas nada muito significativo, espero ter a oportunidade de evoluir meu portifólio num futuro próximo, quem sabe trabalhando para com você que está lendo.</div>
        
        </div>
       </>
    )
}

export default Portifolio