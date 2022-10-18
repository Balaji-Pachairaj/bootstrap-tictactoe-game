gameContainerEl = document.getElementById("gameContainer");
color=[["#FDFF00","#2192FF"],["#7FB77E ",'#FFC090'],['#035397',"#FF6363"],["white","black"]];
let n=0;
/*
function switchColor(n){
    n =0 ?(n==(color.length-1)):n;
    console.log(n);
    n= n+1;
    setTimeout(4000,switchColor(),n);
}
switchColor(n);
console.log(2432)*/
n=0
function nAdding(){
   
    console.log(n);
    
    gameContainerEl.style.backgroundImage =`linear-gradient(to right,${color[n][0]},rgb(168, 151, 151),${color[n][1]})`;
    if (n==(color.length-1)){
        n=0;
    }
    n=n+1;
    setTimeout(nAdding,3000);
}
nAdding()