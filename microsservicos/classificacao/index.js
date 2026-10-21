const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

//precisa tratar o evento ObservacaoCriada
//se o texto da observacao contiver a palavra importante, trocar o status para importante
//caso contrário, trocar para comum
//emitir um evento do tipo ObservacaoClassificada
const palavraChave = 'importante'
const funcoes = {
  ObservacaoCriada: (observacao) => {
    observacao.status = 
      observacao.texto.includes(palavraChave) ? 'importante' : 'comum'
    axios.post('http://localhost:10000/eventos', {
      tipo: 'ObservacaoClassificada',
      dados: observacao
    })
  }
}

app.post('/eventos', (req, res) => {
  try{
    const evento = req.body
    console.log(evento)
    funcoes[evento.tipo](evento.dados)
  }
  catch(e){}
  res.end()
})

const port = 7000
app.listen(port, () => {
  console.log(`Classificação Porta ${port}.`)
})