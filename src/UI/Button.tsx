import * as React from "react"

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
type ButtonSize = "default" | "sm" | "lg" | "icon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
  destructive:
    "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline:
    "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline",
}

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md gap-1.5 px-3",
  lg: "h-10 rounded-md px-6",
  icon: "size-9",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp: any = asChild ? "span" : "button" // no Radix Slot

    const classes = `
      inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all 
      disabled:pointer-events-none disabled:opacity-50 outline-none
      focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
      ${variantClasses[variant]} ${sizeClasses[size]} ${className}
    `

    return <Comp ref={ref} className={classes} {...props} />
  }
)

Button.displayName = "Button"
