import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "./App.tsx"

import "./index.css"

const rootId = "root"

const rootElement = document.getElementById(rootId)

if (!rootElement) {
  throw new Error(
    `No root element found with id: "${rootId}". Please check the index.html file.`
  )
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
