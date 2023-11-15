import { motion, useScroll } from "framer-motion";
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
  id: number;
  title: string;
  img: string;
  desc: string;
}
const Single = (item: _Props) => {
  return <section>{item.title}</section>;
};
const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <div className="progressBar"></div>
      </div>
      {items.map((item) => (
        <Single
          title={item.title}
          desc={item.desc}
          id={item.id}
          img={item.img}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Portfolio;
