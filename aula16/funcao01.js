function parimpar(n){
    if(n%2 == 0){
        return 'Par!'
    }else{
        return 'Impar!'
    }
}
let res = parimpar(20192)
console.log(`O número é: ${res}`)