import React from "react";

import App from "../App";
import FormContainer from "./FormContainer";
import ResultContainer from "./ResultContainer";

const AppContainer = () => {
  const [result, setResult] = React.useState({});
  const [hidden, setHidden] = React.useState(true);

//   setTimeout(() => setHidden(true), 5000);
  return (
    <App>
      <ResultContainer result={result} hidden={hidden} />
      <FormContainer setResult={setResult} setHidden={setHidden} />
    </App>
  );
};

export default AppContainer;
