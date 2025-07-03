import Link from "next/link"
import { usePathname } from "next/navigation"
import ReactCountryFlag from "react-country-flag"

const languages = [
  { code: "en", name: "English", flag: "US" },
  { code: "ja", name: "日本語", flag: "JP" },
  { code: "es", name: "Español", flag: "ES" },
  { code: "pt", name: "Português", flag: "PT" },
  { code: "fr", name: "Français", flag: "FR" },
  { code: "de", name: "Deutsch", flag: "DE" },
  { code: "nl", name: "Nederlands", flag: "NL" },
]

function getCurrentLang(pathname: string) {
  const seg = pathname.split("/").filter(Boolean)[0]
  return languages.find(l => l.code !== "en" && l.code === seg) ? seg : "en"
}

function getLangPath(lang: string, pathname: string) {
  const segs = pathname.split("/").filter(Boolean)
  const currentLang = getCurrentLang(pathname)
  if (currentLang !== "en" && segs[0] === currentLang) segs.shift()
  if (segs.length === 0) return lang === "en" ? "/" : `/${lang}`
  return lang === "en" ? `/${segs.join("/")}` : `/${lang}/${segs.join("/")}`
}

export function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLang = getCurrentLang(pathname)
  return (
    <div className="flex flex-wrap justify-start md:justify-end items-center gap-x-1 gap-y-1 w-full" style={{ rowGap: 2, columnGap: 4 }}>
      {languages.map(lang => (
        <Link
          key={lang.code}
          href={getLangPath(lang.code, pathname)}
          hrefLang={lang.code}
          className={`flex items-center gap-0.5 px-1 py-0.5 rounded text-xs transition-colors border border-transparent select-none
            ${currentLang === lang.code ? "bg-green-100 text-green-700 border-green-200" : "text-gray-700 hover:bg-green-50 hover:text-green-700"}`}
          aria-current={currentLang === lang.code ? "page" : undefined}
          style={{ minWidth: 22, minHeight: 22, fontWeight: 400 }}
        >
          <ReactCountryFlag countryCode={lang.flag} svg style={{ width: "1em", height: "1em", marginRight: 1, borderRadius: 2 }} title={lang.code.toUpperCase()} />
          <span>{lang.code.toUpperCase()}</span>
        </Link>
      ))}
    </div>
  )
}
