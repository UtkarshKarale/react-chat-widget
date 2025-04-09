import React from 'react';
import { HomeIcon, MessageIcon, HelpIcon, NewsIcon } from './icons';

const TabButton = ({ active, onClick, type }) => {
  const renderIcon = () => {
    switch (type) {
      case 'home':
        return <HomeIcon active={active} />;
      case 'message':
        return <MessageIcon active={active} />;
      case 'help':
        return <HelpIcon active={active} />;
      case 'news':
        return <NewsIcon active={active} />;
      default:
        return null;
    }
  };

  const renderText = () => {
    switch (type) {
      case 'home':
        return 'Home';
      case 'message':
        return 'Message';
      case 'help':
        return 'Help';
      case 'news':
        return 'News';
      default:
        return '';
    }
  };

  return (
    <button 
      className={`tab-button ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {renderIcon()}
      <span>{renderText()}</span>
    </button>
  );
};

export default TabButton; 