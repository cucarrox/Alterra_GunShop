import { Minus, Plus } from "@phosphor-icons/react";

type Props = {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
};

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  return (
    <div className="rounded-[8px] bg-gray-200 flex">
      <button className="hover:bg-gray-300 rounded-l-lg h-100 px-1.5 p-1" onClick={decrementQuantity}>
        <Minus className="transition" size={14} />
      </button>
      <span className="py-1 text-black flex items-center px-1.5">
        {quantity}
      </span>
      <button className="hover:bg-gray-300 rounded-r-lg h-100 px-1.5 p-1" onClick={incrementQuantity}>
        <Plus className="transition" size={14} />
      </button>
    </div>
  );
}
