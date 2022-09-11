const CategoryButton = ({ children }) => {
  return (
    <button className="bg-black text-white p-4 w-24 text-center flex flex-col items-center rounded-full">
      {children}
    </button>
  );
};

export default CategoryButton;
