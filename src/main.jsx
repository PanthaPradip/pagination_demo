import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.querySelector('.main-container')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
