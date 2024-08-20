import React, { useEffect } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { FiAlertTriangle } from "react-icons/fi";

const Alert = ({ alertMessage, onClose }) => {

  useEffect(() => {
    let timer = setTimeout(() => {
        onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="mt-4 mx-auto w-fit h-fit bg-red-100 p-3 flex flex-row justify-between items-center gap-10 text-red-600 border-l-4 border-red-600 absolute top-0">
      <p className="text-sm flex flex-row items-center">
        <FiAlertTriangle className="mr-2 text-lg" />
        {alertMessage}
      </p>
      <IoCloseOutline
        className="text-2xl hover:cursor-pointer hover:text-red-400"
        onClick={onClose}
      />
    </div>
  );
};

export default Alert;
