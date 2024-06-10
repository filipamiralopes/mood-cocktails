import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <Router>
  <ScrollToTop />
    <App/>
  </Router>
</React.StrictMode>,
)
