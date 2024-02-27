import { useEffect } from 'react';
import ScrollReveal from "scrollreveal";
import './skils.css'
const Skils = () => {
  useEffect(() => {
    const scrollReveal = ScrollReveal();
    scrollReveal.reveal(".skills",  {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 0,
      easing: "ease",
    });
    
  }, []);
  return (
    <>
    <div className='container-titulo-skils'>
        <h1 className='skills'>Skills</h1>
    </div>
    <div className='container-skils'>
      <div className='imagen-skils'><img src="/assets/skils/github_original_wordmark_logo_icon_146506.png" alt="" /></div>
      <div className='imagen-skils'> <img src="/assets/skils/javascript_icon_130900.png" alt="" /></div>
      <div className='imagen-skils'> <img src="/assets/skils/mongodb_plain_wordmark_logo_icon_146423.png" alt="" /></div>
      <div className='imagen-skils'> <img src="/assets/skils/mysql_original_wordmark_logo_icon_146417.png" alt="" /></div>
      <div className='imagen-skils'> <img src="/assets/skils/node_icon_196185.png" alt="" /></div>
      <div className='imagen-skils'> <img src="/assets/skils/react_original_wordmark_logo_icon_146375.png" alt="" /></div>
      
      
    </div>
    </>
  )
}

export default Skils
