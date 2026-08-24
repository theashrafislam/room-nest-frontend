import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='text-red-500'>Hello I am ok</h1>
  </StrictMode>,
)
