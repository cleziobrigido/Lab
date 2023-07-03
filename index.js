/*Escreva uma função JavaScript para verificar se uma `entrada` é um
array ou não.*/
console.log("Fist question");
function verificaArray(valor){
    return Array.isArray(valor);
}


function cloneArray(valor){
    let copia=valor.slice();
    return copia;
};

/*Escreva uma função JavaScript para obter o primeiro elemento de um
array. Passar um parâmetro 'n' retornará os primeiros 'n' elementos do
array.*/
function firstElement(valor,n){
    let valores=new Array();
    i=0;
    valor.forEach(function(x){
        
        if(i<n){
            valores[i]=x;
        }
        i++;
    });
    return valores;
}
nums=[1,2,3,4,5];
let a =firstElement(nums,3);
console.log(a);

/*Escreva um programa JavaScript simples para unir todos os elementos
de um array em uma string.*/
console.log("Fourth question")
function uneArray(Array){
    let une=Array.join("");
    return une;
}

juntar=uneArray(nums);
console.log(juntar);

/*Escreva um programa JavaScript que aceite um número como entrada
e insira traços (-) entre cada dois números pares. Por exemplo, se você
aceitar 025468, a saída deve ser 0-254-6-*/
console.log("Fifth question");

function par(n){
    if (n % 2 === 0){
        return true
    }
    else{
        return false
    }
}

function tracos(numero){
    var tracejado= ""+ numero;
    trac=tracejado.replace(/,/g, "");
    console.log("CONVERTIDO"+tracejado);

    var i=0;
    trac.split('').forEach(function(elemento){
        if(par(elemento)==true&&par(trac[i+1]==true)){
            console.log("ELEMENTO"+elemento);
            console.log(trac[i+1]);
            trac=trac.replace(trac[i],trac[i]+'-');
            
        }
        
        i++;

    })
    
    return trac;
}

let teste=[2,4,6,7,9,6,4];
let testetracos= tracos(teste);
console.log(testetracos);

/*Escreva um programa JavaScript para localizar o item mais frequente
de um array.
*/
function localiza(valores){
    var contAtual=0;
    var indiceMaior;
    var contMaior=0;
    for(let i=0;i<valores.length;i++){
        valorBusca=valores[i];
        contAtual=0;
        for(let j=0;j<valores.length;j++){
            if(valores[j]==valorBusca){
                contAtual++;
            }
        }
        if (contAtual>contMaior){
            contMaior=contAtual;
            indiceMaior=i;
        }
    }
    return valores[indiceMaior];
}

var r=[1,2,3,4,4,1,2,4,6];
t=localiza(r);
console.log("Maior"+t);