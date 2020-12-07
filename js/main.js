function consultaCep() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  $.ajax({
    url,
    type: 'GET',
    success: function(response) {
      console.log(response);
    },
  });
}