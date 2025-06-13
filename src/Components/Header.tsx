interface compProps {
  title : string
}

function Header({title}: compProps) {
  return (
    <div className="header">
      <h3 className="title">{title}</h3>
    </div>
  );
}

export default Header;
