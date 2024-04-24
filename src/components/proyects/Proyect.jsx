import './proyect.css';

const Proyect = () => {
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
          <a href="https://store-full.vercel.app/" target="_blank">
            <img src="/assets/proyectos/fullStore.png" alt="" />
          </a>
        
      </div>
    </>
  )
}

export default Proyect;