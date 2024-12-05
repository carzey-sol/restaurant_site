import styles from "./Hero.module.css";
import Scroll from './Scroll'
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroimg}>
        <img src="/images/hype.jpg" />
      </div>
      <div className={styles.herodesc}>
      <div>
          <h1 className={styles.title}>Welcome to Hype</h1>
          <h2>It's time to enjoy!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
        <div className={styles.smallimgcontainer}>
          <div className={styles.smallimg}>
            <img src="/images/food1.webp"></img>
          </div>
          <div className={styles.smallimg}>
            <img src="/images/food2.jpg"></img>
          </div>
          <div className={styles.smallimg}>
            <img src="/images/food3.webp"></img>
          </div>
          
        </div>
        <div className={styles.last}>
        <button>Explore Menu</button>
        <Scroll />
        </div>
      </div>
    </div>
  );
};

export default Hero;
