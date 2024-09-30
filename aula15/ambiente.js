let num = [5, 3, 1, 9, 8, 4]
num.push(1)
num.sort()
console.log(`O vetor: ${num} tem um comprimento de: ${num.length}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1){
    console.log(`[ERRO] Valor inválido`)
}else{
    console.log(`O valor 8 está na posição: ${pos}`)
}
