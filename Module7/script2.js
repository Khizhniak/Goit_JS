const refs = {
    ingredient: document.querySelector("#ingredients")
}

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  function inner(ingredients, refs) {
      for (let i = 0; i < ingredients.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${ingredients[i]}`;
        refs.ingredient.appendChild(li)
        console.log(li)
    }

}

inner(ingredients, refs)