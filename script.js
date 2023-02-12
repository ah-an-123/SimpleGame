let progress=document.getElementById("progress");
let times=parseInt(prompt("How Many Numbers You Want To Bet"))
let textArea=document.getElementById("n")
let btn=document.getElementById("btn")
let arr=[times];
let scores=0;
let i=0;
let num=1;
progress.value=0
textArea.value="Enter Your "+num+" Number ";
btn.addEventListener('click',()=>{
    num++;
    let computerNumber=Math.round(Math.floor(Math.random() * 11))
    arr[i]=textArea.value;
    if(arr[i]==computerNumber){
    scores++;
    progress.value=(scores/times)*100;
    }
    textArea.value="";
    i++;
    textArea.value="Enter Your "+num+" Number ";
    if(i==times){
        btn.setAttribute("disabled","true")
        textArea.value="Your Scores are "+scores+" Out Of "+times;
    }
})
document.getElementById("0").addEventListener('click',()=>{
    textArea.value="0"
})
document.getElementById("1").addEventListener('click',()=>{
    textArea.value="1"
})
document.getElementById("2").addEventListener('click',()=>{
    textArea.value="2"
})
document.getElementById("3").addEventListener('click',()=>{
    textArea.value="3"
})
document.getElementById("4").addEventListener('click',()=>{
    textArea.value="4"
})
document.getElementById("5").addEventListener('click',()=>{
    textArea.value="5"
})
document.getElementById("6").addEventListener('click',()=>{
    textArea.value="6"
})
document.getElementById("7").addEventListener('click',()=>{
    textArea.value="7"
})
document.getElementById("8").addEventListener('click',()=>{
    textArea.value="8"
})
document.getElementById("9").addEventListener('click',()=>{
    textArea.value="9"
})
document.getElementById("10").addEventListener('click',()=>{
    textArea.value="10"
})
