const refs = {
    categor: document.querySelector("#categories"),
    item: document.querySelectorAll(".item")
}

console.log(`В списке ${refs.categor.children.length} елемента`);

const itemLi = function(refs) {
    for (let i = 0; i < refs.categor.children.length; i++) {
        console.log(refs.item[i].firstElementChild.textContent)
        console.log(refs.item[i].children[1].children.length)
        console.warn('===================')
    }
}

itemLi(refs)