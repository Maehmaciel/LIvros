livros=[


]

function pesquisa(){
 aut=document.getElementById('pesquisaAutor').value
 encontrado=false
 for(a in l)
 for (b in l[a].autores){
   if(l[a].autores[b].nome === aut)
   encontrado=l[a]
 }
 
 if(encontrado)
 {
   console.log(encontrado)
 }
 else{
   console.log('opa, esse autor não tem livros cadastrados')
 }
}

function my(){

render=document.getElementById('mostra')
render.innerHTML=""
l=JSON.parse(localStorage.livro)
l.map(a=>{
render.innerHTML+="<hr>Titulo: "+a.Titulo+"<br/>Ano: "+a.Ano+"<br/>Paginas: "+a.qtdPaginas+"<br/>"
render.innerHTML+="<br/>Autores<br/>"
  a.autores.map(b=>{
    render.innerHTML+="<br>Nome:"+b.nome+"<br/>Data Nascimento: "+b.dataNascimento+"<br/>Formaçao:"+b.formacao+"<br/>"


  })
})

}
autores=1
function  addAutor(){
     autores++
  form=document.getElementById('formAutores')


  nomeLabel=document.createElement('label')
  nomeLabel.for=`nome${autores}`
  nomeLabel.innerHTML="Nome:"
  nome=document.createElement('input')
  nome.type="text"
  nome.id=`nome${autores}`

  dataNascimentoLabel=document.createElement('label')
  dataNascimentoLabel.for=`dataNascimento${autores}`
  dataNascimentoLabel.innerHTML="Data Nascimento:"
  dataNascimento=document.createElement('input')
  dataNascimento.id=`dataNascimento${autores}`
  dataNascimento.type="date"

  formacaoLabel=document.createElement('label')
  formacaoLabel.for=`formacao${autores}`
  formacao=document.createElement('input')
  formacao.id=`formacao${autores}`
  formacaoLabel.innerHTML="Formaçao:"
  formacao.type="text"
  form.appendChild(nomeLabel)
  form.appendChild(nome)
  form.appendChild(dataNascimentoLabel)
  form.appendChild(dataNascimento)
  form.appendChild(formacaoLabel)
  form.appendChild(formacao)
hr=document.createElement('hr')
form.appendChild(hr)  
}

function  addLivro(){

  autores=1
    titulo=document.getElementById('titulo').value
    ano=document.getElementById('ano').value
    qtdPaginas=document.getElementById('qtdPaginas').value

  inputs=document.getElementsByTagName('input')
  let livro={}


      livro.Titulo=inputs[0].value

      livro.Ano=inputs[1].value

      livro.qtdPaginas=inputs[2].value
      livro.autores=[

      ]
for(let i=3;i<inputs.length;i+=3)
{
  if(inputs[i].id!="pesquisaAutor"){
  let autor={}
 autor.nome=inputs[i].value
 autor.dataNascimento=inputs[i+1].value
 autor.formacao=inputs[i+2].value
 livro.autores.push(autor)}
}


livros=JSON.parse(localStorage.livro)
livros.push(livro)

localStorage.livro =JSON.stringify(livros)

my()




}