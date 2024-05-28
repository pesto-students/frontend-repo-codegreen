import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import styles from "./Home.module.css";
import {NavLink} from 'react-router-dom';
import Button from "./../../components/Button/Button";
import { useCloudinaryImage } from "../../hooks/useCloudinaryImage";

function Home() {
  const heroImage = useCloudinaryImage("3482_weoqzp").image;
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
