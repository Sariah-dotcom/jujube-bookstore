

import React from 'react'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import BestSellers from './BestSellers.jsx'
import Category from './Category.jsx'
import AddBook from './AddBook.jsx'

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Category />
        <Footer />
    </div>
  )
}
