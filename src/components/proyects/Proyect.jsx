import { useEffect } from 'react';
import ScrollReveal from "scrollreveal";
 
import './proyect.css'
export const Proyect = () => {
  useEffect(() => {
    const scrollReveal = ScrollReveal();
    scrollReveal.reveal(".proyectos-h1",  {
      origin: "left",
      distance: "50px",
      duration: 1000,
      delay: 0,
      easing: "ease",
    });
    
  }, []);
  return (
    <>
    <div className="proyectos">
        <h1 className='proyectos-h1'>proyectos</h1>
    </div>
    <div className='contenedor-proyectos'>
        
    <a href="https://all-tech-board.vercel.app/" target="_blank">
    <img src="/assets/proyectos/reparaciones.png" alt="" />
    </a>

    <a href="https://inventory-two-xi.vercel.app" target="_blank">
    <img src="/assets/proyectos/inventario.png" alt="" />
    </a>

    </div>
    </>
  )
}
