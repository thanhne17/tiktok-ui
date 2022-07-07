import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Acount from '~/components/AccountItem';

const cx = classNames.bind(styles);

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult(['a', 'b']);
        }, 3000);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="logo" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    // content="Tìm kiếm"
                    render={(attrs) => (
                        <div className={cx('search-reault')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Account</h3>
                                <Acount />
                                <Acount />
                                <Acount />
                                <Acount />
                                <Acount />
                                <Acount />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
};

export default Header;
