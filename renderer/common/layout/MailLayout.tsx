import React from 'react';
import FullMail from '../components/FullMail';
import MailList from '../components/MailList';

const MailLayout = () => {
    return (
        <div className='mail-container'>
            <MailList />
            <FullMail />
        </div>
    );
}

export default MailLayout;
