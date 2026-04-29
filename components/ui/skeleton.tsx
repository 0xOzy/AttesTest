import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse bg-border-color/20 border-2 border-border-color/20", className)}
      {...props}
    />
  )
}

export { Skeleton }
