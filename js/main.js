function consultaCep() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  $.ajax({
    url,
    type: 'GET',
    success: function(response) {
      console.log(response);
      $('#logradouro').html(`${response.logradouro || "Não existe"} - ${response.complemento || ''}`);
      $('#bairro').html(response.bairro || "");
      $('#localidade').html(response.localidade || "");
      $('#uf').html(response.uf || "");
      $('#titulo_cep').html(`CEP: ${response.cep || "Número digitado não existe!"}`);
      $(".container").css("display", "block");
    },
    error: function() {
      $(".container").css("display", "none");
    }
  });
}