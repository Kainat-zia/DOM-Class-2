// console.log(document);
// console.log(document.head);
// console.log(document.body);

// console.log(document.body.childNodes)


// let Head = document.getElementById("heading")
// Head.style.color = "blue";
// Head.style.backgroundColor = 'black';
// Head.style.fontSize = "65px";
// Head.style.border = "4px solid orange";

// let paragraph = document.getElementsByClassName("para")

// paragraph[2].innerHTML = "DOM Manipulation"
// paragraph[0].style.color = "orange";
// paragraph[0].style.backgroundColor = "yellow"
// paragraph[1].style.color = "green";
// paragraph[1].style.backgroundColor = "black"
// paragraph[1].style.fontSize = "65px";

// let collection = document.getElementsByClassName("container")
// collection[1].style.color = "brown"

// let collect = document.getElementsByTagName("li")
// document.getElementById("demo").innerHTML = collect[1].innerHTML
// document.getElementById("demo").innerHTML = collect[2].innerHTML

// function changecolor(newcolor){
//     const btn = document.getElementById("para")
//     btn.style.color = newcolor
// }
// document.querySelector("p").style.backgroundColor = "pink" 






// class 2 
// const elements = document.getElementById("intro");

// document.getElementById("demo").innerHTML = 
// "The text from the intro paragraph is: " + elements.innerHTML;



// const element = document.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = 
// "The text from the intro paragraph is: " + element[0].innerHTML;


// //  for div (id)
// const x = document.getElementById("main");
// const y = x.getElementsByTagName("p");

// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

// //  for div (by classname . for class we also assign indexes bcz classes are many)
// const a = document.getElementsByClassName("container")
// const firstpara = a[0]
// const b = firstpara.getElementsByTagName("p");

// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "container" is:  ' + b[0].innerHTML;

// const x = document.getElementsByClassName("intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;


// const x = document.querySelectorAll("p.intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 1) with class="intro" is: ' + x[1].innerHTML;


//  set time out function
document.write ("hellow world")
setTimeout(() => {
     alert ("I am inside set time out")
}, 3000);