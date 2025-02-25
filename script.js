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
    const [sortBy, setSortBy] = useState<string>("default") // Updated initial state
    const [searchTerm, setSearchTerm] = useState ("")
    const [activeCategories, setActiveCategories] = useState<string[]>([])
    const [isAllSelected, setIsAllSelected] = useState(true)

    const toolsPerPage = 12

            const filterAndSortTools = () => {
            let filteredTools = tools.filter(tool => {
                const matchesFilter = activeFilter === "all" || tool.type === activeFilter;
                const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || tool.description.toLowerCase().includes(searchTerm.toLowerCase());
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
                            <h1 className="text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">
                                SkyRectory - The Bluesky Tool Directory
                            </h1>
                        </AnimatedTitleBackground>

                        <div className="mb-6 relative">
                            <Input
                                type="text"
                                placeholder="Search tools..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                                className="w-full max-w-xl mx-auto"
                           />
                        </div>

                        <div className="flex flex-wrap justify-center gap-1 mb-6">
                            <Button
                                key="All"
                                variant={isAllSelected ? "default" : "outline"}
                                onClick={() => toggleCategory("All")}
                                >
                                    All
                                </Button>
                                {categories.map(category => (
                                    <Button
                                    key={category}
                                    variant={activeCategories.includes(category) ?
                                    "default" : "outline"}
                                    onClick={() => toggleCategory(category)}
                                    >
                                        {category}
                                    </Button>
                            ))}
                        </div>

                        <div className="flex justify-end items-center mb-6">
                            <Select
                                value={sortBy}
                                onValueChange={(value) => {
                                    setSortBy(value)
                                    if (["free", "paid"].includes(value)) {
                                        setActiveFilter(value)
                                    }   else {
                                        setActiveFilter("all")
                                    }
                                }}
                                >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Order by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="default">Order by</SelectItem>
                                    <SelectItem value="newest">Newest</SelectItem>
                                    <SelectItem value="oldest">Oldest</SelectItem>
                                    <SelectItem value="a-z">A – Z</SelectItem>
                                    <SelectItem value="z-a">Z – A</SelectItem>
                                    <SelectItem value="free">Free</SelectItem>
                                    <SelectItem value="paid">Paid</SelectItem>
                                </SelectContent>
                                </Select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {paginatedTools().map(tool => (
                        <div 
                            key={tool.id} 
                            className="rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white cursor-pointer"
                            onClick={() => handleToolClick(tool)}
                        >
                            <div className="relative">
                                <img 
                                    src={tool.image} 
                                    alt={`${tool.name} logo`} 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-2 right-2 flex gap-2">
                                    {tool.featured && <ToolBadge type="featured" />}
                                    <ToolBadge type={tool.type as 'free' | 'paid'} />
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    {tool.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">
                                {tool.description}</p>
                                <div className="flex items-center text-sm mb-2">
                                    <span className="text-gray-600 mr-2">Created by</span>
                                <Link 
                                    href={`https://bsky.app/profile/${tool.creator.slice(1)}`}
                                    className="text-blue-500 hover:underline bg-blue-100 px-2 py-1 rounded-full"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {tool.creator}
                                </Link>
                                </div>
                            <div className="flex flex-wrap gap-1">
                                {tool.categories.map(category => (
                                    <span
                                    key={category}
                                    className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                            ))}
                </div>

                <div className="flex justify-center items-center mt-8 space-x-2">
                    <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                    </Button>
                    <span className="text-sm text-gray-600">
                        Page {currentPage} of {pageCount}
                    </span>
                    <Button 
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
                    disabled={currentPage === pageCount}
                    >
                    Next<ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
                </div>
                <Footer />
                </>
         
        )
    }