import React from 'react';
import MessageBubble from '../MessageBubble';

const NewsTab = () => {
    return (
        <div className="tab-content">
            <MessageBubble type="bot">
                Latest Updates and Announcements:
            </MessageBubble>
            <MessageBubble type="bot">
                🎉 New Feature Release: Enhanced chat interface
                📢 System Maintenance: Scheduled for next week
                🔔 New Support Hours: Now available 24/7
            </MessageBubble>
            <MessageBubble type="bot">
                Stay tuned for more updates!
            </MessageBubble>
        </div>
    );
};

export default NewsTab; 