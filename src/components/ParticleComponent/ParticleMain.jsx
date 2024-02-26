import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import './particleMain.css'
import particleConfig from "./particleConfig";

const ParticleMain = () => {
  const customInit = useCallback( (engine) => {
    // this adds the bundle to tsParticles
     loadFull(engine);
  },[]);

  

    return (
      
        <Particles
    //id="tsparticles"
    options={particleConfig}
    init={customInit}
/>
      
    );
};

export default ParticleMain;