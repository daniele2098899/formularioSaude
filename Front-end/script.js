document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-saude');
  const resultadoDiv = document.getElementById('resultado');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const peso = Number(form.peso.value);
    const altura = Number(form.altura.value);

    if(nome === ""){
      alert('')
    }

    if (!nome || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      alert("Por favor, preencha todos os campos corretamente!");
      return;
    }

    const imc = peso / (altura * altura);

    let classificacao = "";
    let cor = "";
    let emoji = "";


    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
      cor = "blue";
      emoji = "🍏 ";
    } else if (imc < 25) {
      classificacao = "Peso normal";
      cor = "green";
      emoji = "😊";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
      cor = "orange";
      emoji = "⚠️";
    } else {
      classificacao = "Obesidade";
      cor = "red";
      emoji = "🚨";
    }

    const dados = {
      nome,
      email,
      peso,
      altura: altura * 100 // salva em cm
    };

    try {
      const resposta = await fetch('http://localhost:5000/api/formulario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        //alert('Dados enviados com sucesso!');

        mostrarResultado(
          `${emoji} Olá, ${nome}! Seu IMC é ${imc.toFixed(2)} (${classificacao})`,
          'sucesso'
        );

        form.reset();
      } else {
        mostrarResultado('Erro: ' + resultado.mensagem, 'erro');
      }
    } catch (error) {
      mostrarResultado('Erro ao enviar dados: ' + error.message, 'erro');
    }
  });

  function mostrarResultado(mensagem, tipo) {
    resultadoDiv.innerHTML = mensagem;
    resultadoDiv.className = tipo + ' mostrar'; // ADICIONA a classe "mostrar"
  }
});
