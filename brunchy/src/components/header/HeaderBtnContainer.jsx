import style from './HeaderBtnContainer.module.scss';
import React, { memo } from 'react';
import Button from '../button/Button';

const HeaderBtnContainer = () => {
    return (
        <div className={style['buttons-container']}>
            <Button text={'about'} />
            <Button text={'call us'}/>
            <Button text={'free delivery'} type={'active'}/>
        </div>
    )
}

export default memo(HeaderBtnContainer)
