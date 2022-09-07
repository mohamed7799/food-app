import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Trending = () => {
  const [trendingData, setTrendingData] = useState(null);

  const getTrending = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
    );
    setTrendingData(response.data.recipes);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div className="">
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {trendingData &&
          trendingData.map((item) => (
            <SplideSlide>
              <Card key={item.id} title={item.title} img={item.image}></Card>
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};

export default Trending;
