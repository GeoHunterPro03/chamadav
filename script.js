function presenca(){
  let nome = document.querySelector("#txt_nome").value;
  console.log("Nome " + nome);

  let tdNome = document.createElement("td");

  let td = [];

  for(let i=0; i<6; i++){
    td[i] = document.createElement("td");
    td[i].innerHTML = "x";
  }
  

  tdNome.innerHTML = nome;

  let tr = document.createElement("tr");
  tr.appendChild(tdNome);

  for(let i=0; i<6; i++){
    tr.appendChild(td[i]);
  }

  let tbody = document.querySelector("#dados");
  tbody.appendChild(tr);
}