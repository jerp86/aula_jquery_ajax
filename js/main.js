function consultaCep() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  $.ajax({
    url,
    type: 'GET',
    success: function(response) {
      console.log(response);
      // document.getElementById('logradouro').innerHTML = response.logradouro;
      $('#logradouro').html(`${response.logradouro} - ${response.complemento}`);
      document.getElementById('bairro').innerHTML = response.bairro;
      document.getElementById('localidade').innerHTML = response.localidade;
      document.getElementById('uf').innerHTML = response.uf;
    },
  });
}