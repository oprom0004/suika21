"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"

const languages = [
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
  { code: "es", name: "Español" },
  { code: "pt", name: "Português" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "nl", name: "Nederlands" },
]

const navItems = [
  { label: "Home", path: "" },
  { label: "🎮 Play Now", path: "#play" },
  { label: "🧠 Tips & Guide", path: "suika-game-tips" },
  { label: "FAQ", path: "#faq" },
  { label: "Contact", path: "contact" },
  { label: "Privacy Policy", path: "privacy-policy" },
  { label: "Terms of Service", path: "terms-of-service" },
]

function getCurrentLang(pathname: string) {
  const seg = pathname.split("/").filter(Boolean)[0]
  return languages.find(l => l.code !== "en" && l.code === seg) ? seg : "en"
}

function langPath(lang: string, path: string) {
  if (lang === "en") return path ? (path.startsWith("#") ? `/${path}` : `/${path}`) : "/"
  if (path.startsWith("#")) return `/${lang}/${path}`
  return path ? `/${lang}/${path}` : `/${lang}`
}

export default function Navbar() {
  const pathname = usePathname()
  const lang = getCurrentLang(pathname)
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white/90 border-b border-gray-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href={lang === "en" ? "/" : `/${lang}`}
          className="flex items-center text-2xl font-extrabold text-green-600 hover:text-green-700 transition-colors"
          aria-label="Suika Game Home"
        >
          <span className="mr-2">🍉</span> Suika Game
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map(item => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={langPath(lang, item.path)}
                      className="px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Mobile Burger */}
        <button className="md:hidden p-2 rounded focus:outline-none" onClick={() => setOpen(!open)} aria-label="Open Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col py-2">
            {navItems.map(item => (
              <li key={item.label}>
                <Link
                  href={langPath(lang, item.path)}
                  className="block px-6 py-3 text-gray-700 font-medium hover:bg-green-100 hover:text-green-700 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
} 