const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output")
}

const handle = e => {
  e.preventDefault()
  if(refs.input.value != ""){
    refs.output.textContent = refs.input.value
  } else {
    refs.output.textContent = `незнакомец`;
  }
}

refs.input.addEventListener("focusout", handle)