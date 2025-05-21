import "./Emoj.css";
function Emojipedia(props) {
  return (
    <dl className="main-container">
      <div className="container">
        <p className="emoj">{props.img}</p>
        <dt className="name">{props.name}</dt>
        <dd>{props.details}</dd>
      </div>
    </dl>
  );
}
export default Emojipedia;
