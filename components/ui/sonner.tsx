"use client"

import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="system"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-bg-base group-[.toaster]:text-text-primary group-[.toaster]:border-[3px] group-[.toaster]:border-border-color group-[.toaster]:shadow-[4px_4px_0px_0px_var(--border-color)] group-[.toaster]:rounded-none flex gap-3 p-4 items-start",
          description: "group-[.toast]:text-text-primary/70 group-[.toast]:font-mono text-sm",
          actionButton:
            "group-[.toast]:bg-accent-primary group-[.toast]:text-bg-base font-bold",
          cancelButton:
            "group-[.toast]:bg-bg-base group-[.toast]:text-text-primary",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
