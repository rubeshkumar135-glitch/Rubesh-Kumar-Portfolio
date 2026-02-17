import { useState } from "react";
import "./ShowImage.css"
import myImage from "../assets/Hero.png";

function ShowImage() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center  mb-3">
      
      <button
        onClick={() => setShow(!show)}
        className="btn bg-red-600 text-gray-950 px-4 py-2 rounded-full font-semibold"
      >
        Certificate
      </button>

      {show && (
        <img
          src={myImage}
          alt="My"
          className="mt-5 md:w-90 sm:w-90 rounded"
        />
      )}

    </div>
  );
}

export default ShowImage;