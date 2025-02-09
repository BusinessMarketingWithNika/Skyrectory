import { Sparkles, Gift, DollarSign } from 'lucide-react'

interface ToolBadgeProps {
    type: 'featured'| 'free' | 'paid' 
    className?: string
}

export function ToolBadge({ type, className = '' } : ToolBadgeProps) {
    switch (type) {
        case 'featured':
          return
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 ${className}`}>
            <Sparkles className="w-4 h-4"/>
            <span className="text-sm font-medium">Featured</span>
          </div>
    }
}