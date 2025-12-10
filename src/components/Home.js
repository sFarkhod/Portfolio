import React, { useState } from "react";
import "./css/Home.css";
import avatar from "./assets/image.png";
import scroll from "./assets/scrollDown/icons8-mouse-92.png";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { useSpring, useSprings, animated } from "@react-spring/web";

const getRandomShape = () => {
  const shapes = ["circle", "square", "triangle"];
  return shapes[Math.floor(Math.random() * shapes.length)];
};

const getRandomColor = () => {
  const colors = ["#e6da5a", "#40b3a1", "#d9465d", "#6866d7"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomDirection = () => {
  const directions = ["left", "right", "up", "down"];
  return directions[Math.floor(Math.random() * directions.length)];
};

export default function Home() {
  const [spheres, setSpheres] = useState([]);

  React.useEffect(() => {
    const initialSpheres = Array.from({ length: 10 }, () => ({
      x: Math.random() * (window.innerWidth - 20),
      y:
        Math.random() *
          (window.innerHeight - (10 * window.innerHeight) / 100 - 200) +
        (10 * window.innerHeight) / 100,
      shape: getRandomShape(),
      color: getRandomColor(),
      direction: getRandomDirection(),
    }));
    setSpheres(initialSpheres);
  }, []);

  const animatedSpheres = useSprings(
    spheres.length,
    spheres.map((item) => ({
      from: { x: item.x, y: item.y },
      to: async (next) => {
        while (1) {
          await next({
            x: Math.random() * (window.innerWidth - 20),
            y:
              Math.random() * (200 - window.innerHeight * 0.1) +
              window.innerHeight * 0.1,
          });
          await next({ x: item.x, y: item.y });
        }
      },
      config: { duration: 5000, tension: 0.1, friction: 500 },
    }))
  );

  const scrollAnimation = useSpring({
    from: { y: 0 },
    to: async (next) => {
      while (1) {
        await next({ y: -10 });
        await next({ y: 0 });
      }
    },
    config: { duration: 1000 },
  });

  return (
    <>
      <div id="home" className="main">
        <div className="spheres-container">
          {animatedSpheres.map((props, index) => (
            <animated.div
              key={index}
              style={{
                position: "absolute",
                width: 20,
                height: 20,
                left: props.x,
                top: props.y,
                borderRadius:
                  spheres[index].shape === "circle"
                    ? "50%"
                    : spheres[index].shape === "square"
                    ? "0"
                    : spheres[index].shape === "triangle"
                    ? "0"
                    : "0",
                border: `1px solid ${spheres[index].color}`,
                borderTop:
                  spheres[index].shape === "triangle"
                    ? "10px solid transparent"
                    : `1px solid ${spheres[index].color}`,
                borderLeft:
                  spheres[index].shape === "triangle"
                    ? "10px solid transparent"
                    : `1px solid ${spheres[index].color}`,
                borderRight:
                  spheres[index].shape === "triangle"
                    ? "10px solid transparent"
                    : `1px solid ${spheres[index].color}`,
                borderBottom:
                  spheres[index].shape === "triangle"
                    ? "20px solid " + spheres[index].color
                    : `1px solid ${spheres[index].color}`,
                ...props,
              }}
            />
          ))}
        </div>
        <div className="about-me">
          <div className="image">
            <img src={avatar} alt="avatar" />
          </div>
          <h1>Farkhod Sokhibov</h1>
          <p>
            I'm
            <span className="typewriter">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Backend Developer",
                  "Mobile Developer",
                  "Student",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <div className="about-page">
            <a
              href="https://t.me/softprogrammer"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="fab fa-telegram fa-xl telegram"></i>
            </a>

            <a
              href="https://www.instagram.com/softprogrammeruzb/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="fab fa-instagram fa-xl instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/farkhod-sokhibov-954777293/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="fab fa-linkedin fa-xl linkedin"></i>
            </a>
          </div>
          <div className="btn">
            <button>
              <a href="https://raw.githubusercontent.com/sFarkhod/portfolio_pics/main/Farkhods_Resume.pdf">
                Download CV
              </a>
            </button>
          </div>
        </div>

        <div className="scrollDown">
          <h6>Scroll Down</h6>
          <Link to="form" smooth={true} offset={-70} duration={700}>
            <animated.img
              className="scrollImg"
              src={scroll}
              alt="Scroll down"
              style={scrollAnimation}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
