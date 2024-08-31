const Bio = (props) => {
  return (
    <div id={props.style["bio-div"]}>
      <h1 id={props.style["h1"]} className="markazi-text-display-title">Little Lemon</h1>
      <h2 id={props.style["h2"]} className="markazi-text-sub-title">Chicago</h2>
      <p id={props.style["bio-text"]} className="karla-lead-text">
        We are a family-owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
    </div>
  );
};

export default Bio;
