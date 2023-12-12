import React from 'react'
import AboutUs from '../components/AboutUs'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Overview from '../components/Overview'
import Partners from '../components/Partners'
import Services from '../components/Services'
import Trademark from '../components/Trademark'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Partners />
      <AboutUs />
      <Overview />
      <Services />
      <Trademark />
    </Layout>
  )
}

export default Home