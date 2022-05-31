import React from 'react'
import ParticlesConfig from '../config/particle-config';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ ParticlesConfig }
    />
  )
}

  export default Particle