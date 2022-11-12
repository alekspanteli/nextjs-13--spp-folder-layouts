
import '../styles/globals.css'
import NavBar from './navbar'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
