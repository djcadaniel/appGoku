import { Route, Routes } from "react-router"
import { routes } from "./routes"


export const GokuRoutes = () => {
  return (
    <Routes>
      {
        routes.map(route => (
          <Route 
            key={route.path}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))
      }
    </Routes>
  )
}