import style from "./HeaderBtnContainer.module.scss";
import React, { memo } from "react";
import Button from "../button/Button";

const HeaderBtnContainer = () => {
  return (
    <div className={style["buttons-container"]}>
      <a href="https://www.dreamshot.bg" target="_blank">
        About
      </a>
      <a href="https://www.dreamshot.bg" target="_blank">
        Call Us
      </a>
      <Button
        className={style["button"]}
        text={"free delivery"}
        type={"active"}
      />
    </div>
  );
};

export default memo(HeaderBtnContainer);
