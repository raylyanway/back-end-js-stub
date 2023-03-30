import React, { useEffect, useState } from "react";

import { BasicTable } from "./components/BasicTable";
import { client } from "./api";

export const App = () => {
  const [partsOfSpeech, setPartsOfSpeech] = useState();

  useEffect(() => {
    const fetchPartOfSpeech = async () => {
      try {
        const { data } = await client.get("/part-of-speech");

        setPartsOfSpeech(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPartOfSpeech();
  }, []);

  return <div>{partsOfSpeech && <BasicTable items={partsOfSpeech} />}</div>;
};
