import React from 'react';
import MailList from '../components/MailList';

const MailLayout = () => {
    return (
        <div className='mail-container'>
            <MailList />
            <div className='mail-content-container'></div>
        </div>
    );
}

export default MailLayout;