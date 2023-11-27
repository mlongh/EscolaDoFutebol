function listarServicos(){

    let url = `./backend/servicos_listar.php`;
  
    let req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    let res = JSON.parse(req.responseText);

    console.log(res);

  const serviceContainer = document.getElementById('service-container');

    serviceContainer.innerHTML = '';

    for (let i in res) {
      let servico = res[i]; 
  
      serviceContainer.innerHTML += `
        <div class="card col-md-3" style="margin:3px !important; height:650px; position: relative;">
          <img src="${servico.img_src}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${servico.description}</h5>
            <p class="card-text">${servico.service_description}</p>
            <br>
            <div style="position: absolute; bottom: 0px; margin-bottom: 12px; !important">
            <a href="desenvolvimento.html" class="btn btn-primary">Saiba mais</a>
            </div>
            </div>
        </div>
      `;
    }
   
  }

  function listarDepoimentos(){

    let url = `./backend/depoimentos_listar.php`;
  
    let req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    let res = JSON.parse(req.responseText);

    console.log(res);

  const depoimentoContainer = document.getElementById('depoimentos');

  depoimentoContainer.innerHTML = '';
    for (let i in res) {
      let depoimento = res[i]; 
      if (depoimento.img === '' || depoimento.img === null){
        depoimentoContainer.innerHTML += `
        <div class="col-md-8">
        <h2>${depoimento.Nome}</h2>
        <p>"${depoimento.Mensagem}"</p>
      </div>
        `;
      }else {
        depoimentoContainer.innerHTML += `
      <div class="col-lg-4">
      <img class="rounded-circle" src="${depoimento.img}" alt="Generic placeholder image" width="140" height="140">
      <h2>${depoimento.Nome}</h2>
      <p>"${depoimento.Mensagem}"</p>
    </div>
      `;
      } 
      
    }
   
  }

  function salvarOrcamento(){
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;   
    let servico_interesse = document.getElementById('servico_interesse').value;   
    let endereco = document.getElementById('endereco').value;   
    let data = document.getElementById('data').value;   
    let cidade = document.getElementById('cidade').value;
    let mensagem = document.getElementById('mensagem').value;   

    let url;
    
        url =  `./backend/orcamento_salvar.php?
        nome=${nome}&telefone=${telefone}&email=${email}&servico_interesse=${servico_interesse}&endereco=${endereco}&data=${data}&cidade=${cidade}&mensagem=${mensagem}`;     
      
    let req = new XMLHttpRequest();
    req.open('POST', url, false);
    req.send();
    if (req.status === 200) {
      alert('Orcamento salvo com sucesso!');

  } else {
      alert('Erro ao salvar o orçamento. Por favor, tente novamente.');
  }
}

function salvarDepoimento(){
  let nome = document.getElementById('nome').value; 
  let cidade = document.getElementById('cidade').value;
  let mensagem = document.getElementById('mensagem').value;   
  let url;
  
      url =  `./backend/depoimento_salvar.php?
      nome=${nome}&cidade=${cidade}&mensagem=${mensagem}`;     
    
  let req = new XMLHttpRequest();
  req.open('POST', url, false);
  req.send();
  if (req.status === 200) {
    alert('Depoimento enviado com sucesso!');

} else {
    alert('Erro ao salvar o depoimento. Por favor, tente novamente.');
}
}