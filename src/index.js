import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Store';
import App from './App';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnHover
      theme="colored"
    />
  </Provider>
);

