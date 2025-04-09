// Initialize chat widget
window.initChatWidget = function(config = {}) {
    // Create container for widget if it doesn't exist
    let container = document.getElementById('react-chat-widget');
    if (!container) {
        container = document.createElement('div');
        container.id = 'react-chat-widget';
        document.body.appendChild(container);
    }

    // Initialize React component
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(ReactChatWidget.default, config));
};

// Auto-initialize if data-auto-init attribute is present
document.addEventListener('DOMContentLoaded', () => {
    const script = document.querySelector('script[data-chat-widget]');
    if (script && script.getAttribute('data-auto-init') === 'true') {
        const config = script.getAttribute('data-config');
        window.initChatWidget(config ? JSON.parse(config) : {});
    }
}); 