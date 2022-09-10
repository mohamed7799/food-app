import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Slider = ({ url, name }) => {
  const [Data, setData] = useState(null);

  const getData = async () => {
    const check = localStorage.getItem(name);

    if (check) {
      setData(JSON.parse(check));
    } else {
      const response = await axios.get(url);
      localStorage.setItem(name, JSON.stringify(response.data.recipes));
      setData(response.data.recipes);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2 className="font-bold my-2 text-2xl">{name}</h2>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
          breakpoints: {
            900: {
              perPage: 2,
            },

            600: {
              perPage: 1,
            },

            1200: {
              perPage: 3,
            },
          },
        }}
      >
        {Data &&
          Data.map((item) => (
            <SplideSlide key={item.id}>
              <Card title={item.title} img={item.image}></Card>
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};

export default Slider;
