'use client';

import Heromain from "../components/heromain";
import Content from "../components/content"
import Header from "../components/header"
import Whyus from "../components/whyus";
import Companies from "../components/companies";
import Services from "../components/services";
import Products from "../components/products";
import Review from "../components/review";
import ContactComponent from "@/components/contactComponent";
import Footer from "../components/footer";
import Gallery from "../components/gallery"
export default function Home() {

  return (
    <>

      <Header />
      <Heromain />

      {/* add a kinda grid layout to the pic which are cut off at the ends, make them transform a little when scrolled */}
      {/* too plane, as this is the first piece of info, make it eye catching */}
      <Content />

      {/* I like the single pic, maybe try to transform and see how it loosk */}
      <Whyus />

      {/* add slider maybe */}
      {/* <Companies /> */}

      <Services />
      <Review />  {/*redirect to google reviews*/}
      <Products /> {/*page*/}
      {/* <WordComponent /> */}
      <ContactComponent />  {/*page*/}
      {/* gallery */}
      {/* <Gallery /> */}
      {/* maybe add a journy page to show the journy and some old pics */}
      <Footer />
    </>
  )

}
