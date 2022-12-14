// Write your code here!
// let body = document.getElementsByTagName('body');
// let element = document.createElement("div");
// element.textContent = 'Hello, world!'
// div.append('element');

// let page = document.createElement('h1')
// page.innerHTML = 'hi world is me'
// h1.append(page)
// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// /}

// element.append(ul);
// body.append(element)
// li.textContent = "Hi there!";
// // => <li>Hi there!</li>
// console.log(li.textContent);


let init = document.querySelector("#main")
init.remove();
const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.textContent = "George is the champion"
document.body.appendChild(newHeader);












