export function AnimatedTitleBackground({ children } : { children: ReactNode }) {
    return (
        <div className="relative overflow-hidden py-16 mb-8">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 animate-gradient-x"
                />
                <div 
                className="absolute inset-0 bg-gradient-to-b from-blue-500 to-cyan-500 animate-gradient-y"
                style={{ mixBlendMode: "soft-light" }}
                />
                <div className="absolute inset-0 backdrop-blur-sm opacity-10" />
                <div className="relative z-10">
                    {children}
                </div>
        </div>
    )
}