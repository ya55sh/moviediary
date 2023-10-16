export default function Card({ poster, title, year }) {
  return (
    <div className="card">
      <img src={poster} alt={title} />
      <div className="card-text">
        <p>{title}</p>
        <p>📆 {year}</p>
      </div>
    </div>
  );
}
