import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-[8px] font-bold flex justify-center items-center gap-2 disabled:opacity-[50%] disabled:cursor-not-allowed transition",
  {
    variants: {
      variant: {
        default: "bg-blueLight hover:bg-blueLightDark text-primaryText",
        warning: "bg-warning hover:bg-warningDark text-primaryText",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    ></button>
  );
};
Button.displayName = "button";

export { Button, buttonVariants };
