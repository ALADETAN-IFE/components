import * as React from "react"
import { IoMdCloudUpload } from "react-icons/io"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", label, error, helperText, ...props }, ref) => {
    const inputId = React.useId()
    
    return (
      <div className="space-y-2" title={label}>
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          hidden={type == "file"}
          className={`
            flex h-10 w-full rounded-md border border-foreground/20 bg-background px-3 py-2 text-sm text-foreground 
            placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/50 
            focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 autofill:bg-background/50
            ${error ? 'border-red-500 focus:ring-red-500/50' : ''}
            ${className}
          `}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-foreground/70">
            {helperText}
          </p>
        )}
        {
          type == "file" && props.accept && (
            <label htmlFor={inputId} className="flex items-center gap-2 w-max text-sm text-foreground/70 cursor-pointer border border-foreground/20 rounded-md px-3 py-2 hover:bg-foreground/10">
              <IoMdCloudUpload size={24} className="cursor-pointer" />
            </label >
          )
        }
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
