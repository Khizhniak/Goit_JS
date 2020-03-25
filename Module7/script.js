// const refs = {
//     categor: document.querySelector("#categories"),
//     item: document.querySelectorAll(".item")
// }

// console.log(`В списке ${refs.categor.children.length} elementa`);

// const itemLi = function(refs) {
//     for (let i = 0; i < refs.categor.children.length; i++) {
//         console.log(refs.item[i].firstElementChild.textContent)
//         console.log(refs.item[i].children[1].children.length)
//         console.log('===================')
//     }
// }

// itemLi(refs)

//=========================

// const refs = {
//     ingredient: document.querySelector("#ingredients")
// }

// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
//   ];

//   function inner(ingredients, refs) {
//       for (let i = 0; i < ingredients.length; i++) {
//         const li = document.createElement("li");
//         li.textContent = `${ingredients[i]}`;
//         refs.ingredient.appendChild(li)
//         console.log(li)
//     }

// }

// inner(ingredients, refs)

//=================================

// const refs = {
//     gallery: document.querySelector("#gallery"),
// }

// const images = [
//     {
//       url:
//         'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
//   ];

// const insert = (img, refs) => {
//       const image = img.map(elem =>
//         `<li>
//         <img src="${elem.url}" alt="${elem.alt}"
//         </li>`);
//         return refs.gallery.insertAdjacentHTML("beforeend", image);
//   }

//   insert(images, refs);

//==============================

// const refs = {
//   counter: document.querySelector("#counter"),
//   value: document.querySelector("#value")
// };

// let counterValue = 0;

// const increment = (e) => {
//   e.preventDefault()
//   counterValue -= 1;
//   refs.value.textContent = `${counterValue}`;
// };

// const decrement = (e) => {
//   e.preventDefault()
//   counterValue += 1;
//   refs.value.textContent = `${counterValue}`;
// };

// refs.counter.firstElementChild.addEventListener(
//   "click",
//   increment
// );
// refs.counter.lastElementChild.addEventListener(
//   "click",
//   decrement
// );

//=======================

// const refs = {
//   input: document.querySelector("#name-input"),
//   output: document.querySelector("#name-output")
// }

// const handle = e => {
//   e.preventDefault()
//   if(refs.input.value != ""){
//     refs.output.textContent = refs.input.value
//   } else {
//     refs.output.textContent = `незнакомец`;
//   }
// }

// refs.input.addEventListener("focusout", handle)

//===============================

// const refs = {
//     input: document.querySelector("#validation-input")
// }

// const handle = e => {
// e.preventDefault()
// const res = refs.input.value.length
// const atrib = refs.input.getAttribute("data-length")

// if(res > atrib){
//     refs.input.setAttribute("class", "invalid")
// } else {
//     refs.input.setAttribute("class", "valid")
// }

// }

// refs.input.addEventListener("focusout", handle)

//===============================

const refs = {
    control: document.querySelector("#font-size-control"),
    text: document.querySelector("#text")
}

const handle = e => {
    e.preventDefault()
    console.log(e.target)
    console.log(e.target.value)
refs.text.style.fontSize = e.target.value
}

refs.control.addEventListener("change", handle)