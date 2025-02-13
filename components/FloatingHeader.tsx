import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FloatingHeader() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handlePreClick = (e: MouseEvent, targetId: string) => {
            e.preventDefault()
            const targetElement = document.getElementById(targetId)
            if (targetElement) {
                targetElement.click()
                setTimeout(() => {
                    window.location.href = (e.target as HTMLAnchorElement).href
                }, 100)
            }
        }