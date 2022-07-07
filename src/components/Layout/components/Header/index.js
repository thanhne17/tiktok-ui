import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="logo" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear-btn')}>
                        {/* clear */}
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    {/* loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        {/* search */}
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
};

export default Header;
