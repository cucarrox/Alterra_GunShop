import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { QuantityInput } from "@/Components/Form/QuantiyInput";
import { useCart } from "../../Hooks/useCart";

type Props = {
  guns: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ guns }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const { addItem } = useCart()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    setQuantity((state) => state - 1)
  }

  function handleAddItem() {
    addItem({ id: guns.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if(isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    } return () => {
      if(timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <>
      <form className="bg-[#f3f2f2] w-[235px] h-[305px] m-5 rounded-tr-[40px] rounded-bl-[40px] rounded-tl-md rounded-br-md text-center shadow-md justify-self-center">
        <div className="relative mb-[-10px] flex justify-center">
          <img className="w-50 h-50 rounded-full" src={guns.image} />
        </div>
        <div>
          {
            guns.tags.map((tag) => (
              <span 
                className="bg-[#f1e9c9] text-[#cd963e] font-bold p-1 px-4 rounded-[8px]"
                key={tag}
                >
                {tag}
              </span>
            ))
          }
        </div>
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold py-1">{guns.title}</h1>
          <p className="font-light text-sm h-9 text-gray-600">
            {guns.description}
          </p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="w-[40%] flex gap-1 justify-center items-center">
            <span>£</span>
            <span className="flex items-center text-xl font-bold text-gray-700">
              {guns.price.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <QuantityInput
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
            <button
              className="bg-blue_light hover:bg-blue_dark transition p-2 rounded text-white"
              disabled={isItemAdded}
              onClick={handleAddItem}
            >
              {
                isItemAdded ? (
                  <CheckFat
                    weight="fill"
                    className="w-5 h-5"
                  />
                ) : (
                  <ShoppingCart weight="fill" className="w-5 h-5" />
                )
              }
            </button>
          </div>
        </div>
      </form>
    </>
  );
}