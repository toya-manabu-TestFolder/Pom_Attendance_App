import "./Img.css";

type Props = {
  src: string;
  alt: string;
  style: string;
};

const Img = ({ src, alt, style }: Props) => {
  return <img src={src} alt={alt} className={`${"img_component"} ${style}`} />;
};

export default Img;
