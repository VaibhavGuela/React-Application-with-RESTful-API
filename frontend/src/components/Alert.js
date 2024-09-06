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
    <div className="absolute top-0 flex flex-row items-center justify-between gap-10 p-3 mx-auto mt-4 text-red-600 bg-red-100 border-l-4 border-red-600 w-fit h-fit">
      <p className="flex flex-row items-center text-sm">
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
