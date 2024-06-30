"use client";

import Footer from "../components/Footer";
import SectionHero from "./SectionHero";
import SectionLetsConnect from "./SectionLetsConnect";
import SectionMyLatestProject from "./SectionMyLatestProject";
import SectionQuote from "./SectionQuote";
import SectionTechnologyStack from "./SectionTechnologyStack";
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import MusicPlayer from "../components/MusicPlayer";
import PopupMenu from '../components/PopupMenu';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="safe-layout">
          <SectionHero />
          <SectionTechnologyStack />
          <SectionMyLatestProject />
          <SectionLetsConnect />
          <SectionQuote />
          <Footer />
        </div>
      )}
      {/* <MusicPlayer /> */}
      <PopupMenu />
    </>
  );
}
