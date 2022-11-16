import React from "react";
import { useNavigate } from "react-router-dom";

export const InputBox = () => {
  const navigate = useNavigate();

  const handleKeyUp = (e: any) => {
    if (e.key === "Enter") {
      navigate(e.target.value);
    }
  };

  return <input type="text" onKeyUp={handleKeyUp} />;
};
