const tabMenu = document.querySelectorAll('.js-tabmenu li');//selecionando os elementos que serão clicados
const tabContent = document.querySelectorAll('.js-tabcontent section');//selecionanado os elementos que vão aparecer ao clique

if(tabMenu.length && tabContent.length) { //5-verificando se os elementos existem na página para não bugar o js
  tabContent[0].classList.add('active'); //4-adicionando a classe ativo no 1 conteúdo
  function activeTab(index) { //função que adiciona a classe ativo para a seção de acordo com o index passado de argumento
  tabContent.forEach((content)=>{
    content.classList.remove('active');//2-removendo classe ativo para apenas 1 ficar ativo
  });
  tabContent[index].classList.add('active');//1-adicionando a classe ativo acordo com o index
  }

  tabMenu.forEach((itemMenu, index)=>{ //3
    itemMenu.addEventListener('click', function() {
      activeTab(index);
    }); //OBS:nesse caso não podemos passar uma função de callback normal, pois queremos o index e ele está do lado de fora do addEventListener
  });
}

