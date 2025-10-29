import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Service";
import TrustedBrands from "./TrustedBrands";

function App() {

  const trustedBrands = [

    {
      id: 1,
      logo: "St."
    },
    {
      id:2,
      logo: "Ryzer"
    },
    {
      id:3,
      logo: "Google"
    }
  ]
  return(
    <>
    <Header/>
    <Hero/>
    <TrustedBrands trustedBrands={trustedBrands}/>
    <Footer/>
    <Services/>
  </>
  )
 }

export default App
