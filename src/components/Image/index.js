import "./styles.css";
const Image = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

const RoundImage = ({ src, alt, size }) => {
  const imageStyle = {
    width: size || "100px", // Default size if not provided
    height: size || "100px", // Default size if not provided
    borderRadius: "50%", // Apply rounded shape
    objectFit: "cover" // Maintain aspect ratio and cover container
  };

  return <img src={src} alt={alt} style={imageStyle} />;
};
export { Image, RoundImage };
