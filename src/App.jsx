import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} />
    </>
  )
)

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
