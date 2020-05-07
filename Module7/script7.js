
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