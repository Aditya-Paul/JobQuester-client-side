import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './components/Routes/Router.jsx';
import Authprovider from './components/Provider/Authprovider.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Authprovider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>,
)
