import React from 'react' 
import Particles from 'react-particles-js'
import ParticlesConfig from '../config/partical-js-config'

const ParticalBackground=()=>{
    return(
        <Particles params={ParticlesConfig}></Particles>
    )
}

export default ParticalBackground;