import { Sparkles, Gift, DollarSign } from 'lucide-react'

interface ToolBadgeProps {
    type: 'featured'| 'free' | 'paid' 
    className?: string
}

export function ToolBadge({ type, className = '' } : ToolBadgeProps) {
    switch (type) {
        case 'featured':
          return (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 ${className}`}>
                <Sparkles className="w-4 h-4"/>
                <span className="text-sm font-medium">Featured</span>
            </div>
          )
        case 'free':
            return (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 ${className}`}>
                <Gift className="w-4 h-4" />
                <span className="text-sm font-medium">Free tool</span>
            </div>
            )
        case 'paid':
            return (
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 ${className}`}>
                <DollarSign className="w-4 h-4" />
                <span className='text-sm font-medium'>Paid tool</span>
            </div>
            )
    }
}