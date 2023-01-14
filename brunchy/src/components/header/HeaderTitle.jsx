import style from './HeaderTitle.module.scss';
import React, {memo} from 'react';

const HeaderTitle = ({title = 'Brunchy'}) => {
    return (
        <div className={style['headerTitle-container']}>
            <h1>{title}</h1>
        </div>
    )
}

export default memo(HeaderTitle)
