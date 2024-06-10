import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BalanceComponent from './components/Balance';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Deposit from './components/Deposit';
// import Withdraw from './components/Withdraw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BalanceComponent />
    {/* <Deposit /> */}
    {/* <Withdraw /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
