import * as React from "react"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", label, error, helperText, ...props }, ref) => {
    const textareaId = React.useId()
    
    return (
      <div className="space-y-2" title={label}>
        {label && (
          <label 
            htmlFor={textareaId}
            className="block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={`
            flex min-h-[80px] w-full rounded-md border border-foreground/20 bg-background px-3 py-2 text-sm text-foreground 
            placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/50 
            focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-vertical
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
      </div>
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
