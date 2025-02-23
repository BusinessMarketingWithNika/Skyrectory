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

    return (
        <footer className="bg-gray-100 mt-12 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-2">SkyRectory</h3>
                        <p className="text-gray-600">Discover the best Bluesky tools</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-primary">Home</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary">Tools</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary">Submit Tool</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Follow us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-primary"><FaTwitter size={24} /></a>
                            <a href="#" className="text-gray-600 hover:text-primary"><FaFacebook size={24} /></a>
                            <a href="#" className="text-gray-600 hover:text-primary"><FaInstagram size={24} /></a>
                            <a href="#" className="text-gray-600 hover:text-primary"><FaGithub size={24} /></a>
                        </div>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Newsletter</h4>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                        <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </form>
                </div>
            </div>
        </footer>
    )
}