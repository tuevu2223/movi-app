import { useEffect, useState } from "react";

const ImageBlur = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
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
      className={currentSrc === src ? className : `${className} blur-md`}
      src={currentSrc}
    />
  );
};

export default ImageBlur;
