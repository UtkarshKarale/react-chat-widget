import React from 'react';

const ChatButton = ({ onClick, isOpen }) => (
    <div className={`chat-button ${isOpen ? 'hidden' : ''}`} onClick={onClick}>
        <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
    </div>
);

export default ChatButton; 