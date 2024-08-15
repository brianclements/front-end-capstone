const Bio = (props) => {
  console.log(props);
  return (
    <div id={props["bio-div"]}>
      <h1 id="section-h1" className="markazi-text-display-title">Little Lemon</h1>
      <h2 id="section-h2" className="markazi-text-sub-title">Chicago</h2>
      <p className="karla-lead-text">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
    </div>
  );
};

export default Bio;
