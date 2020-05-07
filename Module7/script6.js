const refs = {
    input: document.querySelector("#validation-input")
}

const handle = e => {
e.preventDefault()
const res = refs.input.value.length
const atrib = refs.input.getAttribute("data-length")

if(res > atrib){
    refs.input.setAttribute("class", "invalid")
} else {
    refs.input.setAttribute("class", "valid")
}

}

refs.input.addEventListener("focusout", handle)