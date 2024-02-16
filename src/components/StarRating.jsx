import { useState } from 'react';
import { CiStar } from 'react-icons/ci';

function StarRating({
  maxLength = 10,
  color = 'yellow',
  defaultRate = 0,
  onSetRate,
  message = [],
}) {
  const [rating, setRating] = useState(defaultRate);
  const [tempRate, setTempRate] = useState(0);
  function handleRate(rate) {
    setRating(rate);
    onSetRate(rate);
  }
  return (
    <div className="flex  flex-row justify-start gap-1 p-3">
      {Array.from({ length: maxLength }, (_, i) => (
        <Star
          onRate={() => handleRate(i + 1)}
          onHoverIn={() => setTempRate(i + 1)}
          onHoverOut={() => setTempRate(0)}
          isFull={tempRate ? tempRate >= i + 1 : rating >= i + 1}
          color={color}
          key={i}
        />
      ))}
      <span className=" ml-3 pt-2 text-xl font-semibold  leading-none text-yellow-500 ">
        {maxLength === message.length
          ? message[tempRate ? tempRate - 1 : rating - 1]
          : tempRate || rating || ''}
      </span>
    </div>
  );
}
function Star({ isFull, color, onRate, onHoverIn, onHoverOut }) {
  return (
    <span
      className=" h-8 w-8"
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {isFull ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          stroke={color}
          fill={'none'}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
    </span>
  );
}
export default StarRating;
