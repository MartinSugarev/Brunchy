import style from './Hero.module.scss';
import React from 'react'

const Hero = () => {
    return (
        <div className={style['hero']}>
            <h1>The fastest      brunch delivery in</h1>
            <h1>Your city</h1>
            <p>This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How about you ?</p>
        </div>
    )
}

export default Hero
