import { useEffect, useState } from "react";

const ImageBlur = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=No image`,
  );

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <img
      width={width}
      height={height}
      className={(currentSrc === src || currentSrc) ? className : `${className} blur-md object-cover`}
      src={currentSrc}
    />
  );
};

export default ImageBlur;
