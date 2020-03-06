drinkSearch = () =>{
    console.log('hi')
    let drinkInput = document.getElementById('drinkInput').value;
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkInput;
    alert('hi')
        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
                document.getElementById('strDrink').innerHTML = data.drinks[0].strDrink;
                console.log(Object.values(data.drinks[0].strDrink))
                document.getElementById('strCategory').innerHTML = data.drinks[0].strCategory;
                document.getElementById('strIBA').innerHTML = data.drinks[0].strIBA
                document.getElementById('strGlass').innerHTML = data.drinks[0].strGlass
                document.getElementById('strInstructions').innerHTML = data.drinks[0].strInstructions.replace('.', '<br>')
                document.getElementById('strDrinkThumb').src = data.drinks[0].strDrinkThumb
                for(i=21; i<36; i++){
                    if(Object.values(data.drinks[i] != null)){
                        let newIngredient = document.createElement('li')
                        let newIngredientName = document.createElement('p')
                        newIngredientName = Object.values(data.drinks[i])
                        document.getElementById('ingredientsList').appendChild(newIngredient).appendChild(newIngredientName)
                        for(i=36; i < 51; i++){
                            if(Object.values(data.drinks[i] != null)){
                                let newIngredientQuantity = document.createElement('p')
                                newIngredientQuantity = Object.values(data.drinks[i])
                                document.getElementById('ingredientsList').appendChild(newIngredient).appendChild(newIngredientQuantity)
                            }
                        }
                    }
                }
        })
            .catch(function (error) {
                console.log(error);
            })
    }


// Modal display

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

