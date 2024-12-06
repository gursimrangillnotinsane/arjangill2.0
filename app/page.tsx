'use client';

import Heromain from "../components/heromain";
import Content from "../components/content"
import Header from "../components/header"
import Whyus from "../components/whyus";
import Companies from "../components/companies";
import Services from "../components/services";
import Products from "../components/products";
import Review from "../components/review";
export default function Home() {

  return (
    <>
      <Header />
      <Heromain />
      <Content />
      <Whyus />
      <Companies />
      <Services />
      <Products />
      <Review />
      <Content />
    </>
  )

}
