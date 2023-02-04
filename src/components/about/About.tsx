import React, { FC } from 'react'
import image from '../../assets/programmer.png'
import aboutStyles from './about.module.css'

export const About:FC = function(){
  return(
    <section className={aboutStyles.main_section}>
      <div className={aboutStyles.img_div}>
        <img src={image} />
      </div>
      <div>
        <h1>Hi, I'm Pradyun</h1>
        <p>A frontend developer aspiring to build dynamic user interfaces with tried and tested technology</p>
      </div>
    </section>
  );
}