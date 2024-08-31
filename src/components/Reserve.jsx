const Reserve = (props) => {
  return (
    <div id={props.style["reserve-div"]}>
      <h1 id={props.style["h1"]} className="markazi-text-display-title">Little Lemon</h1>
      <h3 id={props.style["h3"]} className="markazi-text-sub-title">Chicago</h3>
      <h2 id={props.style["h2"]} className="markazi-text-sub-title">Reserve A Table</h2>
      <p id={props.style["reserve-text"]} className="karla-lead-text">
        Come dine with us!
      </p>
    </div>
  );
};

export default Reserve;
