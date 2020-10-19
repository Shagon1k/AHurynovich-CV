import ReactDOM from 'react-dom';
import { createApp } from './application';

const startClientApp = () => {
  const app = createApp({ isServer: false });
  const renderFunc = WITH_SSR ? ReactDOM.hydrate : ReactDOM.render;

  renderFunc(
    app,
    document.getElementById('root')
  );
}

if (typeof window !== 'undefined') {
  startClientApp();
}