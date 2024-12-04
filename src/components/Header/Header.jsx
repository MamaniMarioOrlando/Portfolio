import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import "./header.css"




const Header = () => {
  const random = (min, max) => Math.random() * (max - min) + min;
  function animacionBlock(){
    anime({
      targets: '.block',
      translateX:()=>{return random(-700,700)},
      translateY: ()=>{return random(-100,100)},
      scale: ()=>{return random(1,5)},
      easing:'linear',
      duration:3000,
      delay:anime.stagger(10),
      complete:animacionBlock
    })
  }

  useEffect(()=>{
    const containerHeader= document.querySelector('.containerHeader')

  for(var i=0; i<=50; i++){
    const blocks= document.createElement('div');
    blocks.classList.add('block');
    containerHeader.appendChild(blocks)
  }
    //Crea la animacion para el titulo
    anime({
      targets: ".header h1",
      translateY: [-50,0],
      opacity: [0,1],
      duration: 1000,
      easing: "easeOutExpo",
    });
    animacionBlock()

  },[])

  return (
    <header className="header">
      <div className='containerHeader'>
        <h1 className='great-vibes-regular'>Mi Portafolio</h1>
        <nav>
          <Link to="about">Sobre Mí</Link>
          <Link to="projects">Proyectos</Link>
          <Link to="skills">Habilidades</Link>
          <Link to="contact">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
