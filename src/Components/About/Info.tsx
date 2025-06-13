interface infoProp {
  label: string;
  text: string;
}

function Info({ label, text }: infoProp) {
  return (
    <div className="info">
      <label>{label + " : "}</label>
      <p>{text}</p>
    </div>
  );
}

export default Info;
