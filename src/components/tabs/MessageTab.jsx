import React from 'react';
import MessageBubble from '../MessageBubble';

const MessageTab = () => {
    return (
        <div className="tab-content message-tab">
            <div className="message-section">
                <div className="message-header">Recent Messages</div>
                <MessageBubble type="bot">
                    Hello! How can I assist you today?
                </MessageBubble>
                <MessageBubble type="user">
                    I need help with my account settings.
                </MessageBubble>
                <MessageBubble type="bot">
                    I'd be happy to help you with your account settings. What specific changes would you like to make?
                </MessageBubble>
            </div>

            <div className="message-section">
                <div className="message-header">Previous Conversations</div>
                <MessageBubble type="bot">
                    Your previous conversations will appear here.
                </MessageBubble>
                <MessageBubble type="user">
                    How do I reset my password?
                </MessageBubble>
                <MessageBubble type="bot">
                    To reset your password, please follow these steps:
                    1. Click on "Forgot Password"
                    2. Enter your email
                    3. Check your inbox for reset instructions
                </MessageBubble>
            </div>

            <div className="message-section">
                <div className="message-header">Saved Messages</div>
                <MessageBubble type="bot">
                    Your saved messages and important information will be stored here.
                </MessageBubble>
            </div>
        </div>
    );
};

export default MessageTab; 