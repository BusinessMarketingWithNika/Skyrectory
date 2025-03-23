import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function FloatingHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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

    const submitToolButton = document.getElementById('submit-tool-button')
    const sponsorButton = document.getElementById('sponsor-button')

    const submitToolHandler = (e: MouseEvent) => handlePreClick(e, 'pre-click-element')
    const sponsorHandler = (e: MouseEvent) => handlePreClick(e, 'pre-click-element')

    if (submitToolButton) {
      submitToolButton.addEventListener('click', submitToolHandler)
    }

    if (sponsorButton) {
      sponsorButton.addEventListener('click', sponsorHandler)
    }

    return () => {
      if (submitToolButton) {
        submitToolButton.removeEventListener('click', submitToolHandler)
      }
      if (sponsorButton) {
        sponsorButton.removeEventListener('click', sponsorHandler)
      }
    }
  }, [])

  return (
    <header 
      className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <nav className="container mx-auto px-8 py-4 flex items-center relative z-10">
        <div className="flex-shrink-0 mr-8">
          <div className="flex items-center">
             <Link href="https://www.x.com">
            <Image src="/logo.svg" alt="SkyRectory Logo" width={40} height={40} />
            <span className="ml-2 text-xl font-bold text-gray-800">SkyRectory</span>
          </div>
        </div>
        <ul className="flex space-x-6 items-center justify-center flex-grow">
          <li><Link href="#home" className="text-gray-800 hover:text-gray-600">Home</Link></li>
          <li><Link href="#tools" className="text-gray-800 hover:text-gray-600">Tools</Link></li>
          <li><Link href="#about" className="text-gray-800 hover:text-gray-600">About</Link></li>
          <li><Link href="#contact" className="text-gray-800 hover:text-gray-600">Contact</Link></li>
        </ul>
        <div className="flex-shrink-0 ml-8 flex space-x-4">
          <Link href="/submit-tool">
            <Button id="submit-tool-button" variant="outline" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none">
              Submit tool
            </Button>
          </Link>
          <Link href="/sponsor">
            <Button id="sponsor-button" variant="outline" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
              Claim sponsor spot
            </Button>
          </Link>
        </div>
      </nav>
      <div id="pre-click-element" style={{ display: 'none' }} />
    </header>
  )
}

