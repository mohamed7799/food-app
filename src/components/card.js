const Card = ({ title, img }) => {
  return (
    <div>
      <img
        className={`cursor-pointer flex items-end bg-cover rounded-xl h-52 justify-center min-w-[300px]`}
        src={img}
        alt=""
      />
      <h2 className="text-center p-6  font-bold">{title}</h2>
    </div>
  );
};

export default Card;
