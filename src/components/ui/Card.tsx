import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils/cn"

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = "Card"

export default Card
