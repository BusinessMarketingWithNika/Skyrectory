import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"

export function Footer() {
    const [email, setEmail] = useState ("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            // Here you would typically send the email to your backend
            // This is a mock API call
        await new Promise (resolve => setTimeout(resolve, 1000))
        console.log("Submitted email:", email)
        setEmail("")
        alert("Thank you for subscribing! A confirmation email has been sent.")
        } catch (error) {
            console.error("Error submitting email:", error)
            alert("There was an error subscribing. Please, try again.")
        }
    }

    return
}