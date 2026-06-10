let dados=[];
fetch("dados.json")
  .then(r=>r.json())
  .then(j=>dados=j);

function pesquisar(){
  const p=document.getElementById("peso").value.trim();
  const out=document.getElementById("resultado");
  out.innerHTML="";

  const enc=dados.filter(x=>String(x["Peso"])===p);

  if(enc.length===0){
    out.innerHTML='<div class="card">Volume não encontrado.</div>';
    return;
  }

  enc.forEach(i=>{
    out.innerHTML += `
      <div class="card">
        <b>Fornecedor:</b> ${i["Fornecedor "] ?? i["Fornecedor"]}<br>
        <b>Oferta:</b> ${i["Oferta"]}<br>
        <b>Identificação:</b> ${i["Identificação"]}<br>
        <b>Status:</b> ${i["Status"]}<br>
        <b>ORGANIZAÇÃO:</b> ${i["ORGANIZAÇÃO"]}
      </div>`;
  });
}