import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import LandingSection from "../components/home/landing-section/landing-section"
import AboutMe from "../components/home/about-me/about-me"

const HomePage = () => {
  return (
    <Layout>
      <Head page="Home" />
      <LandingSection />
      <AboutMe />
    </Layout>
  )
}

export default HomePage
