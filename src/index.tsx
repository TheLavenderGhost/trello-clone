import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AppStateProvider } from './app/AppStateContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Suspense fallback="loading...">
    <React.StrictMode>
      <DndProvider backend={HTML5Backend}>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </DndProvider>
    </React.StrictMode>
  </Suspense>
);
