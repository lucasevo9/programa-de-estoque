
import prompt from 'prompt-sync'
const ler = prompt();


let estoqueLivros = [];


let menu = 1;

while (menu != 0) {
  await sleep(1000);

  console.log('\n\n-- CONTROLE DE ESTOQUE DE LIVROS --');
  console.log('1. Cadastrar');
  console.log('2. Listar');
  console.log('3. Adicionar Qtd.');
  console.log('4. Remover Qtd.');
  console.log('5. Apagar');
  console.log('0. Sair');

  console.log('\nEscolha uma opção:');
  menu = Number(ler());

  await sleep(1000);


  if (menu == 1) {
    console.log('Novo Livro:');
    console.log('Informe o nome:');
    let livro = ler();

    console.log('Informe a editora:');
    let editora = ler();

    let novoLivro = {
      nome: livro,
      editora: editora,
      qtd: 0
    }

    estoqueLivros.push(novoLivro);
    console.log('Livro cadastrado!');

  }
  else if (menu == 2) {
    console.log('Livros cadastrados:');
    for (let item of estoqueLivros) {
      console.log(`${item.nome} - Editora: ${item.editora}`);
    }
  }
  // outros else if's
  // else para menu inválido



}





function sleep(mili) {
  return new Promise((ok) => {
    setTimeout(ok, mili);
  })
}