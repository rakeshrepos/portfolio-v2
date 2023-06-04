import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rakesh Rebbavarapu',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+' bg-[#0e0e0e]'}>
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
