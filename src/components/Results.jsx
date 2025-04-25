function Results({ results, type, onSelect }) {
  if (!results.length) return <p>Nothing found</p>;

  return (
    <ul className="list-group">
      {results.map((item, index) => (
        <li
          key={item.id}
          className="list-group-item list-group-item-action"
          onClick={() => onSelect(item)}
          style={{ cursor: "pointer" }}
        >
          {index + 1}. {type === "repositories" ? item.full_name : item.login}
        </li>
      ))}
    </ul>
  );
}

export default Results;
