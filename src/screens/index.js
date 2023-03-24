import React from 'react'

import Header from './partials/header'

import "./style.css";


const Index =()=>{
    
    return (
       <>
        <Header />
        <section className='index'>
            <div className='foto'><img alt="Foto de quando eu graduei Bacharel em Sistemas de Informação" src="https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/278595972_5671166486231826_6965938991553111721_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGUNatiQifiInJ2qsHKd7H3du_qOwnfLvJ27-o7Cd8u8sFb4s4tMrMFNZzPd9uCggrvoSzUCAruiMKrZu_HsfYC&_nc_ohc=tmoiyKJoEPAAX8U4bFD&_nc_ht=scontent.fgru6-1.fna&oh=00_AfD6rnCfeivpFXl6BhN71jYpsrYI4g6X86wraRtuL3NYhw&oe=642241B5" />
            <br /><h1>Dennis Paixão Ferreira</h1>
            <h4>Desenvolvedor Web</h4><br/>
            </div>

            <div className='sobre'>
                <h1>Um pouco sobre mim: </h1><br />
                <p>Olá, sou desenvolvedor iniciante, apaixonado por programação, me formei em 2022 como Bacharel em sistemas de informação, 
                    desde então tenho estudado diversas tecnologias para adentrar ao mercado de trabalho como React e Node, gosto de design 
                    e acredito que a programação está cada vez mais se tornando um trabalho artístico que envolve criatividade, paciência, talento, e habilidades técnicas.
                    Estou a procura de oportunidades para entrar no mercado de trabalho, não estou me importando com o salário agora, o que eu quero é oportunidade
                    de aprender e por em prática o que eu já sei para me tornar um programador cada vez melhor.  
                </p>
            </div>
        </section>

       </>
    )
}

export default Index