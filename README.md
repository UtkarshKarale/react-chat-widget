# React Chat Widget

A modern, customizable chat widget built with React, inspired by Intercom's design. This widget provides a seamless chat experience with a clean black and white interface.

## Features

- 💬 Clean, modern chat interface
- 🔄 Multiple tabs (Home, Messages, Help, News)
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🔲 Maximize/Minimize functionality
- 🎨 Black and white theme
- 💪 Built with React + Vite

## Installation

### NPM Package

1. Install the package:
```bash
npm install react-chat-widget
```

2. Import and use in your React application:
```jsx
import { ChatWidget } from 'react-chat-widget';
import 'react-chat-widget/style.css';

function App() {
  return (
    <div>
      <ChatWidget />
    </div>
  );
}
```

### CDN Usage

Add the following scripts to your HTML:

```html
<!-- Add React and ReactDOM -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- Add Chat Widget -->
<script 
  src="https://unpkg.com/react-chat-widget@latest/dist/chat-widget.iife.js"
  data-chat-widget
  data-auto-init="true">
</script>
<link 
  rel="stylesheet" 
  href="https://unpkg.com/react-chat-widget@latest/dist/style.css">
```

Or initialize manually:

```html
<script>
  window.initChatWidget({
    // Optional configuration
    theme: 'light',
    position: 'bottom-right',
    // ... other options
  });
</script>
```

## Development

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/react-chat-widget.git
```

2. Install dependencies:
```bash
cd react-chat-widget
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Building

- Build as NPM package:
```bash
npm run build
```

- Build for CDN:
```bash
npm run build:cdn
```

## License

MIT License
