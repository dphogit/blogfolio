import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import LandingSection from "../components/home/landing-section"

const HomePage = () => {
  return (
    <Layout>
      <Head page="Home" />
      <LandingSection />
    </Layout>
  )
}

export default HomePage
