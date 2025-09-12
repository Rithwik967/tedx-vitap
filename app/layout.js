import { Inter } from 'next/font/google'
import './globals.css'

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
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}