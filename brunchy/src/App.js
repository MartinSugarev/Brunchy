import React, {useEffect, useState, createContext, useReducer} from 'react';
import style from './App.module.scss'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Order from './components/order/Order';
import CardContainer from './components/card/CardContainer';
import cardInfo from './data.json';
import reducer from './reducer';

export const Context = createContext();

function App() {
  const initialState = {items: [], price: 0}
  const [cardItems, setCardItems] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
     setCardItems(() => cardInfo.items)
  }, [])


  return (
   <> 
    <Context.Provider value={{state, dispatch}}>
    <div className={style['app']}>
       <Header />
       <Hero />
       <CardContainer items={cardItems}/>
    </div>
       <Order />
    </Context.Provider>
   </> 
  );
}

export default App;
