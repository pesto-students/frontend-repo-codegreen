import React, { useEffect, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Resize } from "@cloudinary/url-gen/actions/resize";
import styles from "./Home.module.css";
import {NavLink} from 'react-router-dom';
import Button from "./../../components/Button/Button";

function Home() {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    const cld = new Cloudinary({ cloud: { cloudName: "dda6ipage" } });
    const windowWidth = window.innerWidth;
    setHeroImage(() => {
      if (windowWidth < 768) {
        return cld
          .image("3482_weoqzp")
          .resize(Resize.scale().width(1000))
          .resize(Resize.crop().width(500).height(700).gravity("center"))
          .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
          .quality("auto");
      }

      return cld
        .image("3482_weoqzp")
        .resize(Resize.scale().width(1200))
        .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality("auto");
    });
  }, []);

  return (
    <main className={styles.home}>
      {heroImage && <AdvancedImage cldImg={heroImage} width="100%" />}
      <div>
      <h1>Plant Trees, Grow Communities, Make a Greener World</h1>
      <p>
        Planting trees is rewarding for the whole planet, but we believe in
        fostering a deeper connection. With GreenGrow, you don't just plant a
        sapling — you nurture a future. Track your trees, share their progress,
        and be part of a community that's making a real difference, one tree at
        a time.
      </p>
      <NavLink to='/sign-in'>
      <Button text="Get Started" />
      </NavLink>
      </div>
      
    </main>
  );
}

export default Home;
