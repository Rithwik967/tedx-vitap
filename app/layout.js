import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TEDx VITAP',
  description: 'Unfolding Possibilities', // Corrected typo from "Unfoldund"
  icons: {
    icon: '/favicon.ico',
    android: '/logo-white.png',
    apple: '/logo-white.png',
  },
}

export default function RootLayout({ children }) {
  return (
    // Added suppressHydrationWarning to prevent browser extension errors
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId="G-9C0ZXQH7D3" />
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}