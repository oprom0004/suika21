"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", path: "" },
  { label: "🎯 Play ClickWar", path: "#play" },
  { label: "What is ClickWar", path: "what-is-clickwar-game" },
  { label: "How to Play", path: "how-to-play-clickwar" },
  { label: "Unblocked", path: "play-clickwar-unblocked" },
  { label: "Tips", path: "clickwar-tips" },
  { label: "Strategy", path: "clickwar-strategy" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full bg-gray-900 border-b border-gray-700 flex justify-center">
      <div className="w-full max-w-7xl flex" style={{ minHeight: 64 }}>
        {/* Logo Section */}
        <div className="flex items-center justify-center pl-3 md:pl-0 w-auto md:w-[140px]">
          <Link
            href="/"
            className="flex items-center text-lg font-extrabold text-white hover:text-red-400 transition-colors whitespace-nowrap"
            aria-label="ClickWar Home"
            style={{ lineHeight: 1, padding: '8px 0' }}
          >
            <span className="mr-2 text-xl">🎯</span>
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              CLICKWAR
            </span>
          </Link>
        </div>
        
        {/* Navigation Section */}
        <div className="flex-1 flex items-center justify-end pr-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map(item => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.path ? `/${item.path}` : "/"}
                        className="px-3 py-2 rounded-md text-gray-300 font-medium hover:bg-gray-800 hover:text-white transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded focus:outline-none text-gray-300 hover:text-white hover:bg-gray-800 transition-colors" 
            onClick={() => setOpen(!open)} 
            aria-label="Open Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-gray-900 border-t border-gray-700 shadow-lg z-50">
            <ul className="flex flex-col py-2">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link
                    href={item.path ? `/${item.path}` : "/"}
                    className="block px-6 py-3 text-gray-300 font-medium hover:bg-gray-800 hover:text-white transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
} 