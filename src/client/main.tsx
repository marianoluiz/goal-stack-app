import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GoalsProvider } from "./hooks/GoalsContext";
import './styles/Index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoalsProvider>
      <App />
    </GoalsProvider>
  </StrictMode>,
);