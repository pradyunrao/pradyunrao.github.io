import React, { FC } from 'react'
import background from '../../assets/background.jpg'
import cardStyle from './card.module.css'
export const Card: FC = function() {
  return(
    <div className={cardStyle.main_div} >
      <div className={cardStyle.img_div}>
        <img src={background} />
      </div>
      <div className={cardStyle.test_div}>
        <h1>Project Name</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati accusamus voluptas suscipit explicabo recusandae voluptate ad commodi itaque dicta! In voluptatem consectetur aperiam unde omnis atque at dolor quod.</p>
      </div>
    </div>
  );
}
