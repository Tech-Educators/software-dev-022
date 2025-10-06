import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Otherwise no curleys if its the default export of the file
import App from './App.jsx' 
// if you dont use export default we need curley brackets
// import { Hello } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
