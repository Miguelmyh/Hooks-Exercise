import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useAxios = (base = [], options = { url: "" }) => {
  const [components, setComponent] = useState(base);
  const [url, setUrl] = useState("");
  const baseUrl = options.url;
  //will make axios call when url is changed

  useEffect(() => {
    try {
      console.log(url);
      const helper = async () => {
        if (url === "") return;
        if (url != `https://pokeapi.co/api/v2/pokemon/`) {
          const resp = await axios.get(url);
          setComponent((components) => [
            ...components,
            { ...resp.data, id: uuid() },
          ]);
        }
      };
      helper();
    } catch (err) {
      throw new Error("Error: " + err);
    }

    return setUrl("");
  }, [url]);

  const changeComponents = async (name) => {
    setUrl(`${baseUrl}${name ? name : ""}`);
  };
  return [components, changeComponents];
};

export default useAxios;
