import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ContextoProvider} from './contexto/contexto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextoProvider>
    <App />
    </ContextoProvider>
  </React.StrictMode>,
)
