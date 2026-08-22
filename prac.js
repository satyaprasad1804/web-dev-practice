// const arr=[1,2,3,4,5]
// function square(arr){
//     const result=[];
//     for(let num of arr){
//         result.push(num ** 2);
//     }
//     console.log(result);
// }
// console.log(square(arr));
  

// const res=arr.map(num=>num **2);
// console.log(res);


// ......FILTER...........

// const arr=[1,2,3,4,5,6];
// const res=arr.filter(num=>num%2==0)
// console.log(res);


// function filter(arr){
//     const res=[];
//     for(let i of arr){
//         if(i % 2 === 0){
//             res.push(i);
//         }
//     }
//     return res;
// }
// const f=filter(arr);
// console.log(f);


// ...........REDUCE...........

// const arr=[1,2,3,4,5,6];
// const res=arr.reduce((acc,curr)=>acc+curr);
// console.log(res);





// ......ARGUMENT OBJECT...........

// function sum(){
//     let sum=0;
//     for(let i of arguments){
//         sum+=i;
//     }
//     console.log(arguments.length);
//     console.log(sum);
// }
// sum(2,3,4,5,6,7);





// ..............REST PARAMETER...........

// function def(a,b,...c){
//     console.log(c[0]);
//     console.log(c);
// }
// def(1,2,3,4,5,6,7,8);





//............ SCOPE.....................
// Object shorthand syntax
// var b=10;
// function greet(){
//     console.log({b});
//     console.log(typeof {b})
// }
// greet();

// {
//     var a=10;
//     let b=20;
//     const c=30;
// }
//  console.log(a);//10 coz var is function scoped and accessible outside the block
//  console.log(b);//error coz let is block scoped and not accessible outside the block
//  console.log(c);//error coz const is block scoped and not accessible outside the block

// function fun1(){ 
// {
//     var x=10;
// }
//     console.log(x);
// }
// fun1();





//modules..................

// export const x=10;
// export function fun1(x,b=3){
// return x+b;
// }





//.....RECURSION.................
// function recursive(num){
//     if(num==0){
//         return 0;
//     }
//     return num+recursive(num-1);
// }
// console.log(recursive(10));

// function fact(num){
//     if(num==0 ||num==1){
//         return 1;
//     }
//     return num*fact(num-1);
// }
// console.log(fact(5));






// console.log(document);

// let head = document.getElementById('head');

// console.log(head);

//dom manipulation
//1.textContent 2.innerText 3.innerHtml

// console.log(head.textContent);
// console.log(head.innerText);
// console.log(head.innerHTML);

// head.textContent = 'Hii this is dom class from library'

// head.innerText = 'Hii this is dom class from library 100'
// head.innerHTML = 'Hii this is dom class from library 200'

// head.textContent = '<strike>Hii this is dom class from library</strike>'
// head.innerText = '<strike>Hii this is dom class from library</strike>'
// head.innerHTML = '<strike>Hii this is dom class from library</strike>'

// head.style.backgroundColor='skyblue'
// let fn = document.getElementById('fn');
// console.log(fn);


// let div = document.createElement('div');
// div.id='div1';

// document.body.appendChild(div);

// let p1 = document.createElement('p');
// p1.textContent='This is para 1';
// let p2= document.createElement('p');
// p2.textContent='This is para 2';

// div.append(p1,p2);




//let para = document.getElementsByClassName('para');

// console.log(para);

// let para = document.querySelectorAll('p');
// console.log(para);





// ---------------------------------------------------------------------------------
// -------------DOM ACCESS-----------------------------

// let start=document.getElementById("btnstart");
// let stop=document.getElementById("btnstop");
// console.log(start);
// console.log(stop);
// let cont=document.getElementsByClassName("container");
// console.log(cont);






// -------------------EVENT LISTENERS--------------------------------
//  let start=document.querySelector("#btnstart");
//  function message(){
//     console.log("start button clicked")
//  }
//   start.addEventListener("click",()=>{
//     start.innerHTML="<b>button clicked<b>";
// });
// ------------------click,------mouseenteer--------------------
// start.addEventListener("click",()=>{
//     if(start.textContent=="start"){
//         start.textContent="clicked"
//     }
//     else{
//         start.textContent="start";
//     }
// })



