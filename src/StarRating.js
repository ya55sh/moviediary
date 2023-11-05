import { useState } from "react";

const containerSytle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

export default function StarRating({
  maxRating = 5,
  color = "#ff8000",
  size = 50,
  className = "",
  currentRating,
  setCurrentRating,
}) {
  // const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  function handleRating(rating) {
    // setRating(rating);
    setCurrentRating(rating);
  }

  function handleTempRating(rating) {
    setTempRating(rating);
  }

  return (
    <div style={containerSytle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i}>
            <Star
              onRate={() => {
                handleRating(i + 1);
              }}
              empty={tempRating ? tempRating < i + 1 : currentRating < i + 1}
              onHoverIn={() => {
                handleTempRating(i + 1);
              }}
              onHoverOut={() => {
                handleTempRating(0);
              }}
              color={color}
              size={size}
            />
          </span>
        ))}
      </div>
      <p style={textStyle}>{tempRating || currentRating || ""}</p>
    </div>
  );
}

function Star({ onRate, empty, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };

  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {empty ? (
        <svg
          height="30"
          width="30"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#808080"
          stroke={color}
          viewBox="0 0 64 30"
          strokeWidth="1.4382"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              style={{ fill: "#ffffff" }}
              d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
            />
          </g>
        </svg>
      ) : (
        <svg
          height="30"
          width="30"
          version="1.1"
          viewBox="0 0 64 30"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          stroke="#ffffff"
          strokeWidth="1.4382"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              style={{ fill: `${color}` }}
              d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
            />
          </g>
        </svg>
      )}
    </span>
  );
}
