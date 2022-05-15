function fazerConversao() {
  // site informado
  let url = "https://api.hgbrasil.com/finance?format=json-cors&key=ab262bcb";
  //Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas.
  fetch(url)
    //converte a resposta do site em json(uma especie de dic), then significa enquanto
    .then((response) => response.json())
    .then((dados) => {
      //vai no doc e procura pelo id informado e é passado o valor
      let valorDigitado = document.getElementById("valor").value;
      //os "." adentra no dic do json
      let valor_atual_Dolar = dados.results.currencies.USD.buy;
      let valor_atual_Euro = dados.results.currencies.EUR.buy;
      let valor_Dolar = valorDigitado / dados.results.currencies.USD.buy;
      let valor_Euro = valorDigitado / dados.results.currencies.EUR.buy;

      //o js vai no doc e procura pelo Id valor... e substitui o espaço pelos valores informados
      document.getElementById(
        "valorConvertido"
      ).innerText = `Valor Em Dólar: ${valor_Dolar}\nValor em Euro: ${valor_Euro}`;
    });
}

//chamando a função
fazerConversao();
