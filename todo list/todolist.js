// todo list javascript kodlarını kodlayalım

const inputdegeri=document.querySelector('.input-gorev');
let gorevlistesiul=document.querySelector('.todolist');


const btnekle=document.querySelector('#btnekle');
btnekle.addEventListener('click',gorevekle);
function gorevekle(e){
  
    e.preventDefault();
    if(inputdegeri.value.length>2){
        GorevElemaniOlustur(inputdegeri.value);
        LocaleStorageEkle(inputdegeri.value);
        inputdegeri.value='';
    }
    else{
        alert("En az 3 karakterli bir not giriniz")
    }
   
    
 
    
   
}
document.addEventListener('DOMContentLoaded',function(){
    LocaleStorageOku();
})

 function LocaleStorageOku(){
    let gorevlist;
    if(localStorage.getItem('gorevler')===null){
        gorevlist=[];

    }
    else{
        gorevlist=JSON.parse(localStorage.getItem('gorevler'));
    }
    gorevlist.forEach(function(eleman) {
        GorevElemaniOlustur(eleman);
    });
 }

  function LocaleStorageEkle(gorev){

    let gorevlist;
    if(localStorage.getItem('gorevler')===null){
        gorevlist=[];

    }
    else{
        gorevlist=JSON.parse(localStorage.getItem('gorevler'));
    }
    gorevlist.push(gorev);
    localStorage.setItem('gorevler',JSON.stringify(gorevlist))
  }

function LocaleStorageSil(gorev){

    let gorevlist;
    if(localStorage.getItem('gorevler')===null){
        gorevlist=[];

    }
    else{
        gorevlist=JSON.parse(localStorage.getItem('gorevler'));
    }
    const indexno=gorevlist.indexOf(gorev);
    gorevlist.splice(indexno,1);
    localStorage.setItem('gorevler',JSON.stringify(gorevlist));
    gorevlist.splice(indexno,1)
}
   function GorevElemaniOlustur(gorev){
    let yenidiv=document.createElement('div');
    yenidiv.classList.add('list')
  
  let yenili=document.createElement('li');
  yenili.classList.add('list-item')
  yenili.innerText=gorev;
  yenidiv.appendChild(yenili);
  let yenibtnsil=document.createElement('Button');
  yenibtnsil.classList.add('btn-not-delete');
  yenibtnsil.classList.add('todo-btn');
  yenibtnsil.innerHTML='<i class="fa-solid fa-trash-can"></i>';
  
  let yenibtnonayla=document.createElement('Button');
  yenibtnonayla.classList.add('btn-not-check');
  yenibtnonayla.classList.add('todo-btn');
  yenibtnonayla.innerHTML='<i class="fa-solid fa-circle-check"></i>';
  
  yenidiv.appendChild(yenibtnonayla);
  yenidiv.appendChild(yenibtnsil);
 
  gorevlistesiul.appendChild(yenidiv);
   }


function gorevsiltamamla(e){
    let tiklanilaneleman=e.target;
    if(tiklanilaneleman.classList.contains('btn-not-check')){
        // toople varsa siler.Yoksa ekler
        tiklanilaneleman.parentElement.classList.toggle('not-check');
    }
    if(tiklanilaneleman.classList.contains('btn-not-delete')){
    let removed =  tiklanilaneleman.parentElement;
    let con=confirm('Silmek istediğinizden emin misiniz?');
     if(con){
        removed.classList.toggle('Remove');
        removed.addEventListener('transitionend',function(){
           removed.remove();
           LocaleStorageSil(removed.children[0].innerText);
        })
     }
    
    }
}
gorevlistesiul.addEventListener('click',gorevsiltamamla);

