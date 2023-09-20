export default function Button(props) {
  return (
    <button className={"as__button " + (props.size ? " " + props.size : "")}>
      <span>{props.children}</span>

      <i className="fa-light fa-arrow-right"></i>
    </button>
  );
}
