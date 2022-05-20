import App from './App'
import { BakeryAdd } from './Bakery/BakeryProdutos';
import { BakeryLogin } from './Bakery/BakeryLogin';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { Routes, Route } from "react-router-dom";

import './global.css'

const roots = ReactDOM.createRoot(document.getElementById('root')!)

roots.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={ <BakeryLogin /> } />
      <Route path="insert" element={ <BakeryAdd /> } />
    </Routes>
  </BrowserRouter>
)
