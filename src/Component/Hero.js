import React, { useEffect, useState } from 'react';
import "../Style/Hero.css" 
import img1 from "../Source/img1.jpeg"
import img2 from "../Source/img2.jpeg"
import img3 from "../Source/img3.jpeg"
import img4 from "../Source/img4.jpeg"
import img5 from "../Source/img5.jpeg"
import img6 from "../Source/img6.jpeg"
export default function Hero() {
    const imageUrls = [img1,img2,img3,img4,img5,img6];
    const [selectedImage, setSelectedImage] = useState('');
    useEffect(() => {
        // Shuffle the imageUrls array to randomize the order
        const shuffledImages = [...imageUrls];
        for (let i = shuffledImages.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
        }
        // Select a random image
        const randomIndex = Math.floor(Math.random() * shuffledImages.length);
        const selected = shuffledImages[randomIndex];
        setSelectedImage(selected);
      }, [imageUrls]);
    return (
        <div className="hero" style={{ backgroundImage: `url(${selectedImage})` }}>
        <div className="cards">
          <img src={selectedImage} alt="Random Image" />
        </div>
      </div>
    )
}
