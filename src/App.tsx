//import './App.css'
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "./Context/CartProvider";

import { Header } from "./Components/Header/Header";

// Exibição completa dos componentes
export function App() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <CartContextProvider>
          <Header />
          <Outlet />
        </CartContextProvider>
      </div>
    </>
  );
}
