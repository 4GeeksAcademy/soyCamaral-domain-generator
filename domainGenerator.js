let pronoun = ["el", "la", "nuestro", "nuestra"];
let adj = ["increíble", "espectacular", "importante", "innovadora"];
let noun = ["cliente", "hazaña", "estudiante", "testigo"];
let extension =  [".com", ".net", ".utu", ".edu"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++){
        for (let h = 0; h <extension.length; h++)
            console.log(pronoun[i] + adj[j] + noun[k] + extension[h]);
    }
      
  }
}
