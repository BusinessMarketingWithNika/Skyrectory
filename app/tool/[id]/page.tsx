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