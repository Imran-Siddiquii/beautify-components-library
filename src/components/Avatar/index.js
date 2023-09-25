import "./styles.css";

const Avatar = ({ src, size, name }) => {
  return (
    <div className={`avatar ${size}`}>
      <img src={src} alt={name} className="avatar-image" />
    </div>
  );
};

export default Avatar;
