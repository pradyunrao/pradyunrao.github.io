import React, { FC } from 'react'
import { Card } from '../card/Card';
import projectStyle from './projects.module.css'

export const Projects:FC = function(){
  return(
    <div className={projectStyle.main_div}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}