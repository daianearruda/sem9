import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes/routes"
import { ContadorProvider } from "./contexts/contador"
import { AuthProvider } from "./contexts/auth"

function App() {
 

  return (
    <>
    <AuthProvider>
     <ContadorProvider>
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
     </ContadorProvider>
     </AuthProvider>
    </>
  )
}

export default App
