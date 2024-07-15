import { FC, InputHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva("p-2 pl-3 bg-[#EDEDED] border-[#E6E5E5] border-2 placeholder:text-theme_light my-2 rounded-sm", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input: FC<InputProps> = ({ className, variant, ...props }) => {
  return <input className={cn(inputVariants({ variant, className }))} {...props} />;
};

export { Input, inputVariants };
