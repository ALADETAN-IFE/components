export default function Typography({variant, className, children}: {variant: "h1" | "h2" | "h3" | "h4" | "p", className?: string, children: React.ReactNode}) {
    return (
        <>
            {variant === "h1" && <h1 className={`text-4xl font-bold ${className ? className : ""}`}>{children}</h1>}
            {variant === "h2" && <h2 className={`text-3xl font-bold ${className ? className : ""}`}>{children}</h2>}
            {variant === "h3" && <h3 className={`text-2xl font-bold ${className ? className : ""}`}>{children}</h3>}
            {variant === "h4" && <h4 className={`text-xl font-bold ${className ? className : ""}`}>{children}</h4>}
            {variant === "p" && <p className={`text-lg ${className ? className : ""}`}>{children}</p>}
        </>
    );
}
