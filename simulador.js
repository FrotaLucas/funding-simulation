//style
window.addEventListener( "load",function () 
{
  simular();
  var formulario = document.getElementById("entradas");
  formulario.addEventListener("submit", OnSubmit)

}  ) 

function OnSubmit (evt)
{

  evt.preventDefault();
  simular();
}

function simular()
{
  var prazo = Number(document.getElementById( "prazo" ).value)
  var prestacoes =  document.getElementById("prestacoes") 
  prestacoes.value = Number( prazo*12);
  
  var jurosaa = document.getElementById("jurosaa").valueAsNumber;
  var jurosam = document.getElementById("jurosam");
  jurosam.value = (1+ jurosaa)**(1/12) - 1;

  var valor = document.getElementById("valor").valueAsNumber;
  const amortizacao = valor/prestacoes.value;
  
  var tbody = document.querySelector("tbody")

  var jurosTotal = 0

  for ( i=0; i<prestacoes.value; i++)
  {
    var saldoDevedor = valor - i*amortizacao;
    var jurosPrestacao = saldoDevedor*jurosam.value; ;

    if(i<5)
    
    {
      var tr = tbody.children[i]
      tr.children[1].textContent = amortizacao.toFixed(2);
      tr.children[2].textContent = jurosPrestacao.toFixed(2);
      tr.children[3].textContent = (amortizacao+jurosPrestacao).toFixed(2);
    }
      
    jurosTotal += jurosPrestacao;
  }

 document.getElementById("jurostotal").valueAsNumber = jurosTotal.toFixed(2);


}


