"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FloatingHeader } from "@/components/FloatingHeader"
import { Footer } from "@/components/Footer"
import { ToolBadge } from "@/components/ui/tool-badge"
import { AnimatedTitleBackground } from "@/components/AnimatedTitleBackground"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// Updated sample data with more tools and creator handles

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
        creator: "@blueskyinsights",
        preloadUrl: "https://example.com/bluesky-insights"
    },
    { id: 2, name: "Tool 2", description: "Enhance your workflow", image: "/placeholder.svg?height=200&width=200", type: "paid", featured: true, categories: ["Directories", "Chrome Extensions"], date: "2023-05-15", creator: "@tool2creator", preloadUrl: "https://example.com/tool2" },
    { id: 3, name: "Tool 3", description: "Streamline your processes", image: "/placeholder.svg?height=200&width=200", type: "free", categories: ["Analytics", "Chrome Extensions"], date: "2023-06-10", creator: "@tool3creator", preloadUrl: "https://example.com/tool3" },
    { id: 4, name: "Tool 4", description: "Boost your efficiency", image: "/placeholder.svg?height=200&width=200", type: "paid", categories: ["Schedulers", "Directories"], date: "2023-05-01", creator: "@tool4creator", preloadUrl: "https://example.com/tool4" },
    { id: 5, name: "Tool 5", description: "Another great tool", image: "/placeholder.svg?height=200&width=200", type: "free", featured: false, categories: ["Analytics", "Chrome Extensions"], date: "2023-07-10", creator: "@tool5creator", preloadUrl: "https://example.com/tool5" },
    { id: 6, name: "Tool 6", description: "Yet another tool", image: "/placeholder.svg?height=200&width=200", type: "paid", featured: false, categories: ["Schedulers", "Directories"], date: "2023-07-01", creator: "@tool6creator", preloadUrl: "https://example.com/tool6" },
    { id: 7, name: "Tool 7", description: "A useful tool", image: "/placeholder.svg?height=200&width=200", type: "free", featured: true, categories: ["Analytics", "Schedulers"], date: "2023-06-15", creator: "@tool7creator", preloadUrl: "https://example.com/tool7" },
    { id: 8, name: "Tool 8", description: "A helpful tool", image: "/placeholder.svg?height=200&width=200", type: "paid", featured: false, categories: ["Directories", "Chrome Extensions"], date: "2023-05-25", creator: "@tool8creator", preloadUrl: "https://example.com/tool8" },
    { id: 9, name: "Tool 9", description: "A powerful tool", image: "/placeholder.svg?height=200&width=200", type: "free", featured: false, categories: ["Analytics", "Chrome Extensions"], date: "2023-06-20", creator: "@tool9creator", preloadUrl: "https://example.com/tool9" },
    { id: 10, name: "Tool 10", description: "An efficient tool", image: "/placeholder.svg?height=200&width=200", type: "paid", featured: true, categories: ["Schedulers", "Directories"], date: "2023-05-10", creator: "@tool10creator", preloadUrl: "https://example.com/tool10" },
    { id: 11, name: "Tool 11", description: "A convenient tool", image: "/placeholder.svg?height=200&width=200", type: "free", featured: false, categories: ["Analytics", "Schedulers"], date: "2023-07-05", creator: "@tool11creator", preloadUrl: "https://example.com/tool11" },
    { id: 12, name: "Tool 12", description: "A necessary tool", image: "/placeholder.svg?height=200&width=200", type: "paid", featured: false, categories: ["Directories", "Chrome Extensions"], date: "2023-05-20", creator: "@tool12creator", preloadUrl: "https://example.com/tool12" },
    { id: 13, name: "Tool 13", description: "Another tool", image: "/placeholder.svg?height=200&width=200", type: "free", featured: true, categories: ["Analytics", "Chrome Extensions"], date: "2023-07-15", creator: "@tool13creator", preloadUrl: "https://example.com/tool13" },
    { id: 14, name: "Tool 14", description: "One more tool", image: "/placeholder.svg?height=200&width=200", type: "paid", featured: false, categories: ["Schedulers", "Directories"], date: "2023-07-20", creator: "@tool14creator", preloadUrl: "https://example.com/tool14" },
    { id: 15, name: "Tool 15", description: "And another one", image: "/placeholder.svg?height=200&width=200", type: "free", featured: false, categories: ["Analytics", "Schedulers"], date: "2023-06-25", creator: "@tool15creator", preloadUrl: "https://example.com/tool15" },
    { id: 16, name: "Tool 16", description: "Last but not least", image: "/placeholder.svg?height=200&width=200", type: "paid", featured: true, categories: ["Directories", "Chrome Extensions"], date: "2023-05-05", creator: "@tool16creator", preloadUrl: "https://example.com/tool16" }
]

const categories = ["Analytics", "Schedulers", "Directories", "Chrome Extensions"]

export default function SkyRectory() {
    const [currentPage, setCurrentPage] = useState(1)
    const [activeFilter, setActiveFilter] = useState("all")
    const [sortBy, setSortBy] = useState<string>("default") // Updated initial state
    const [searchTerm, setSearchTerm] = useState("")
    const [activeCategories, setActiveCategories] = useState<string[]>([])
    const [isAllSelected, setIsAllSelected] = useState(true)

    const toolsPerpage = 12

    const filterAndSortTools = () => {
        let filteredTools = tools.filter(tool => {
            const matchesFilter = activeFilter === "all" || tool.type === activeFilter
            const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase ()) || tool.description.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesCategories = isAllSelected || activeCategories.length === 0 || activeCategories.some(category => tool.categories.includes(category))
            return matchesFilter && matchesSearch && matchesCategories
        })

        filteredTools.sort((a, b) => {
            if (a.featured && !b.featured) return -1
            if (!a.featured && b.featured) return 1

            switch (sortBy) {
                case "default":
                    return 0 // No sorting
                case "newest":
                    return new Date(b.date).getTime() - new Date(a.date).getTime()
                case "oldest":
                    return new Date(a.date).getTime() - new Date(b.date).getTime()
                case "a-z":
                    return a.name.localeCompare(b.name)
                case "z-a":
                    return b.name.localeCompare(a.name)
                case "free":
                    return a.type === "free" ? -1 : 1
                case "paid":
                    return b.type === "paid" ? -1 : 1
                default:
                    return 0
            }
        })

        return filteredTools
    }

    const paginatedTools = () => {
        const filteredTools = filterAndSortTools()
        const startIndex = (currentPage - 1) * toolsPerPage
        const endIndex = startIndex + toolsPerPage
        return filteredTools.slice(startIndex, endIndex)
    }

    const pageCount = Math.ceil(filterAndSortTools().length / toolsPerPage)
    )
}