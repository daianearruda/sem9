import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes/routes"
import { ContadorProvider } from "./contexts/contador"

function App() {
 

  return (
    <>
     <ContadorProvider>
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
     </ContadorProvider>
    </>
  )
}

export default App
