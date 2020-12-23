import React from "react";
import Form from "../components/Form";

const FormContainer = ({ setResult, setHidden }) => {
  const spacingDef = 3;
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [idade, setIdade] = React.useState(0);
  const [uf, setUf] = React.useState("");
  const [salario, setSalario] = React.useState(0.0);

  const handleInputChange = (e, setState) => setState(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8080/avaliar", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ nome, cpf, idade, uf, salario }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    }).then((res) =>
      res
        .json()
        .then((data) => setResult(data))
        .catch((err) => console.error(`Erro: ${err}`, `Data: ${res.json()}`))
    );
    if (nome !== "") setHidden(false);

    setNome("");
    setCpf("");
    setIdade(0);
    setUf("");
    setSalario(0.0);
  };
  return (
    <>
      <Form
        nome={nome}
        setNome={setNome}
        cpf={cpf}
        setCpf={setCpf}
        idade={idade}
        setIdade={setIdade}
        uf={uf}
        setUf={setUf}
        salario={salario}
        setSalario={setSalario}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        spacingDef={spacingDef}
      />
    </>
  );
};

export default FormContainer;
