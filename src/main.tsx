import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Console
console.log(
  '%c Hey, you found the DevTools.',
  'color: #F59E0B; font-size: 16px; font-weight: bold;'
)
console.log(
  '%cI\'m Emmanuel Owoeye — Web Application Developer.\nIf you\'re hiring or have a project, let\'s talk: emmanuelowoeyet@gmail.com',
  'color: #9CA3AF; font-size: 13px; line-height: 1.6;'
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)