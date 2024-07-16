import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { App } from "./App.tsx";
import { Home } from './Pages/Home/Home';
import { Cart } from './Pages/Cart/Cart';
import { Success } from './Pages/Success/Success';
//import { Loading } from './Components/Loading/Loading';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Uma forma diferente de criar rotas com react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order/:orderId/success",
        element: <Success />
      },
      {
        //path: "/loading",
        //element: <Loading />
      }
    ]
  }
])

// Exebição das páginas no prório main.tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

/*

const [isLoading, setIsLoading] = useState(false);
const location = useLocation();

useEffect(() => {
  const handleStart = () => setIsLoading(true);
  const handleComplete = () => setIsLoading(false);

  handleStart();
  const timer = setTimeout(() => {
    handleComplete();
  }, 300);

  return () => clearTimeout(timer);
}, [location]);

{isLoading && <Loading />}

*/