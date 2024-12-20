//DO NOT TOUCH THIS FILE!!!
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { AuthProvider } from "./context/AuthContext"

const queryClient = new QueryClient()
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
