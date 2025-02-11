import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FloatingHeader () {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
    }

    
}
