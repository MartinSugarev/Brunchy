import React, {useEffect, useState} from 'react';
import style from './App.module.scss'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Order from './components/order/Order';
import CardContainer from './components/card/CardContainer';
import OrderReview from './components/order/OrderReview'
import cardInfo from './data.json'
import OrderListItem from './components/order/OrderListItem'

function App() {

  const [cardItems, setCardItems] = useState([])

  useEffect(() => {
     setCardItems(() => cardInfo.items)
  }, [])


  return (
    <div className={style['app']}>
       <Header />
       <Hero />
       <CardContainer items={cardItems}/>
       <Order />
    </div>
  );
}

export default App;