// let count=document.querySelector("#btncount");
// let cnt=0;
// count.addEventListener("mouseenter",()=>{
//     cnt=cnt+1;
//     count.innerText=cnt;
//     console.log(cnt);
// })



// let stop=document.querySelector("#btnstop");
// stop.addEventListener("click",()=>{
//     stop.classList.add("btn-red");
// })




// ----------------Toggle-----------------
// let stop=document.querySelector("#btnstop");
// stop.addEventListener("click",()=>{
//     stop.classList.toggle("btn-red");
// })

// ----------------create element and append to class and remove element ------------------------------

// let container=document.querySelector(".container");
// let p=document.createElement("p");
// p.innerText="Hello it is para";
// container.append(p);
// let h1=document.querySelector("#h1");
// h1.remove();




// ----------PRACTICE---------------
// let div=document.createElement("div");
// div.classList.add("container2");
// // let container=document.querySelector(".container");
// // container.append(div);
// document.body.append(div);
// let container2=document.querySelector(".container2");
// let start=document.querySelector("#btnstart");
// let stop=document.querySelector("#btnstop");

// let p;
// start.addEventListener("click",()=>{
//  p=document.createElement("p");
//   p.innerText="Hello";
//   div.append(p);
// })

// stop.addEventListener("click",()=>{
//     if(div.lastElementChild){
//         // p.remove(); //removes last child only
//          div.lastElementChild.remove();
//     }
// })


// --------------------events-----------------------------------


// let input=document.querySelector(".input");
// input.addEventListener("change",()=>{
//    console.log(input.value);
// })


// let input=document.querySelector(".input");
// input.addEventListener("input",()=>{
//    console.log(input.value);
// })


// let input=document.querySelector(".input");
// input.addEventListener("focus",()=>{
//    console.log(input.value);
// })


// let input=document.querySelector(".input");
// input.addEventListener("keyup",()=>{
//    console.log(input.value);
// })

//let input=document.querySelector(".input");
// input.addEventListener("keydown",()=>{
//    console.log(input.value);
// })


// --------------------------events on forms-----------------------------------

// let form=document.querySelector("#form");
// let name=document.querySelector("#name")
// let mail=document.querySelector("#mail")
// let p=document.querySelector("#p")

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let n=name.value;
//     let e=mail.value;
//     if(n==""||e==""){
//         p.innerText="please enterr valid name";
//     }
//     else{
//         p.innerText=`hello ${n} confirm your email address ${e}`
//     }
// })


// --------------MOUSE EVNTS------------

// let input=document.querySelector(".input");
// input.addEventListener("mousedown",(event)=>{
//     console.log(event.button);
// })


// input.addEventListener("mousedown",(event)=>{
//     let corx=event.pageX;
//     let cory=event.pageY;
//     console.log(`${corx}, ${cory}`);
// })


// let input=document.querySelector(".input");
// input.addEventListener("mousedown",(event)=>{
//   if(event.button==0){
//     console.log('left click');
//   }
//   else {
//     console.log('right click');
//   }
// })


// -------------------Bubbling--------------------------

let div=document.querySelector("#div");
let h1=document.querySelector("#h1");
let p=document.querySelector("#p");
// div.addEventListener("click",(e)=>{
//            e.stopPropagation()           //to stop bubbling to parent c\element only particular ele is triggred
//     alert("div clicked");
// })
// h1.addEventListener("click",(e)=>{
//       e.stopPropagation()
//     alert("h1 clicked")
// })
// p.addEventListener("click",(e)=>{
//              e.stopPropagation()
//     alert("p clicked");
// })







// -------------capturing---------------

// div.addEventListener("click",()=>{
//     alert("div clicked");
// },true)
// h1.addEventListener("click",()=>{
//     alert("h1 clicked")
// },true)
// p.addEventListener("click",()=>{
//     alert("p clicked");
// },true)



let parent=document.getElementById("parent");
let container=document.createElement("div");
container.classList.add("container");
parent.append(container)

let img=document.createElement("img");
img.setAttribute("src","./TodoList/pic.png");
img.setAttribute("alt","this is img");
container.append(img);
