const Card = ({ title, img }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`cursor-pointer flex items-end bg-cover rounded-xl h-52 justify-center min-w-[300px]`}
    >
      <h2 className="text-center p-6 text-white font-bold">{title}</h2>
    </div>
  );
};

export default Card;
