//import './App.css'

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartContextProvider } from "./Context/CartProvider";

function App() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
