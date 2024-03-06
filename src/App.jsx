import { useState } from "react";

const App = () => {
  const [star] = useState([1, 2, 3, 4, 5]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <h1 className="text-5xl underline text-center mt-3 font-bold">
        Star Rating
      </h1>
      <div className="text-center items-center mt-20 ">
        {star.map((star, i) => (
          <button
            key={i}
            onClick={() => setRating(star)}
            onMouseOver={() => setHover(star)}
            onMouseLeave={() => setHover(rating)}
          >
            <span
              className={`text-9xl ${
                star <= ((rating && hover) || hover)
                  ? "text-yellow-500"
                  : "text-gray-400 "
              }`}
            >
              &#9733;
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default App;
