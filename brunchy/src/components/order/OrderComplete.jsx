import style from "./OrderComplete.module.scss";
import React, { useRef, useEffect } from "react";
import Button from "../button/Button";

const OrderComplete = ({ handleCompleteClick, handleOutsideClick }) => {
  const completeRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!completeRef.current.contains(e.target)) {
        handleOutsideClick();
      }
    });
  }, []);

  return (
    <div className={style["orderComplete-container"]}>
      <div ref={completeRef} className={style["orderReview-complete-order"]}>
        <h2>Congratulations!</h2>
        <p>Your order it’s on its way.</p>
        <Button
          handleClick={handleCompleteClick}
          type={"regular"}
          text={"ok"}
        />
      </div>
    </div>
  );
};

export default OrderComplete;
