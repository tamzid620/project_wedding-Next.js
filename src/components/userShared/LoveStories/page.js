/* eslint-disable react/no-unescaped-entities */
"use client" ;
import React, { useState } from "react";
import ls1 from "@/app/assests/images/ls1.jpg";
import ls2 from "@/app/assests/images/ls2.jpg";
import ls3 from "@/app/assests/images/ls3.jpg";
import ls4 from "@/app/assests/images/ls4.jpg";
import ls5 from "@/app/assests/images/ls5.jpg";
import ls6 from "@/app/assests/images/ls6.jpg";
import ls7 from "@/app/assests/images/ls7.jpg";
import ls8 from "@/app/assests/images/ls8.jpg";
import ls9 from "@/app/assests/images/ls9.jpg";
import Image from "next/image";
import "./LoveStories.css";

const LoveStories = () => {
  
  const LoveStoriesData = [
    {
      id: 1,
      img: ls1,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
    {
      id: 2,
      img: ls2,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
    {
      id: 3,
      img: ls3,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
    {
      id: 4,
      img: ls4,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
    {
      id: 5,
      img: ls5,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
    {
      id: 6,
      img: ls6,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
    {
      id: 7,
      img: ls7,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
    {
      id: 8,
      img: ls8,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
    {
      id: 9,
      img: ls9,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
    {
      id: 10,
      img: ls5,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
    {
      id: 11,
      img: ls3,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
    {
      id: 12,
      img: ls4,
      title: "Wedding Stories",
      client_Name: "Tom & Elizabeth",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(9);
  const handleLoadMore = () => {
    setVisibleCards(LoveStoriesData.length);
  };

  return (
    <div className="bg-white py-28 text-center">
      <h1 className="text-4xl mb-3">Love Stories</h1>
      <p className="text-sm text-gray-500">I slayed a stranger's squire</p>
    <div className="flex justify-center ">
      <div className="mt-10 text-start grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-8">
      {LoveStoriesData.slice(0, visibleCards).map((story) => (
          <div key={story.id} className="h-[320px]">
          <div className="card-zoom">
            <figure className="zoom-effect">
              <Image className="card-image bg-gray-200" width={380} height={240} src={story.img} alt={story.title} />
            </figure>
          </div>
            <h1 style={{ fontFamily: "Lora, serif" }} className="text-lg mt-3">
              {story.title}
            </h1>
            <p className="text-2xl">{story.client_Name}</p>
          </div>
        ))}
      </div>
    </div>
        <div className="flex justify-center">
      {visibleCards < LoveStoriesData.length && (
          <button
          title="Load More"
            className="bg-gray-500 text-white rounded-sm mt-20 px-20 py-4 hover:bg-gray-400"
            onClick={handleLoadMore}
          >
            Load More
          </button>
      )}
        </div>
    </div>
  );
};

export default LoveStories;
