import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Account.module.scss';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(style);

const Acount = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1657353600&x-signature=gbgJXKgldM03bV2arR3HsJzhPrc%3D"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nva</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <span className={cx('user-name')}>nva</span>
            </div>
        </div>
    );
};

export default Acount;
