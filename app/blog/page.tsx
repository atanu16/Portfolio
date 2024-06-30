"use client"


import Loader from "@/components/Loader";
import React, { useState, useEffect } from "react";

export default function Blog() {
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
     
        <div className="text-center">
          <h2 className="mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text">
            Blog
          </h2>
          <p className="font-medium text-xl lg:text-2xl text-accent max-w-[960px] mx-auto">
            Under Development
          </p>
        </div>
        </div>
      )}
    
    
    </>
   
  );
}
