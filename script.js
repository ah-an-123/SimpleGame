let userName=document.getElementById("name");
let progress=document.getElementById("progress");
let times=parseInt(prompt("How Many Numbers You Want To Bet"))
let input=document.getElementById("n")
let btn=document.getElementById("btn")
let arr=[times];
let scores=0;
let i=0;
let num=1;
progress.value=0
//Input Name of player
let name=prompt("Enter your Name ");
if(name!=null){
    userName.innerHTML=name;
}3

input.value="Enter Your "+num+" Number ";
btn.addEventListener('click',()=>{
    num++;
    let computerNumber=Math.round(Math.floor(Math.random() * 11))
    arr[i]=input.value;
    if(arr[i]==computerNumber){
    scores++;
    progress.value=(scores/times)*100;
    }
    input.value="";
    i++;
    input.value="Enter Your "+num+" Number ";
    if(i==times){
        btn.setAttribute("disabled","true")
        input.value="Your Scores are "+scores+" Out Of "+times;
    }
})
document.getElementById("0").addEventListener('click',()=>{
    input.value="0"
})
document.getElementById("1").addEventListener('click',()=>{
    input.value="1"
})
document.getElementById("2").addEventListener('click',()=>{
    input.value="2"
})
document.getElementById("3").addEventListener('click',()=>{
    input.value="3"
})
document.getElementById("4").addEventListener('click',()=>{
    input.value="4"
})
document.getElementById("5").addEventListener('click',()=>{
    input.value="5"
})
document.getElementById("6").addEventListener('click',()=>{
    input.value="6"
})
document.getElementById("7").addEventListener('click',()=>{
    input.value="7"
})
document.getElementById("8").addEventListener('click',()=>{
    input.value="8"
})
document.getElementById("9").addEventListener('click',()=>{
    input.value="9"
})
document.getElementById("10").addEventListener('click',()=>{
    input.value="10"
})

input.addEventListener('click',()=>{
    alert("Please Use Buttons Given Below ");
})
