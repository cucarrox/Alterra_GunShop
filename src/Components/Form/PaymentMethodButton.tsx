import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
};

export const PaymentMethodButton = forwardRef(function PaymentMethodButton(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <label
      data-state={isSelected}
      className={`flex justify-center items-center rounded-lg gap-2 p-3 px-5 w-1/3 text-xs bg-gray-200 border-2 active:bg-blue-100 active:border-blue-300 select-none cursor-pointer transition hover:bg-gray-300 hover:border-gray-400
      ${isSelected ? "bg-blue-100 border-blue-300 hover:bg-blue-100 hover:border-blue-300" : ""}  
      `}
    >
      <input className="hidden disabled:bg-gray-600" type="radio" ref={ref} {...rest} />
      {children}
    </label>
  );
});
