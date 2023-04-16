const Button = ({ onClick, text, cssbtn }) => {
  return (
    <button className={cssbtn ? "btn-map" : ""} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
