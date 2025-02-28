"use client"

import { useParams } from "next/navigation"
import { FloatingHeader } from "@/components/FloatingHeader"
import { Footer } from "@/components/Footer"
import { ToolBadge } from "@/components/ui/tool-badge"
import Link from "next/link"

// This should be replaced with actual data fetching in a real application

const tools = [
    {
        id: 1,
        name: "Bluesky Insights",
        description: "Free Insights for your Bluesky profile",
        image: "/placeholder.svg?height=200&width=200",
        type: "free",
        featured: true,
        categories: ["Analytics", "Schedulers"],
        date: "2023-06-01",
        creator: "@blueskyinsights"
    },
    // .. (include all other tools)
]

export default function ToolPage () {
    const params = useParams ()
    const toolId = parseInt(params.id as string)
    const tool = tools.find(t => t.id === toolId)

    if (!tool) {
        return <div> Tool not found</div>
    }

    return (
        <>
        <FloatingHeader />
        <div className="container mx-auto px-4 py-8 mt-24">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                    <img
                        src={tool.image}
                        alt={`${tool.name} logo`}
                        className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 right-4 flex gap-2">
                            {tool.featured && <ToolBadge type="featured" />}
                            <ToolBadge type={tool.type as "free" | "paid" } />
                        </div>
                </div>

                
            </div>
        </div>
        </>
    )
}