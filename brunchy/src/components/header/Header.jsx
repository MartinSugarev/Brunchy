import style from './Header.module.scss';
import React, { memo } from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderBtnContainer from './HeaderBtnContainer';


const Header = () => {
    return (
        <div className={style['header']}>
            <HeaderTitle />
            <HeaderBtnContainer />
        </div>
    )
}

export default memo(Header)
