let idade = parseInt(prompt("qual e sua idade"))
let ingresso = prompt("voce tem ingresso [sim/nao]").toLowerCase()

if (ingresso === "sim"){
    ingresso = true
if(idade >= 18 && ingresso==true){
    alert("voce pode entrar!")
}else{
    alert("voce nao pode entrar idade minima 18 anos")
}
}else if (ingresso=="nao"){
    ingresso==false
    alert("voce nao pode entrar voce nao tem ingresso!")
}else{
    alert("voce digitou algo errado")
}


