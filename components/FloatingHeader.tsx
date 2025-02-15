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

        const submitToolButton = document.getElementById("submit-tool-button")
        const sponsorButton = document.getElementById("sponsor-button")

        const submitToolHandler = (e: MouseEvent) => handlePreClick(e, "pre-click-element")
        const sponsorHandler = (e: MouseEvent) => handlePreClick(e, "pre-click-element")

        if (submitToolButton) {
            submitToolButton.addEventListener("click", submitToolHandler)
        }

        if (sponsorButton) {
            sponsorButton.addEventListener("click", sponsorHandler)
        }

        return () => {
            if (submitToolButton) {
                submitToolButton.removeEventListener("click", submitToolHandler)
            }
            if (sponsorButton) {
                sponsorButton.removeEventListener('click', sponsorHandler)
            }
        }
    }, [])

        return (
            <header
            className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300${isScrolled ? "bg-white/70 backdrop-blur-md" : bg-transparent"}`}>
        )