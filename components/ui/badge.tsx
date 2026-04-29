import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 font-bold font-mono text-xs transition-colors border-[3px] border-border-color shadow-[2px_2px_0px_0px_var(--border-color)]",
  {
    variants: {
      variant: {
        default:
          "bg-accent-primary text-bg-base",
        secondary:
          "bg-text-primary text-bg-base",
        destructive:
          "bg-red-500 text-bg-base",
        outline: "text-text-primary bg-bg-base",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
