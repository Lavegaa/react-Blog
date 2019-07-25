import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames';
import Footer from 'components/common/Footer';
import HeaderContainer from '../../../containers/common/HeaderContainer';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <HeaderContainer/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default PageTemplate;