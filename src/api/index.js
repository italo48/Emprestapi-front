export const post = async (cliente) =>
  await fetch("http://localhost:8080/avaliar", {
    method: "post",
    mode: "no-cors",
    body: cliente,
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  }).then((res) =>
    res
      .json()
      .then((data) => console.log(data))
      .catch((err) => console.log(`Erro: ${err}`))
  );
