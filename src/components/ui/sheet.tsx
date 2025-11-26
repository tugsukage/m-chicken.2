import * as React from "react"
import { X } from "lucide-react"

const Sheet = ({ children, open, onOpenChange }: { children: React.ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void }) => {
  const [internalOpen, setInternalOpen] = React.useState(open ?? false)

  const isOpen = open !== undefined ? open : internalOpen

  const handleOpenChange = (newOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  return (
    <SheetContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </SheetContext.Provider>
  )
}

interface SheetContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const SheetContext = React.createContext<SheetContextType | undefined>(undefined)

const useSheet = () => {
  const context = React.useContext(SheetContext)
  if (!context) {
    throw new Error("Sheet components must be used within a Sheet provider")
  }
  return context
}

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ asChild, ...props }, ref) => {
  const { onOpenChange } = useSheet()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onOpenChange(true)
    props.onClick?.(e)
  }

  if (asChild && React.isValidElement(props.children)) {
    return React.cloneElement(props.children as React.ReactElement, {
      onClick: handleClick,
    } as any)
  }

  return <button ref={ref} {...props} onClick={handleClick} />
})
SheetTrigger.displayName = "SheetTrigger"

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "top" | "right" | "bottom" | "left"
}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ side = "right", className, ...props }, ref) => {
    const { open, onOpenChange } = useSheet()

    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onOpenChange(false)
        }
      }

      if (open) {
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
      }
    }, [open, onOpenChange])

    if (!open) return null

    const sideStyles = {
      top: "fixed top-0 left-0 right-0 border-b data-[state=open]:slide-in-from-top-full",
      right: "fixed right-0 top-0 bottom-0 border-l data-[state=open]:slide-in-from-right-full",
      bottom: "fixed bottom-0 left-0 right-0 border-t data-[state=open]:slide-in-from-bottom-full",
      left: "fixed left-0 top-0 bottom-0 border-r data-[state=open]:slide-in-from-left-full",
    }

    return (
      <>
        <div
          className="fixed inset-0 z-40 bg-black/80"
          onClick={() => onOpenChange(false)}
        />
        <div
          ref={ref}
          className={`fixed z-50 bg-background shadow-lg ${sideStyles[side]} ${className || ""}`}
          {...props}
        />
      </>
    )
  }
)
SheetContent.displayName = "SheetContent"

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex flex-col space-y-2 text-center sm:text-left p-6 border-b ${className || ""}`}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 border-t ${className || ""}`}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={`text-lg font-semibold text-foreground ${className || ""}`}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-muted-foreground ${className || ""}`}
    {...props}
  />
))
SheetDescription.displayName = "SheetDescription"

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription }
