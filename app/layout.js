import { Inter } from 'next/font/google'
import './globals.css'
// removed Snowfall import from layout; Snowfall is now scoped to Hero

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TEDx VITAP',
  description: 'Unfoldund Possibilities',
  icons: {
    icon: '/favicon.ico',
    android: '/logo-white.png',
    apple: '/logo-white.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}