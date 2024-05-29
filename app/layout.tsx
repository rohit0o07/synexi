
"use client"
import './globals.css';
import Header from './sections/Header'
import Footer from './sections/Footer'




export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <head>
        <title>Synesxi-Leading Solana Revolution</title>
        <meta name="description" content="Synesxi isn't just a marketplace, it's your gateway to the vibrant Solana blockchain. " />
      </head>
      <body >
         
       
       <Header />
         <div className="bg-[#14202E]"> 
            {children }
         </div>
        <Footer/> 
        </body>
    </html>
  )
}