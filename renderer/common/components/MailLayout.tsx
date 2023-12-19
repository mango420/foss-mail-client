import React from 'react';
import MailList from './MailList';
import './MailLayout.css';

const MailLayout = () => {
    return (
        <div className='mail-container'>
            <MailList />
            <div className='mail-content-container'></div>
        </div>
    );
}

export default MailLayout;