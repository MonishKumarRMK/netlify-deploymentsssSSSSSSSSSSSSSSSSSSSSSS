// // var p1=fetch("https://restcountries.com/v3.1/all") //it is a promise
// // .then((data)=> data.json())//again here it is a promise
// // .then((data1)=>foo(data1));
// // function foo(data1){
// //     for(var i=0;i<data1.length;i++){
// //         var div=document.createElement("div");
// //         div.innerHTML=`Countryname:${data1[i].name.common} Capital:${data1[i].capital[0]}`;
// //         document.body.append(div);
// //     }

// // }


// var container=document.createElement("div");
// container.className="container";
// var row=document.createElement("div");
// row.className="row";
// container.append(row);
// var res=fetch("https://restcountries.com/v3.1/all");
// res.then((data)=>data.json()).then((data1)=>foo(data1));
// function foo(data1){
//     console.log(data1);
// for(var i=0;i<data1.length;i++){
//     row.innerHTML+=`<div class="col-md-4">
//     <div class="card border-primary mb-3" style="max-width: 18rem;">
//     <img src="${data1[i].flags.svg}" class="card-img-top" alt="...">
//     <div class="card-header">${data1[i].name.common}</div>
//    <div class="card-body text-primary">
//     <h5 class="card-title">Primary card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   </div>
// </div>`;
// document.body.append(container);

// }
// }

var h1=document.createElement("h1");
h1.innerHTML="Covid 19 Tracker";
h1.style.textAlign="center";
h1.style.marginTop="50px";
document.body.append(h1);

var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.style.width="30%";
input.setAttribute("placeholder","Enter the countryname");

var linebreak=document.createElement("br");
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.style.margin="10px";
button.innerHTML="Search";
button.addEventListener("click",foo);


div.append(input,linebreak,button);
document.body.append(div);

async function foo(){
  let res=document.getElementById("country").value;
  console.log(res);
  let url=`https://api.covid19api.com/dayone/country/${res}`;
  let res1 =await fetch(url);
  let res2= await res1.json();
  console.log(res2);
  var index=res2.length-1;
  console.log(res2[index].Active);
}