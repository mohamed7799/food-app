import Categories from "./components/categories";
import Pages from "./pages/pages";

const App = () => {
  return (
    <div className="max-w-7xl m-auto">
      <h1 className="font-bold text-center font-mono text-4xl capitalize my-4">
        food app
      </h1>
      <Categories></Categories>
      <Pages></Pages>
    </div>
  );
};

export default App;
