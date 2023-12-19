import React from 'react';

const MailList = () => {
    return (

        <div className='mail-list-container'>
            <div className='mail-list-header'>
                <div className='mail-list-header-title'>
                    <h2 className='mails-title'>Mails</h2>
                </div>
                <div className='mail-list-header-search'>
                    <input type='text' placeholder='Search' />
                </div>
            </div>
            <div className='mail-list-content'>
            </div>
        </div>
    );
}

export default MailList;
