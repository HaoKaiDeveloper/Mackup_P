import React from "react";
import classes from "./About.module.css";
import Image from "next/image";
const About = () => {
  return (
    <main className={classes.main}>
      <h1>Glamora / .</h1>
      <div className={classes.backdrop}></div>
      <div className={classes.pImg}>
        <Image
          src="/images/product/lotion_C3.jpg"
          alt="img"
          fill={true}
          sizes="100vw"
          priority={true}
        />
      </div>
      <p>
        Glamora: Embrace Nature&apos;s Beauty. Luxurious body lotions,
        captivating fragrances. Pure, natural ingredients. Unleash your beauty,
        indulge your senses. Sustainable, ethical practices. Discover
        Glamora&apos;s allure.
      </p>
    </main>
  );
};

export default About;
