import myImage from "../../public/image/20200505_160458.jpg";

function UseImage() {
  return (
    <>
      <Image
        src={myImage}
        alt="Description of the image"
        width={300}
        height={300}
      />
    </>
  );
}
import Image from "next/image";
import React from "react";

export default UseImage;
