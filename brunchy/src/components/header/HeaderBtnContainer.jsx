import style from './HeaderBtnContainer.module.scss';
import React, { memo } from 'react';
import Button from '../button/Button';

const HeaderBtnContainer = () => {
    return (
        <div className={style['buttons-container']}>
            <Button className={style['button']} text={'about'} />
            <Button className={style['button']} text={'call us'}/>
            <Button className={style['button']} text={'free delivery'} type={'active'}/>
        </div>
    )
}

export default memo(HeaderBtnContainer)
