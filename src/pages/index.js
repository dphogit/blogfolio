import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import LandingSection from "../components/home/landing-section/landing-section"
import AboutMe from "../components/home/about-me/about-me"
import HonoursAndExperience from "../components/home/honours-and-experience/honours-and-experience"
import Footer from "../components/footer/footer"

const HomePage = () => {
  return (
    <Layout>
      <Head page="Home" />
      <LandingSection />
      <AboutMe />
      <HonoursAndExperience />
      <Footer />
    </Layout>
  )
}

export default HomePage
