import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';

const ChatIframe = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const toggleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="chat-button" onClick={toggleChat}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className={`chat-iframe ${isOpen ? 'visible' : ''} ${isMaximized ? 'maximized' : ''}`}>
                <ChatWindow 
                    isOpen={isOpen} 
                    isMaximized={isMaximized} 
                    onToggleMaximize={toggleMaximize}
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                />
            </div>
        </>
    );
};

export default ChatIframe; 