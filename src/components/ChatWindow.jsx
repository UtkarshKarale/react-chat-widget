import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import TabButton from './TabButton';
import { MaximizeIcon, MinimizeIcon } from './icons';
import HomeTab from './tabs/HomeTab';
import MessageTab from './tabs/MessageTab';
import HelpTab from './tabs/HelpTab';
import NewsTab from './tabs/NewsTab';

const ChatWindow = ({ isOpen, isMaximized, onToggleMaximize, activeTab, onTabChange }) => {
    const chatAreaRef = useRef(null);

    useEffect(() => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    }, [activeTab]);

    const renderHeader = () => {
        switch (activeTab) {
            case 'message':
                return (
                    <div className="chat-header">
                        <div className="header-title">Messages</div>
                        <button className="header-button" onClick={onToggleMaximize}>
                            {isMaximized ? <MinimizeIcon /> : <MaximizeIcon />}
                        </button>
                    </div>
                );
            case 'home':
                return (
                    <div className="chat-header home-header">
                        <h2>Hello there.</h2>
                        <h3>How can we help?</h3>
                    </div>
                );
            default:
                return (
                    <div className="chat-header">
                        <div className="header-title">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</div>
                        <button className="header-button" onClick={onToggleMaximize}>
                            {isMaximized ? <MinimizeIcon /> : <MaximizeIcon />}
                        </button>
                    </div>
                );
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'home':
                return <HomeTab />;
            case 'message':
                return <MessageTab />;
            case 'help':
                return <HelpTab />;
            case 'news':
                return <NewsTab />;
            default:
                return <HomeTab />;
        }
    };

    if (!isOpen) return null;

    return (
        <div className="chat-window" data-active-tab={activeTab}>
            <div className="chat-header">
                <div className="header-title">
                    {activeTab === 'message' && 'Messages'}
                    {activeTab === 'help' && 'Help Center'}
                    {activeTab === 'news' && 'Latest Updates'}
                </div>
                <div className="header-buttons">
                    <button className="header-button" onClick={onToggleMaximize}>
                        {isMaximized ? <MinimizeIcon /> : <MaximizeIcon />}
                    </button>
                </div>
            </div>
            <div className="chat-content" ref={chatAreaRef}>
                {renderTabContent()}
            </div>
            <div className="tab-bar">
                <TabButton active={activeTab === 'home'} onClick={() => onTabChange('home')} type="home" />
                <TabButton active={activeTab === 'message'} onClick={() => onTabChange('message')} type="message" />
                <TabButton active={activeTab === 'help'} onClick={() => onTabChange('help')} type="help" />
                <TabButton active={activeTab === 'news'} onClick={() => onTabChange('news')} type="news" />
            </div>
        </div>
    );
};

export default ChatWindow; 