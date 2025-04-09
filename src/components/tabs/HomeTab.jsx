import React from 'react';

const HomeTab = () => {
    return (
        <div className="tab-content">
            <button className="ask-question">
                Ask a question
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    );
};

export default HomeTab; 