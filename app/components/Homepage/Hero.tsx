import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.img_1}>
        <Image
          src="/images/flower-2-s.jpg"
          alt="img"
          fill={true}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={classes.img_2}>
        <Image
          src="/images/flower-1-s.jpg"
          alt="img"
          fill={true}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <p>
        Radiate <br /> confidence <br />
        and beauty, <br />
        exude charm.
      </p>
    </div>
  );
};

export default Hero;
