//for loop
// for(let i=1;i<=10;i++){
//     console.log("Grv Chaudhary");
// } 
// console.log("loop has ended");

// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log("Sum is "+sum);

// let sum=0;
// let n=100;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log("Sum is "+sum);


// for(let i=1;i<=5;i++){
//     console.log('i= ',i);
// }


//While loop
// let i=1;
// while(i<=5){
//     console.log('i is ',i);
//     i++;
// }


//do while loop
// let j=20;
// do{
//     console.log("grv chaudhary");
//     j++;
// }while(j<=30)

//for of loop for use string and arrys

// let str="Gourav Chaudhary";

// let size=0;
// for(let i of str){
//     console.log("i is ",i);
//     size++;
// }
// console.log("String size  is "+size);


//for in loop for use object and arrys
let stu={
    name:"Grv Chaudhary",
    age:20,
    cgpa:7.5,
    ispass:"true",

};
for(let key in stu){
    console.log("key=",key,"value=",stu[key]);

}