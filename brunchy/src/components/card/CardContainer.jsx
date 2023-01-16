import style from './CardContainer.module.scss';
import React, { memo } from 'react'
import Card from './Card';


const CardContainer = ({items = []}) => {
    return (
        <div className={style['card-container']}>
           {items.map((i, index) => {
               return <Card key={index} image={i.image} name={i.name} caption={i.caption} price={i.price}/>
           })}
        </div>
    )
}

export default memo(CardContainer)
