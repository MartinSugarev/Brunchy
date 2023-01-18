import style from "./HeaderTitle.module.scss";
import React from "react";

const HeaderTitle = () => {
  return (
    <div className={style["headerTitle-container"]}>
      <h1>Brunchy</h1>
    </div>
  );
};

export default HeaderTitle;
