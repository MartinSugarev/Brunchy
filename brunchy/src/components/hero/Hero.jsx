import style from './Hero.module.scss';
import React, { memo } from 'react'

const Hero = ({text1, text2}) => {
    return (
        <div className={style['hero']}>
            <h1>{text1}</h1>
            <h1>{text2}</h1>
            <p>This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How about you ?</p>
        </div>
    )
}

export default memo(Hero)
