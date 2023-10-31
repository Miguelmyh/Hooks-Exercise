import React, { useState } from "react";

const useFlip = (initialState) => {
  const [state, setState] = useState(initialState);

  const changeState = () => {
    setState(!state);
  };
  return [state, changeState];
};

export default useFlip;
