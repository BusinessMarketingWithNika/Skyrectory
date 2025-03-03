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
                <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{tool.name}</h1>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="flex items-center text-lg mb-4">
                    <span className="text-gray-600 mr-2">Created by</span>
                    <Link
                    href={`https://bsky.app/profile/${tool.creator.slice(1)}`}
                    className="text-blue-500 hover:underline bg-blue-100 px-3 py-1.5 rounded-full"
                    >
                        {tool.creator}
                    </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tool.categories.map(category => (
                            <span 
                            key={category}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500">Added on: {new Date(tool.date).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}