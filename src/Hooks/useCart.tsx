import { useContext } from "react"

import { CartContext } from "../Context/CartProvider"

export function useCart() {
  return useContext(CartContext)
}
