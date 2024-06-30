/* eslint-disable @next/next/no-img-element */


"use client";

import Loader from "@/components/Loader";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Unlocking the Power of Image Steganography: Securing Data Through Hidden Channels",
      date: "Mar 4 , 2024", 
      excerpt: "In my 7th semester, I embarked on a fascinating journey into the world of cybersecurity through a project on image steganography. This innovative technique...",
      content: `In my 7th semester, I embarked on a fascinating journey into the world of cybersecurity through a project on image steganography. This innovative technique allowed me to develop a Python-based tool using OpenCV, capable of securely embedding and extracting textual data within digital images. By encrypting data using a user-provided key and embedding it within different RGB planes, the tool enabled covert communication and digital rights management applications. This project not only deepened my understanding of steganography's practical applications in secure communication and digital forensics but also underscored its pivotal role in modern cybersecurity challenges. For a detailed exploration, you can access the full research paper published in the International Journal of Novel Research and Development . Let's continue to embrace innovative technologies like steganography to fortify digital defenses and ensure a safer digital future.`,
      images: [
        "https://github.com/atanu16/Image-Steganography/assets/83860778/cdba069e-1835-43cc-9d46-c03bf7271bac",
        "https://github.com/atanu16/Image-Steganography/assets/83860778/c8af02e2-d82b-4a57-8df2-991a712e15dd",
        "https://github.com/atanu16/Image-Steganography/assets/83860778/c7249421-7694-45ad-92f7-f9e9dc58f9f4",
      ],
    },
    {
      id: 2,
      title: "Second Blog Post",
      date: "July 1, 2024",
      excerpt: "comming soon.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ante eget tortor bibendum, sit amet tempus ligula malesuada. Sed congue, purus sed viverra fringilla, tellus nisi suscipit odio, sed elementum nisi lorem nec risus. Suspendisse potenti. Aliquam euismod vehicula nisi, quis aliquet purus convallis vel. Phasellus semper, tortor eget blandit semper, quam magna convallis nulla, vitae aliquet nulla est ac tellus. Fusce id eros nec enim euismod efficitur. Nullam et ligula et felis tincidunt egestas. Donec convallis, turpis nec rhoncus luctus, sapien sem placerat orci, vitae venenatis turpis ligula id sapien. Morbi vel eros nec odio mollis fringilla. Vestibulum dapibus a arcu id vehicula. Integer ac arcu a lorem malesuada facilisis.",
      images: [
        "https://via.placeholder.com/600x400?text=Second+Blog+Post+Image+1",
        "https://via.placeholder.com/600x400?text=Second+Blog+Post+Image+2",
        "https://via.placeholder.com/600x400?text=Second+Blog+Post+Image+3",
      ],
    },
    // Todo:  more blog posts 
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const toggleExpand = (postId: number) => {
    if (expandedId === postId) {
      setExpandedId(null);
    } else {
      setExpandedId(postId);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="safe-layout container mx-auto p-6">
          <header className="text-center mb-10">
            <h2 className="mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text">
              Blog
            </h2>
            <p className="font-medium text-xl lg:text-xl text-accent max-w-[960px] mx-auto">
              Welcome to my blog! Here you will find the latest updates and articles.
            </p>
          </header>
          <main className="grid grid-cols-1 gap-8 justify-items-center">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="mb-8 bg-white rounded-lg shadow-md"
                style={{ maxWidth: "800px", width: "100%" }} 
              >
                <div className="p-6">
                  <h3 className="text-3xl font-bold mb-3">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-5">{post.date}</p>
                  <Slider {...sliderSettings} className="mb-6">
                    {post.images.map((image, index) => (
                      <div key={index} className="px-6">
                        <img
                          src={image}
                          alt={`${post.title} Image ${index + 1}`}
                          className="w-full h-auto rounded mx-auto" 
                        />
                      </div>
                    ))}
                  </Slider>
                  <div className={expandedId === post.id ? "block" : "hidden"}>
                    <p className="text-lg text-gray-700 mb-5">{post.content}</p>
                  </div>
                  <div className={expandedId === post.id ? "hidden" : "block"}>
                    <p className="text-lg text-gray-700 mb-5">
                      {post.content.substring(0, 200)} {/* Display first 200 characters */}
                      {post.content.length > 200 && "..."} {/* Show ellipsis if content exceeds 200 characters */}
                    </p>
                  </div>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={() => toggleExpand(post.id)}
                  >
                    {expandedId === post.id ? "Show Less" : "Read More"}
                  </button>
                </div>
              </article>
            ))}
          </main>
        </div>
      )}
    </>
  );
};

export default Blog;
