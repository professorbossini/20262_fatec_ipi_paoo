//objetos Javascript
//objeto JSON (JavaScript Object Notation)
//uma calculadora realiza as operações de soma e subtração
const calculadora = {
  somar: function(a, b){
    return a + b
  },
  subtrair: (a, b) => a + b
}

console.log(calculadora.somar(2, 3))
console.log(calculadora.subtrair(5, 4))




//Uma concessionária que tem CNPJ e endereço. Endereço tem rua, bairro e número.A concessionária tem uma coleção de veículos. Cada veículo tem marca, modelo e ano de fabricação

// let concessionaria = {
//   cnpj: 0,
//   endereco: {
//     rua: "B",
//     bairro: 'J',
//     numero: 2
//   },
//   veiculos: [
//     {
//       marca: 'VW',
//       modelo: 'Fusca',
//       ano: 1999
//     },
//     {
//       marca: 'Ford',
//       modelo: 'Ka',
//       ano: 2005
//     },
//   ]
// }

// for(let veiculo of concessionaria.veiculos){
//   console.log(veiculo.marca)  
// }


//Uma pessoa que se chama Maria, tem 21 anos e mora na rua B, número 20
// let pessoa = {
//   nome: 'Maria',
//   idade: 21,
//   endereco: {
//     rua: 'B',
//     numero: 20
//   }
// }
// console.log('Rua: ' + pessoa.endereco.rua)
// console.log('Número: ' + pessoa['endereco']['numero'])
// console.log('Rua: ' + pessoa.endereco['rua'])
// console.log('Número: ' + pessoa['endereco'].numero)




//Uma pessoa e se chama João e tem 17 anos
// let pessoa = {
//   nome: "João",
//   idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])
// console.log(pessoa.idade)



// function eAgora(){
//   let cont = 1
//   function f1(){
//     console.log(cont++)
//   }
//   cont++
//   function f2(){
//     console.log(cont)
//   }
//   cont++
//   return {f1, f2}
//   // cont++
// }
// let res = eAgora()
// res.f1()
// res.f2()

//closure
// function saudacoesFactory(saudacao, nome){
//   return function(){
//     return saudacao + ", " + nome
//   }
// }

// const olaJoao = saudacoesFactory("Olá", "João")
// const tchauJoao = saudacoesFactory("Tchau", "João")
// console.log(olaJoao())
// console.log(tchauJoao())
// function ola(){
//   let nome = 'João'
//   return function(){
//     console.log('Olá, ' + nome)
//   }
// }
// let olaResult = ola()
// olaResult()
// function f(){
//   let nome = 'João'
//   function g(){
//     console.log(nome)
//   }
//   g()
// }
// f()
// let umaFuncao = function(){
//   console.log("Fui armazenada em uma variável")
// }
// umaFuncao()

// function f(funcao){
//   funcao()
// }

// function g(){
//   function outraFuncao(){
//     console.log("Fui criada por g")
//   }
//   return outraFuncao
// }

// f(function(){
//   console.log("Estou sendo passada para f")
// })

// const gResult = g()
// gResult()
// g()()
// // g()()()
// f(g())

//arrow functions
// const hello = () => {console.log('Oi')}
// hello()
// const dobro = (n) => 2 * n
// console.log(dobro(2))
// const ehPar = n => n % 2 === 0
// console.log(ehPar(5))
// const echo = n => n
// console.log(echo(5))

// const dobro = function (n){
//   return 2 * n
// }
// console.log(dobro(2))
// const triplo = function(n = 5){
//   return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))

//funções
//funções regulares e arrow functions
// function soma(a, b){
//   return a + b
// }
// const res = soma(2, 3)
// console.log(res)
// function hello(){
//   console.log('Oi')
// }
// hello()
// function hello(nome){
//   console.log('Oi, ' + nome)
// }
// hello('Ana')

//vetores (bem parecidos com o arraylist do java)
// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
// //filter
// const apenasComA = nomes.filter((n) => {return n.startsWith("A")})
// console.log(apenasComA)
// //map
// const iniciais = nomes.map((n) => { return n.charAt(0)})
// console.log(iniciais)
// //reduce
// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => {return ac + v})
// console.log(soma)
// //every
// const todosComecamComA = nomes.every((n) => {return n.startsWith("A")})
// console.log(todosComecamComA)
// v1 = []
// v1[0] = 3.4
// v1[10] = 2
// v1[2] = "abc"
// v1[102] = 1
// console.log(v1.length)

// v2 = [2, "abc", true]
// console.log(v2)
// for(let i = 0; i <  v2.length; i++){
//   console.log(v2[i])
// }


//comparação
//==
//===
// console.log(1 == 1)
// console.log(1 == '1')
// console.log(1 === 1)
// console.log(1 === '1')
// console.log(true == 1)
// console.log(1 == [1])
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// //coerção
// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)


//hoist: içamento
// let idade = 18
// console.log("Oi, " + nome)
// if(idade >= 18){
//   let nome = "João"
//   console.log("Parabéns, " + nome + ". Você pode dirigir")
// }
// console.log("Até mais, " + nome)

// var linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)
// linguagem


// var nome = 'José'
// console.log(nome)
// nome = "João"
// console.log(nome)

// let nome = "Ana"
// console.log(nome)
// nome = "Ana Maria"
// console.log(nome)


// const nome = 'José'
// console.log(nome)
// nome = 'João'

//começando...
//const, let, var
// a = 2
// console.log(typeof(a))
// a = "abc"
// console.log(typeof(a))
// a.falar()


// int a = 2;
// a = "abc";
// a.falar();