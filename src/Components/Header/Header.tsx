import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import alterraStamp from "../../../Public/Imgs/altrraStamp.png";
import { Link } from "react-router-dom";
import { useCart } from "../../Hooks/useCart";

export function Header() {
  const { cart } = useCart();

  return (
    <>
      <header className="w-full p-2 px-28 flex justify-between items-center bg-theme_dark">
        <Link to="/" title="Home">
          <img
            className="w-[55%] select-none"
            src={alterraStamp}
            alt="Alterra Logo"
          />
        </Link>
        <aside className="flex items-center px-10 gap-8">
          <span className="p-2 rounded-md text-white flex items-center gap-1 bg-[#477096] cursor-pointer">
            <MapPin className="w-6 h-6" />
            Itajaí, SC - Brazil
          </span>
          <Link
            to={"cart"}
            aria-disabled={cart.length === 1}
            title="Carrinho"
            className="bg-[#324d66] hover:bg-[#415466] p-1 rounded-md relative"
          >
            <ShoppingCart
              weight="fill"
              className="w-8 h-8 p-0.5 text-blue_light"
            />
            {cart.length > 0 ? (
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full text-white px-1.5 py-0.5 text-xs">
                {cart.length}
              </span>
            ) : null}
          </Link>
        </aside>
      </header>
    </>
  );
}
