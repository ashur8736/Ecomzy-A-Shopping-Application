import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/Store';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './compo/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
  <AuthProvider>
  <App/>
  </AuthProvider>
  <Toaster/>
  </Provider>
  </BrowserRouter>
);