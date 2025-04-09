import React from 'react';
import MessageBubble from '../MessageBubble';

const HelpTab = () => {
    return (
        <div className="tab-content">
            <MessageBubble type="bot">
                Frequently Asked Questions:
            </MessageBubble>
            <MessageBubble type="bot">
                1. How do I reset my password?
                2. How can I update my profile?
                3. What are your business hours?
                4. How do I contact support?
            </MessageBubble>
            <MessageBubble type="bot">
                Select a question or type your own question below.
            </MessageBubble>
        </div>
    );
};

export default HelpTab; 