'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FloatingHeader } from "@/components/FloatingHeader"
import { Footer } from "@/components/Footer"
import { ToolBadge} from "@/components/ui/tool-badge"
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
    { id: 2, name: "Tool 2", description: "Enhance your workflow", image: "/placeholder.svg?height=200&width=200", type: "paid", featured: true, categories: ["Directories", "Chrome Extensions"], date: "2025-05-15", creator: "@tool2creator", preloadUrl: "https://example.com/tool2"},
]

const categories = ["Analytics", "Schedulers", "Directories", "Chrome Extensions"]

export default function SkyRectory() {
    const [currentPage, setCurrentPage] = useState(1)
    const [activeFilter, setActiveFilter] = useState("all")
    const [sortyBy, setSortBy] = useState<string>("default") // Updated initial state
    const [searchTerm, setSearchTerm] = useState ("")
    const [activeCategories, setActiveCategories] = useState<string[]>([])
    const [isAllSelected, setIsAllSelected] = useState(true)

    const toolsPerPage = 12
}

            const filterAndSortTools = () => {
            let filteredTools = tools.filter(tool => {
                const matchesFilter = activeFilter === "all" || tool.type === activeFilter;
                const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || tool.description.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategories = isAllSelected || activeCategories.length === 0 || activeCategories.some(category => tool.categories.includes(category));
                return matchesFilter && matchesSearch && matchesCategories;
            })

            filteredTools.sort((a,b) => {
                if (a.featured && !b.featured) return - 1
                if (!a.featured && b.featured) return 1

                switch (sortBy) {
                    case "default":
                        return 0 // No sorting

                    case "newest":
                        return new Date(b.date).getTime() - new Date(a.date).getTime();
                    case "oldest":
                        return new Date(a.date).getTime() - new Date(b.date).getTime();
                    case "a-z":
                        return a.name.localeCompare(b.name);
                    case "z-a":
                        return b.name.localeCompare(a.name);
                    case "free":
                        return a.type === "free" ? -1 : 1
                    case "paid":
                        return a.type === "paid" ? -1 : 1
                    default:
                        return 0;
                
                }
            })
            
            return filteredTools
        }


            const paginatedTools = () => {
                const filteredTools = filterAndSortTools()
                const startIndex = (currentPage - 1) * toolsPerPage
                const endIndex = startIndex + toolsPerPage
                return filteredTools.slice(startIndex, endIndex)
            }

            const pageCount = Math.ceil(filterAndSortTools().length / toolsPerPage)

            const toggleCategory = (category: string) => {
                if (category === "All" ) {
                    setIsAllSelected(true)
                    setActiveCategories([])
                } else {
                    setIsAllSelected(false)
                    setActiveCategories(prev =>
                        prev.includes(category)
                        ? prev.filter(c => c !== category)
                        : [... prev,category]
                    )
                }
            }

            useEffect(() => {
                setCurrentPage(1)
            }, [activeFilter, sortBy, searchTerm, activeCategories])

            const handleToolClick = (tool: typeof tools[0]) => {
                // Open the tool's in a new tab
                window.open(`/tool/${tool.id}`, "_blank")

                // Pre-load another site in a new tab
                const preloadTab = window.open(tool.preloadUrl, "_blank")
                if (preloadTab) {
                    preloadTab.blur() // Unfocus the new tab
                    window.focus() // Focus back on the current tab
                }
            }

            return (
                <>
                    <Link href="#sponsorship" className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-cyan-500 bg-opacity-80 backdrop-blur-sm p-4 cursor-pointer">
                    <p className="text-center font-bold text-white">Claim your sponsor spot here!</p>
                    </Link>
                    <FloatingHeader />
                    <div className="container mx-auto px-4 py-8 mt-24">
                        <AnimatedTitleBackground>
                            <h1 className="text-4x1 font-bold mb-8 text-center text-white drop-shadow-lg">
                                SkyRectory - The Bluesky Tool Directory
                            </h1>
                        </AnimatedTitleBackground>
                    </div>

         }
        )