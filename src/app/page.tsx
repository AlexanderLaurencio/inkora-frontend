"use client"
import { Suspense, useState } from "react";
import Navbar from "./components/navbar/navbar";
import NavbarSkeleton from "./components/navbar/navbarSkeleton";
import Sidenav from "./components/sidenav/sidenav";


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
    </>
  );
}
