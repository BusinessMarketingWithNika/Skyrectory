import { Sparkles, Gift, DollarSign } from 'lucide-react'

interface ToolBadgeProps {
    type: 'featured'| 'free' | 'paid' 
    className?: string
}

export function ToolBadge({ type, className = '' } : ToolBadgeProps) {
    switch (type) {
        case 'featured':
          return
    }
}