import { Toaster } from "react-hot-toast"
import { AppRouterProvider } from "./routes/provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from "./features/auth/context/AuthContext"

function App() {
  const queryClient =  new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRouterProvider />
        <Toaster position="top-right" />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
