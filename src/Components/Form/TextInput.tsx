import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
  FC,
} from "react";

import { FieldError } from "react-hook-form";
import { inputVariants } from "../ui/Input";
import { WarningCircle } from "@phosphor-icons/react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  error?: FieldError;
};

export const textInputVariant = cva("p-3 bg-[#EDEDED] border-[#E6E5E5] border-2 placeholder:text-theme_light my-2 rounded-none w-full")

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textInputVariant> {
      optional?: boolean;
      containerProps?: HTMLAttributes<HTMLDivElement>;
      error?: FieldError;
    }

export const TextInput: FC<InputProps> = forwardRef(function TextInput(
  { className, optional, error, containerProps, onFocus, onBlur, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <div className="" {...containerProps}>
      <label className="flex items-center justify-between rounded-md border-1 border-solid" data-state={isFocused ? "focused" : "blurred"}>
        <input
          className={cn(inputVariants({ className }))}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />

        {optional ? <span className="absolute right-3 top-[17px] text-gray-400 select-none">Opcional</span> : null}
      </label>

      {error?.message ? (
        <div className="text-red-500 flex items-center gap-1" role="alert">
          <WarningCircle className="w-4 h-4" />
          {error.message}
        </div>
      ) : null}
    </div>
  );
});
