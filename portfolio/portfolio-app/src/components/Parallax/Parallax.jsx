import React from 'react'
import styles from './Parallax.module.css'
import { Parallax, ParallaxLayer } from "react-parallax";

const Paralla = () => {
  return (
    <div>
         <Parallax className={styles.image}
        blur={5}
        bgImage="https://res.cloudinary.com/dfeyofjln/image/upload/v1700743179/WorkStation2_dgt2he.jpg"
        strength={200}
      
      >
        <div className={styles.parallaxcontent}>
          <span>Check out my résumé!</span>
          <a target="_blank" rel="noopener" href="https://docs.google.com/document/d/1grsYqS3DMmud2KV_cv3n7p5ioeOyeAjJj6wywa7zY-k/edit?usp=sharing "><button>Click To View</button></a> 
        </div>
      </Parallax>
    </div>
  )
}

export default Paralla