import style from './OrderReview.module.scss';
import React, { memo }  from 'react';
import OrderListItem from './OrderListItem';

const OrderReview = ({price = 0, list}) => {
    return (
        <div className={style['orderReview-container']}>
             <OrderListItem />
             <OrderListItem />
             <OrderListItem />
            <div className={style["total-container"]}> 
              <p>Total</p>  
              <p><span>$</span>{price}</p>
            </div>
        </div>
    )
}

export default memo(OrderReview)
