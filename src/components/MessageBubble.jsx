import React from 'react';

const MessageBubble = ({ message, isUser, type, children }) => {
    const bubbleClass = type ? type : (isUser ? 'user' : 'bot');
    const content = message || children;

    return (
        <div className={`message-bubble ${bubbleClass}`}>
            {content}
        </div>
    );
};

export default MessageBubble; 