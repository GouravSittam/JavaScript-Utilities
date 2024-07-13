

//even number
for(let i=0;i<=100;i++){
    if(i%2==0){
    console.log("num = " + i ); 
}
}

//odd number
for(let j=0;j<=100;j++){
    if(j%2!=0){
    console.log("num = " + j ); 
}
}

//2

let gamenum=22;
let usernum=prompt("Guess the number: ");
while(usernum!=gamenum){
    usernum=prompt("you guess wrong number.Guess it again");
}
console.log("congratulation");