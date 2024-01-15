import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <main className={classes.main}>
      <div className={classes.header}>
        <Image
          src="/images/product-hero.jpg"
          alt="backdrop"
          sizes="100vw"
          fill={true}
          priority={true}
        />
        <h1>Wild</h1>
        <h1>Organic</h1>
        <h1>Native</h1>
      </div>
    </main>
  );
};

export default Hero;
