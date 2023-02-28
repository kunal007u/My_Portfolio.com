import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Appprovider } from './Context'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Appprovider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Appprovider>
)


