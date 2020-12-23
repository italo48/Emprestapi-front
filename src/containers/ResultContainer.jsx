import React from "react";

import Result from "../components/Result";

const ResultContainer = ({ result = {}, hidden }) => {
  const { cliente: nome, modalidades } = result;
  console.log(modalidades);
  return (
    <>
      <Result nome={nome} resultado={modalidades} hidden={hidden} />
    </>
  );
};

export default ResultContainer;
