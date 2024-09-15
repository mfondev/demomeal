import './globals.css'
import Nav from './components/nav/nav'
import { Kanit } from '@next/font/google'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'],
})


export const metadata = {
  title: 'Tasty recipe',
  description: 'a tasty recipe app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={kanit.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
