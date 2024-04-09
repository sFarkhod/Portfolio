import React, { useState, useEffect } from "react";
import "./css/Work.css";
import WorkCard from "./WorkCard";
import textureWork from "../components/assets/texture.png";

export default function () {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [first, setFirst] = useState("0");
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const responce = await fetch(
        "https://farkhods-porftolio.free.mockoapp.net/portfolio"
      );
      if (componentMounted) {
        setData(await responce.clone().json());
        setFilter(await responce.json());
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const filterProduct = (dat) => {
    const updatedList = data.filter((x) => x.category === dat);
    setFilter(updatedList);
  };

  const toogle = (id) => {
    switch (id) {
      case "0":
        setFirst("0");
        break;
      case "1":
        setFirst("1");
        break;
      case "2":
        setFirst("2");
        break;
      case "3":
        setFirst("3");
        break;
      default:
    }
  };

  return (
    <>
      <div className="recent-update" id="work">
        <img className="textureWork" src={textureWork} />
        <h1>Recent Works</h1>
        <div className="recent-links">
          <ul className="box-links">
            <li>
              <a
                className={first == 0 ? "active" : "unactive"}
                onClick={() => {
                  setFilter(data);
                  toogle("0");
                }}
              >
                Everything
              </a>
            </li>
            <li>
              <a
                className={first == 1 ? "active" : "unactive"}
                onClick={() => {
                  filterProduct("web");
                  toogle("1");
                }}
              >
                Web App
              </a>
            </li>
            <li>
              <a
                className={first == 2 ? "active" : "unactive"}
                onClick={() => {
                  filterProduct("mobile");
                  toogle("2");
                }}
              >
                Mobile
              </a>
            </li>
            <li>
              <a
                className={first == 3 ? "active" : "unactive"}
                onClick={() => {
                  filterProduct("game");
                  toogle("3");
                }}
              >
                Creative
              </a>
            </li>
          </ul>
        </div>
        <div className="recent-projects">
          {filter.map((value, index) => {
            return <WorkCard key={index} image={value.image} title={value.title} info={value.info} />;
          })}
        </div>
        <div className="learn">
          <button className="more"><a href="https://github.com/sFarkhod?tab=repositories" target="_blank">Learn more</a></button>
        </div>
      </div>
    </>
  );
}
