console.log("Digite uma palavra");

process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();
  let anagramas = [];
  let palavra = entrada_usuario.split("");

  for (let i = 0; i < entrada_usuario.length; i++) {
    for (let j = 0; i < entrada_usuario.length; i++) {
      let auxiliar = palavra[i];
      palavra[i] = palavra[j];
      palavra[j] = auxiliar;

      if (!anagramas.includes(palavra.join(""))) {
        anagramas.push(palavra.join(""));
        console.log(palavra.join(""));
      }
    }
  }
});
