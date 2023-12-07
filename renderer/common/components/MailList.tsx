import React from 'react';

const MailList = () => {
    return (

        <div className='mail-list-container'>
            <style>
                {`
                .mail-list-container {
                    display: flex;
                    flex-direction: column;
                    width: 20%;
                    height: 100%;
                    background-color: #000;
                    border-right: 1px solid #fff;
                }
                .mail-list-header {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 10%;
                }
                .mail-list-header-title {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 50%;
                    align-items: center;
                    justify-content: center;
                }
                .mail-list-header-search {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 50%;
                    align-items: center;
                    justify-content: center;
                }
                .mail-list-header-search input {
                    width: 80%;
                    height: 50%;
                    border-radius: 5px;
                    border: 1px solid #000;
                }

                .mails-title {
                    color: #fff;
                    font-size: 1.5rem;
                }
                `}
            </style>
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
