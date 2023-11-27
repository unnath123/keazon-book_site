import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import ContextProvider from './context/ContextProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ContextProvider>
)
