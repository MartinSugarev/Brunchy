import style from './Order.module.scss';
import React, { memo, useEffect, useState, useRef } from 'react';
import OrderReview from './OrderReview';
import classNames from 'classnames';
import OrderComplete from './OrderComplete';


const Order = ({price}) => {

    const [isActive, setIsActive] = useState(true);
    const [showComplete, setShowComplete] = useState(false);

    const reviewRef = useRef()

    useEffect(() => {
       document.addEventListener('click', (e) => {
         hideReviewBar(e)
       })
    }, [])

    const handleShowReview = (e) => {
        e.stopPropagation()
        setIsActive(false)
    }

    const hideReviewBar = (e) => {
        e.stopPropagation()
        if(!reviewRef.current.contains(e.target)){
            setIsActive(true)   
         }   
    }

    const handleOkCompleteClick = () => {
        setIsActive(false)
        setShowComplete(false)
    }

    const handleOrderNowClick = (e) => {
        e.stopPropagation()
        setShowComplete(true)
        setIsActive(false)
    }

    return (
     <>   
      <div className={classNames({
          [style['order-fixed-background']]: true,
          [style['not-active']]: isActive,
        })}> 
        <div className={style['order-information-container']}>
            <div ref={reviewRef} className={classNames({
                [style['order-list-container']]: true,
                [style['hidden']]: isActive,
            })}>
                <OrderReview />
            </div>
        <div className={style['order-container']}>
            <img onClick={handleShowReview} className={style['order-basket']} src="/shopping-basket.png" alt="shopping-basket" />
             <p>{price}</p>
             <button onClick={handleOrderNowClick} className={style['order-button']}>Order Now</button>
        </div>
        </div>
        </div> 
       <div style={{display: showComplete ? 'block' : 'none'}}>
          <OrderComplete handleCompleteClick={handleOkCompleteClick} />
        </div> 

      </>  

    )
}

export default memo(Order)