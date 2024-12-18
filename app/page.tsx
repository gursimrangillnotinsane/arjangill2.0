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
export default function Home() {

  return (
    <>
      {/* add photos of founder and current owner and words form those */}
      <Header />
      <Heromain />
      {/* add a kinda grid layout to the pic which are cut off at the ends, make them transform a little when scrolled */}
      {/* too plane, as this is the first piece of info, make it eye catching */}
      <Content />
      {/* I like the single pic, maybe try to transform and see how it loosk */}
      <Whyus />
      <Companies />
      {/* add more words and a pic in each */}
      <Services />
      <Review />  {/*redirect to google reviews*/}
      <Products /> {/*page*/}
      <ContactComponent />
      {/* gallery */}

      {/* maybe add a journy page to show the journy and some old pics */}
    </>
  )

}
