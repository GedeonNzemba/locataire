import React, { useEffect } from "react"
import Helmet from "react-helmet"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "../components/Navbar"

// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import Home from "../pages/Home"
import Farm from "../pages/Farm"
import Contact from "../pages/Contact"
import Career from "../pages/Career"
import RiskManagement from "../pages/RiskManagement"
import RealEstate from "../pages/RealEstate"
// import Slick from "../components/Slick"




const IndexPage = () => {






  useEffect(() => {
    const addCSS = url => {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = url

      document.head.appendChild(link)
    }

    const addJquery = url => {
      const script = document.createElement("script")
      script.src = url
      script.async = true
      document.head.appendChild(script)
    }

    const addWowSliderScript = url => {
      const script = document.createElement("script")
      script.src = url
      script.async = true
      document.body.appendChild(script)
    }

    const addScript = url => {
      const script = document.createElement("script")
      script.src = url
      script.async = true
      document.body.appendChild(script)
    }

    const addFlickity = url => {
      const script = document.createElement("script");
      script.src = url
      script.async = true
      document.body.appendChild(script)
    }


    addCSS("https://locataire.imfast.io/engine1/style.css")
    addJquery("https://locataire.imfast.io/engine1/jquery.js")
    addWowSliderScript("https://locataire.imfast.io/engine1/wowslider.js")
    addScript("https://locataire.imfast.io/engine1/script.js")
    addFlickity("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");

    
    
  }, [])

  return (
    
       <>
        <Helmet>
          <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css"/>
          
        </Helmet>
        {/* <Router>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/"  exact component={RealEstate} />
            <Route path="/farm" component={Farm} />
            <Route path="/contact" component={Contact} />
            <Route path="/career" component={Career} />
            <Route path="/riskmanagement" component={RiskManagement} />
          </Switch>
        </Router> */}
      <RealEstate />
    </>
   
  )
}

export default IndexPage
