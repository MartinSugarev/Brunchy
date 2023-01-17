import style from './OrderListItem.module.scss';
import React from 'react'

const OrderListItem = ({name, price}) => {
    return (
        <div className={style['orderListItem-container']}>
              <p>{name}</p>  
              <p className={style['orderListItem-price']}>{price.toFixed(2)}</p>
        </div>
    )
}

export default OrderListItem
