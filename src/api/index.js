const url = 'https://localhost:8080/v1/avaliar';

export const post = cliente =>
  fetch(url, {
    method: 'post',
    body: cliente,
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(res =>
    res
      .json()
      .then(data => console.log(data))
      .catch(err => console.log(`Erro: ${err}`))
  );
