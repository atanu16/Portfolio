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
      content: `In my 7th semester, I embarked on an intriguing journey into the realm of cybersecurity, focusing on the innovative technique of image steganography. This project allowed me to delve into the complexities of hiding data within digital images, a method that offers a unique approach to data security. Unlike traditional encryption, which transforms data into an unreadable format, steganography conceals the very existence of the data by embedding it within another form, such as an image, making it undetectable to unintended recipients. My project aimed to create a robust Python-based tool capable of securely embedding and extracting textual data within images, leveraging the OpenCV library for image processing. The algorithm I developed followed a systematic approach, beginning with the encryption phase. The process starts with initializing dictionaries for character-to-byte mappings (d) and byte-to-character mappings (c). This step is crucial for converting the text to be hidden into a format suitable for embedding within an image. The encryption process then involves computing a checksum of the user-provided key and embedding this checksum into the RGB planes of the image. This step ensures that the correct key must be used for decryption, adding an extra layer of security. Next, the length of the text is converted to bytes and embedded into the image using bitwise XOR operations with characters from the encryption key. This length information is vital for the decryption process to know how much data to extract. Finally, each character of the text is encrypted and sequentially embedded into the image. The modified image, now containing hidden data, is saved as encrypted_img.jpg. The decryption phase is equally methodical. To retrieve the hidden data, the correct decryption key must be provided. The algorithm first validates the key by extracting and verifying the key checksum embedded in the image. If the checksum matches, the algorithm proceeds to extract the length of the hidden text and then sequentially decrypts each character using the decryption key. The result is the reconstruction of the original message, now safely retrieved from the image. The implications of image steganography extend beyond theoretical concepts, offering practical solutions in various domains. One significant application is secure communication, where steganography facilitates the covert transmission of confidential messages, making it ideal for scenarios requiring discreet communication. Another important application is digital rights management, where metadata or copyright information can be embedded within media files to protect intellectual property. This technique is also invaluable in forensic investigations, aiding in digital forensics by concealing critical information within images and ensuring tamper-proof evidence storage. Working on this project not only deepened my understanding of steganography's practical applications but also underscored its pivotal role in modern cybersecurity challenges. As technology continues to advance, so do the challenges of securing digital data. Techniques like image steganography exemplify innovation in cybersecurity, providing versatile tools for safeguarding information across various applications. For those interested in a detailed exploration of the technical intricacies and practical insights gained from this project, I invite you to read the full research paper published in the International Journal of Novel Research and Development here. Embracing innovative technologies like steganography is essential for fortifying our digital defenses and ensuring a safer digital future. Let's continue to explore and harness the power of these emerging technologies to enhance our cybersecurity strategies and protect sensitive information in an increasingly digital world.`,
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
