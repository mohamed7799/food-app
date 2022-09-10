import Slider from "../components/slider";

const Home = () => {
  return (
    <div>
      <Slider
        url={`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`}
        name="Trending"
      ></Slider>
      <Slider
        url={`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`}
        name="Veggies"
      ></Slider>
    </div>
  );
};

export default Home;
