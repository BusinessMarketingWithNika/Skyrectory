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


            let filteredTools = tools.filter(tool => {
                const matchesFilter = activeFilter === "all" || tool.type === activeFilter;
                const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || tool.description.toLowerCase().includes(searchTerm);
                const matchesCategories = activeCategories.length === 0 || activeCategories.some(category => tool.categories.includes(category));
                return matchesFilter && matchesSearch && matchesCategories;
            });

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

       //
         }
        )