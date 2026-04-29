import React from 'react';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-bg-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-[3px] border-border-color shadow-brutal hover:shadow-brutal-active hover:translate-y-[2px] hover:translate-x-[2px]',
  {
    variants: {
      variant: {
        default: 'bg-accent-primary text-bg-base',
        destructive: 'bg-red-500 text-white',
        outline: 'bg-bg-base text-text-primary',
        secondary: 'bg-text-primary text-bg-base',
        ghost: 'border-transparent shadow-none hover:bg-text-primary/10 hover:shadow-none hover:translate-y-0 hover:translate-x-0',
        link: 'text-text-primary underline-offset-4 hover:underline shadow-none border-transparent hover:shadow-none hover:translate-y-0 hover:translate-x-0',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
