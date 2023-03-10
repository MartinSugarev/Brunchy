import style from "./Card.module.scss";
import React from "react";
import { memo, useContext, useEffect } from "react";
import ItemClass from "../../itemClass";
import { Context } from "../../App";

const Card = ({ image, name, caption, price }) => {
  const { state, dispatch } = useContext(Context);

  const handleBasketClick = () => {
    const obj = new ItemClass(name, price);
    dispatch({ type: "add", payload: obj });
  };

  return (
    <div className={style["card"]}>
      <img className={style["card-image"]} src={image} alt="card-image" />
      <div className={style["card-info"]}>
        <h6>{name}</h6>
        <p className={style["card-subtitle"]}>{caption}</p>
        <p className={style["price"]}>{price.toFixed(2)}</p>
      </div>
      <img
        onClick={handleBasketClick}
        className={style["card-basket"]}
        src="/shopping-basket.png"
        alt="shopping-basket"
      />
    </div>
  );
};

export default memo(Card);
