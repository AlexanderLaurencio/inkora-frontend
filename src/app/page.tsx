"use client"
import { Suspense, useState } from "react";
import Navbar from "./components/navbar/navbar";
import NavbarSkeleton from "./components/navbar/navbarSkeleton";
import Sidenav from "./components/sidenav/sidenav";
import Hero from "./components/hero/hero";
import HeroSkeleton from "./components/hero/heroSkeleton";
import Footer from "./components/footer/footer";
import FooterSkeleton from "./components/footer/footerSkeleton";


export default function Home() {
  let [showSidenav,setShowSidenav] = useState(false)

  function onShowSidenav() {
    setShowSidenav(!showSidenav)
  }

  return (
    <>
      <header>
        <Suspense fallback={<NavbarSkeleton />}>
          {!showSidenav && <Navbar onShowSidenav={onShowSidenav}/>}
        </Suspense>
        {showSidenav && <Sidenav onShowSidenav={onShowSidenav}/>}
      </header>
      <main>
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
      </main>
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </>
  );
}
