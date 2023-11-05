export default function Card({ poster, title, year, runtime, rating }) {
  return (
    <div className="card">
      <img src={poster} alt={title} />
      <div className="card-text">
        <p>{title}</p>
        <p>📆 {year}</p>
        {rating !== undefined && (
          <p>
            <span>⏰ {runtime}</span> &nbsp;&nbsp; <span>⭐ {rating}/10</span>
          </p>
        )}
      </div>
    </div>
  );
}
