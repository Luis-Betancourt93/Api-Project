// Adding express to the project
const express = require('express')
// Making a variable called app so instead of always typing the express code just use "app"
const app = express()
// The port that you are useing 
const PORT = 8000


// Random object of a Rapper 
const pokemon = {
  "bulbasaur": {
    'name': "Bulbasaur",
    'index': 1,
    'origin': "Kanto"
  },

  "ivysaur": {
    'name': "Ivysaur",
    'index': 2,
    'origin': "Kanto"
  },

  "venusaur": {
    'name': "Venusaur",
    'index': 3,
    'origin': "Kanto"
  }, 

  "unknown": {
    'name': "????",
    'index': 0,
    'origin': "????"
  }
  
}





app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request, response)=> {
  const pokemonName = request.params.name.toLowerCase()
  if( pokemon[pokemonName] ) {
    response.json(pokemon[pokemonName])
  } else {
    response.json(pokemon['unknown'])
  }
})

app.listen(PORT, ()=>{
  console.log(`The server is now running on port ${PORT}! Better go catch it!!`)
})


