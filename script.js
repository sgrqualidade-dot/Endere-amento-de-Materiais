
let dados=[];
fetch('dados.json').then(r=>r.json()).then(j=>dados=j);
function pesquisar(){
 const peso=document.getElementById('peso').value.trim();
 const resultado=document.getElementById('resultado');
 const encontrados=dados.filter(item=>String(item['Peso'] ?? item['PESO'] ?? item['peso'] ?? '').trim()===peso);
 if(encontrados.length===0){resultado.innerHTML='<div class="card"><b>Volume não encontrado.</b></div>';return;}
 resultado.innerHTML=encontrados.map(item=>`<div class="card"><b>Fornecedor:</b> ${item['Fornecedor'] ?? item['Fornecedor '] ?? ''}<br><b>Oferta:</b> ${item['Oferta'] ?? ''}<br><b>Identificação:</b> ${item['Identificação'] ?? ''}<br><b>Status:</b> ${item['Status'] ?? ''}<br><b>ORGANIZAÇÃO:</b> ${item['ORGANIZAÇÃO'] ?? ''}</div>`).join('');
}
