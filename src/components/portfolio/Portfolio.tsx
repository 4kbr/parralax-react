import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://source.unsplash.com/1280x720?development",
    desc: "poor union had development park press attention industry alike basis method path carried difficult mirror picture unless torn slowly neck red officer map chain",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "https://source.unsplash.com/1280x720?ecommerce",
    desc: "poor union had development park press attention industry alike basis method path carried difficult mirror picture unless torn slowly neck red officer map chain",
  },
  {
    id: 3,
    title: "Blog Website",
    img: "https://source.unsplash.com/1280x720?blog",
    desc: "poor union had development park press attention industry alike basis method path carried difficult mirror picture unless torn slowly neck red officer map chain",
  },
  {
    id: 4,
    title: "Admin Page",
    img: "https://source.unsplash.com/1280x720?website",
    desc: "poor union had development park press attention industry alike basis method path carried difficult mirror picture unless torn slowly neck red officer map chain",
  },
];
interface _Props {
  item: {
    id: number;
    title: string;
    img: string;
    desc: string;
  };
}
const Single = ({ item }: _Props) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["-300px", "300px"]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
