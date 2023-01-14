import style from './Button.module.scss';
import classNames from 'classnames'

import React, { memo } from 'react'

 const Button = ({text = 'active', type}) => {

    const btnType = type === 'regular' ? 'regular' :  'active';

    return (
       <button className={classNames({
           [style['button']]: true,
           [style[`${btnType}`]]: type ? true : false
        })}>{text}</button>
    )
}

export default memo(Button)
