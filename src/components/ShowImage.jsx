import { useState } from "react";
import "./ShowImage.css"
import Certification from "../assets/GuviCertification.png";

function ShowImage() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center  mb-3">
      
      <button
        onClick={() => setShow(!show)}
        className="btn bg-red-600 text-gray-950 px-4 py-2 rounded-full font-semibold"
      >
        Certification
      </button>

      {show && (
        <img
          src={Certification}
          alt="Certification"
          className="mt-5 md:w-160 sm:w-90 rounded"
        />
      )}

    </div>
  );
}

export default ShowImage;