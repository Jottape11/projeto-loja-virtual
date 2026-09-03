import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import ProdutosPage from "./pages/ProdutosPage"
import ContatoPage from "./pages/ContatoPage"

const waze = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/produtos",
    element: <ProdutosPage />,
  },
  {
    path: "/contato",
    element: <ContatoPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={waze} />,
  </StrictMode>,
)
