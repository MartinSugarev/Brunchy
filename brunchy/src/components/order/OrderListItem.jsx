import style from './OrderListItem.module.scss';
import React from 'react'

const OrderListItem = ({name, price}) => {
    return (
        <div className={style['orderListItem-container']}>
              <p>{name}</p>  
              <p><span>$</span>{price}</p>
        </div>
    )
}

export default OrderListItem
