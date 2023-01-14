import style from './Card.module.scss';
import React from 'react'
import { memo } from 'react';

const Card = ({image = '/Asset 5.png', name, caption, price}) => {
    return (
        <div className={style['card']}>
            <img className={style['card-image']} src={image} alt="card-image" />
            <div className={style['card-info']}>
              <h6>{name}</h6>
              <p className={style['card-subtitle']}>{caption}</p>
               <p className={style['price']}>{price}</p>
            </div>
            <img className={style['card-basket']} src="/shopping-basket.png" alt="shopping-basket" />
        </div>
    )
}

export default memo(Card)
