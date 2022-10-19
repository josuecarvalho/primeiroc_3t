let tabuada = 5;

function escreva(){
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
}

function minhaTabuada(){
    for(let i = 10; i >= 1; i--){
        document.write("Tabuada do " + i + "<br>");
        for(let j = 1; j <= 10; j++){
            document.write(i + " x " + j + " = " + (j*i) + "<br>");
        }
        document.write("<br>");       
    }
}

function cubo(){
    for(let i = 20; i >= 2; i--){
        document.write("O cubo de "+i+" é "+i+" x "+i+" x "+i+" = "+(i*i*i)+"<br>");
    }
}
function media(){
    let n1 =document.getElementById("v1").value;
    let n2 =document.getElementById("v2").value;
    let n3 =document.getElementById("v3").value;
    let r =(Number(n1) + Number(n2) + Number(n3))/3;
    document.getElementById("resultado").innerHTML = "Média: " + r;
}
function somar(){
    let n4 =document.getElementById("v4").value;
    let n5 =document.getElementById("v5").value;
    let n6 =document.getElementById("v6").value;
    let r =(Number(n4) + Number(n5) + Number(n6));
    document.getElementById("resultado da Soma").innerHTML = "Soma: " + r;
}
function subtrair(){
    let n7 =document.getElementById("v7").value;
    let n8 =document.getElementById("v8").value;
    let n9 =document.getElementById("v9").value;
    let r =(Number(n7) - Number(n8) - Number(n9));
    document.getElementById("resultado da Subtração").innerHTML = "Subtração: " + r;
}