import style from './OrderReview.module.scss';
import React, { memo }  from 'react';
import OrderListItem from './OrderListItem';

const OrderReview = ({price = 0, list = []}) => {
    return (
        <div className={style['orderReview-container']}>
             {list.map((item, index) => {
                 return <OrderListItem key={index} name={item.name} price={item.price} />
             })}
            <div className={style["total-container"]}> 
              <p>Total</p>  
              <p className={style['price']}>{price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default memo(OrderReview)
