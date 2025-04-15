// src/index.tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'; import React from 'react';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<React.StrictMode>
    {/* <ChakraProvider> */}
      <App />
    {/* </ChakraProvider> */}
  </React.StrictMode>
);

reportWebVitals();
