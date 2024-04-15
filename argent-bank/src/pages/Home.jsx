import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Features from "../containers/features";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Features/>
      </main>
      <Footer />
    </>
  );
}
