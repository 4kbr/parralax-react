import { Variants, motion, useInView } from "framer-motion";
import "./services.scss";
import { useEffect, useRef, useState } from "react";

const variants: Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log({ isMobile });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isMobile ? "animate" : isInView && "animate"}
      // whileInView={ "animate" }
      // animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At labore
            aut cumque quia eaque laborum quisquam adipisci. Atque, doloremque
            ullam voluptates praesentium id animi sunt optio aliquid.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At labore
            aut cumque quia eaque laborum quisquam adipisci. Atque, doloremque
            ullam voluptates praesentium id animi sunt optio aliquid.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At labore
            aut cumque quia eaque laborum quisquam adipisci. Atque, doloremque
            ullam voluptates praesentium id animi sunt optio aliquid.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At labore
            aut cumque quia eaque laborum quisquam adipisci. Atque, doloremque
            ullam voluptates praesentium id animi sunt optio aliquid.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
