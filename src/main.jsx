import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import router from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';
import FirebaseProvider from './authProvider/FirebaseProvider';
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
      </HelmetProvider>
    </FirebaseProvider>
  </StrictMode>,
)
